# TestCafe Proof of Concept

This project was developed for the NinjaOne QA Technical Test as a proof of concept using TestCafe for end-to-end testing.

## Project Overview

The `testcafe-proof-of-concept` is a test automation project aimed at demonstrating the use of TestCafe for automated testing of web applications. It includes configurations for running tests across multiple browsers and integrates PactumJS for API testing.

## Project Structure

- **main**: `index.js`
- **tests**: All test files are located under the `tests/e2e/tests/` directory.

## Scripts

The following scripts are available to run tests:

- **Run Tests in Chrome:**
  ```bash
  npm run test:e2e
  ```
  This script runs all end-to-end tests in Chrome.

- **Run Tests in Firefox:**
  ```bash
  npm run test:e2e:firefox
  ```
  This script runs all end-to-end tests in Firefox.

- **Run Tests in Both Chrome and Firefox:**
  ```bash
  npm run test:e2e:all
  ```
  This script runs all end-to-end tests in both Chrome and Firefox.

## Installation

To get started with this project, follow the steps below:  
1. Navigate to the project directory:
   ```bash
   cd testcafe-proof-of-concept
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Running Tests

- To run tests in a specific browser (e.g., Chrome), use:
  ```bash
  npm run test:e2e
  ```

- To run tests in Firefox, use:
  ```bash
  npm run test:e2e:firefox
  ```

- To run tests in both Chrome and Firefox, use:
  ```bash
  npm run test:e2e:all
  ```

## Dependencies

This project uses the following dependencies:

- **TestCafe**: `^3.0.0` - For end-to-end testing.
- **Pactum**: `^3.7.1` - For API testing.
- **Mocha**: `^10.7.3` - For additional testing frameworks if needed.
- **dotenv**: `^16.4.5` - For managing environment variables.

## Author

- **Antonio Lima**

## License

This project is licensed under the "My Own" license.