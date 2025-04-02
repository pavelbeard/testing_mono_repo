<<<<<<< HEAD
import { type BrowserContext } from '@playwright/test'
=======
import type { BrowserContext } from '@playwright/test'
>>>>>>> e2e-tests

export class LocalStorage {
  private context: BrowserContext

  constructor(context: BrowserContext) {
    this.context = context
  }

  get localStorage() {
    return this.context.storageState().then(storage => {
      const origin = storage.origins.find(
        ({ origin }) => origin === 'http://localhost:5173'
      )
<<<<<<< HEAD

      if (origin) {
        return origin.localStorage.reduce(
          (acc, curr) => ({
            ...acc,
            [curr.name]: curr.value
          }),
=======
      if (origin) {
        return origin.localStorage.reduce(
          (acc, curr) => ({ ...acc, [curr.name]: curr.value }),
>>>>>>> e2e-tests
          {}
        )
      }
      return {}
    })
  }
}
