# About-Me-Front

## Repository contents

Repository contains an About-Me project using Vite.

Key technologies

    React — Building reusable, interactive user interface components.
    TypeScript — Improving code quality and maintainability with static typing.
    Vite — Providing a fast development environment and optimized production builds.
    Tailwind CSS — Styling the application with a utility-first CSS framework.
    React Router — Handling client-side navigation between pages.
    Zustand — Managing application state when needed.
    Axios — Handling HTTP requests.
    Zod — Validating data at runtime.
    Vitest — Testing components and application logic.
    Playwright — Running end-to-end browser tests.
    Storybook — Developing and documenting UI components in isolation.
    @gi-org-pl/athena — Providing reusable UI components and shared styling.

Project's main dependencies are listed below.

| Dependency   | Version |
| -------      | ------- |
| Vite         | ^7.2    |
| React        | ^19.x   |
| Tailwind CSS | ^4.x    |
| Vitest       | ^4.x    |
| Playwright   | ^1.x    |
| Zod          | ^4.x    |
| Axios        | ^1.x    |
| Zustand      | ^5.x    |
| Storybook    | ^10.x   |
| @gi-org-pl/athena | ^1.x |

## Setting project up

1. Before running the project, make sure you have installed:

    Node.js version 24 or higher
    Yarn 1.22.x

2. Install Yarn globally:

   ```shell
   npm install --global yarn@^1.22
   ```

3. Clone project by running:

   ```shell
   git clone git@github.com:Chromamouse/About-Me-Front
   ```

4. Navigate to the project directory:

   ```shell
   cd About-Me-Front
   ```

5. Install dependencies using Yarn:

   ```shell
   yarn install
   ```

## Running the project

To start the development server:

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Available scripts

```bash
yarn dev              # Start development server
yarn build            # Build for production
yarn preview          # Start production server (after build)
yarn test             # Run unit tests with Vitest
yarn test:coverage    # Run tests with coverage report
yarn e2e              # Run end-to-end tests with Playwright
yarn e2e:ui           # Run Playwright tests in UI mode
yarn lint             # Run Biome linter
yarn lint:fix         # Fix linting issues automatically
yarn storybook        # Run Storybook in development mode
yarn storybook:build  # Build Storybook for production
```

## Build

This project uses Vite and React Router for building and serving the application. The build process generates optimized static assets for production deployment.

Build the project with `yarn build` and preview the production build locally with `yarn preview`.

## Testing

This boilerplate includes both unit testing and end-to-end testing:

- **Unit Tests**: Uses Vitest with React Testing Library for component and utility testing
- **E2E Tests**: Uses Playwright for browser-based end-to-end testing

Run tests with:

```bash
yarn test              # Run unit tests
yarn test:coverage     # Run tests with coverage
yarn e2e               # Run E2E tests
yarn e2e:ui            # Run E2E tests in UI mode
```

## Visual testing

This Project uses Storybook for visual testing and component development. Storybook provides an isolated environment to develop, test, and document UI components independently.

Run Storybook with:

```bash
yarn storybook        # Start Storybook development server (http://localhost:6006)
```

## Working with Athena

`@gi-org-pl/athena` exports all ours reusable components. If you need new reusable component, please update athena package instead of creating a new component in the project. Create new components in the project only if they will be used only in this specific project.

Athena is installed from npm like any other dependency, no token or `.npmrc` needed. Its styles are loaded in `src/index.css` with `@import "@gi-org-pl/athena/athena.css";`, which also imports Tailwind CSS and Athena's theme.

A new Athena version is published automatically after each merge to Athena's `main` (see [releases](https://github.com/gi-org-pl/athena/releases)). To use it:

```bash
yarn upgrade @gi-org-pl/athena --latest
```
