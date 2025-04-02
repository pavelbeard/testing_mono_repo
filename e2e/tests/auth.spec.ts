<<<<<<< HEAD
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
=======
import { test, expect } from '@fixtures/auth.fixture'

test.describe('auth', () => {
  test('should redirect unauthorized user to the login page', async ({
    page
  }) => {
    await page.goto('http://localhost:5173/')
    await expect(page).toHaveURL('http://localhost:5173/login')
  })

  test('should redirect to the home page when a new account is created', async ({
    loginPage,
    user_credentials,
    page,
>>>>>>> e2e-tests
    storage
  }) => {
    await loginPage.populateForm(
      user_credentials.username,
      user_credentials.password
    )
<<<<<<< HEAD

=======
>>>>>>> e2e-tests
    await page.click('#signup')
    await page.waitForLoadState('networkidle')

    const localStorage = await storage.localStorage

    expect(localStorage).toHaveProperty('quoots-user')
    await expect(page).toHaveURL('http://localhost:5173')
  })

<<<<<<< HEAD
  test('should redirect user to home page after user logs in', async ({
    account,
    loginPage,
    storage,
    page
  }) => {
    await loginPage.populateForm(account.username, account.password)

=======
  test('should redirect to the home page when a user logs in', async ({
    loginPage,
    page,
    storage,
    account
  }) => {
    await loginPage.populateForm(account.username, account.password)
>>>>>>> e2e-tests
    await page.click('#login')
    await page.waitForLoadState('networkidle')

    const localStorage = await storage.localStorage

    expect(localStorage).toHaveProperty('quoots-user')
    await expect(page).toHaveURL('http://localhost:5173')
  })
<<<<<<< HEAD
=======

  test('should warn you if your login is incorrect', async ({
    loginPage,
    page
  }) => {
    await loginPage.populateForm('incorrect', 'password')
    await page.click('#login')
    await page.waitForLoadState('networkidle')

    await expect(page).toHaveURL('http://localhost:5173/login')
    await expect(page.getByText('Account not found.')).toBeVisible()
  })

  test('should warn you if an you try to sign up with an existing username', async ({
    loginPage,
    page,
    account
  }) => {
    await loginPage.populateForm(account.username, account.password)
    await page.click('#signup')
    await expect(page).toHaveURL('http://localhost:5173/login')
    await expect(
      page.getByText('A user already exists with that username')
    ).toBeVisible()
  })

  test('should warn you if your form is empty', async ({ page, loginPage }) => {
    await loginPage.page.click('#login')

    await expect(page).toHaveURL('http://localhost:5173/login')
    await expect(
      page.getByText('Please enter a username and password')
    ).toBeVisible()
  })

  test('should return you to the home page when you log out', async ({
    page,
    loginPage,
    storage,
    account
  }) => {
    await loginPage.populateForm(account.username, account.password)
    await page.click('#login')
    await page.waitForLoadState('networkidle')
    await page.click('#logout')
    await page.waitForLoadState('networkidle')

    const localStorage = await storage.localStorage

    await expect(page).toHaveURL('http://localhost:5173/login')
    expect(localStorage).not.toHaveProperty('quoots-user')
  })
>>>>>>> e2e-tests
})
