# Test Playwright

This project contains basic Playwright test examples.

## Running tests locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Install Playwright browsers if you have not done so:
   ```bash
   npx playwright install --with-deps
   ```
3. Set the following environment variables before running the tests:
   - `ENV_URL` - base URL used by tests.
   - `USERID` - user identifier for authentication.
   - `PASSWORD` - corresponding password.

   You can export them in your shell or place them in a `.env` file. `playwright.config.ts` contains commented `dotenv` lines that can be uncommented to automatically load variables from `.env`.

4. Run the tests:
   ```bash
   npx playwright test
   ```
