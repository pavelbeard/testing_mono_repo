import { test, expect } from './fixtures/auth.fixture'

test.describe('auth', () => {
  test('should redirect unauthorized user to login page', async ({ page }) => {
    await page.goto('http://localhost:5173')
    await expect(page).toHaveURL('http://localhost:5173/login')
  })

  test('should warn you that login is incorrect', async ({
    page,
    loginPage
  }) => {
    await loginPage.populateForm('incorrect', 'password')

    await page.click('#login')
    await page.waitForLoadState('networkidle')
    await expect(page.getByText('Account not found')).toBeVisible()
  })

  test('should warn you that fields are empty', async ({ page, loginPage }) => {
    await loginPage.populateForm('', '')

    await page.click('#login')
    await page.waitForLoadState('networkidle')
    await expect(
      page.getByText('Please enter a username and password')
    ).toBeVisible()
  })

  test('should redirect user to home page after user creates account', async ({
    user_credentials,
    page,
    loginPage,
    storage
  }) => {
    await loginPage.populateForm(
      user_credentials.username,
      user_credentials.password
    )

    await page.click('#signup')
    await page.waitForLoadState('networkidle')

    const localStorage = await storage.localStorage

    expect(localStorage).toHaveProperty('quoots-user')
    await expect(page).toHaveURL('http://localhost:5173')
  })

  test('should redirect user to home page after user logs in', async ({
    account,
    loginPage,
    storage,
    page
  }) => {
    await loginPage.populateForm(account.username, account.password)

    await page.click('#login')
    await page.waitForLoadState('networkidle')

    const localStorage = await storage.localStorage

    expect(localStorage).toHaveProperty('quoots-user')
    await expect(page).toHaveURL('http://localhost:5173')
  })
})
