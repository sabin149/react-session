### Getting Started

Prerequisites

- Node.js (version 15 or above)

### Installation

- Clone the repository:
  ```
    git clone https://github.com/sabin149/react-session.git
  ```
- Navigate to the project directory
  ```
  cd react-session
  ```
- Install the dependencies:

  ```
  npm install
  ```

- Create a .env.local file in the project root and add the following environment variables

  ```
    VITE_BACKEND_API=http://localhost:3000
  ```

- Start the json server:

  ```
  npm run json-server
  ```

- Start the frontend server:

  ```
  npm run dev
  ```

### Additional Scripts

- `npm run preview`: Preview the production build locally.
- `npm run lint: Run` ESLint to check for code quality issues.
- `npm run lint:fix`: Automatically fix code quality issues where possible.
- `npm run prettier`: Check code formatting using Prettier.
- `npm run prettier`:fix: Automatically fix code formatting issues.
- `npm run format`: Format code using Prettier and fix code quality issues.
- `npm run test`: To run all the tests.
- `npm run json-server`: To start the json server.
- `npm run cypress`: To start the cypress
