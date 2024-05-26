# SportyCoon

SportyCoon is an cross-platform application to encourage people to do sports and helps to manage it inside simple intuitive app with useful tools, friendly community, suitable
training programs and other nice stuff.

## What's inside repo?

This monorepo includes the following packages/apps:

### Apps

- `docs`: a Storybook app build by React Vite
- `main`: a client based Next.js app for general users
- `admin`: a client based Next.js app for administration

### Packages

- `@sportycoon/ui`: a stub React component library shared by both `main`, `admin` and `docs` applications
- `@sportycoon/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@sportycoon/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% TypeScript.

### Utilities

This monorepo has some additional tools already setup:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

## License

Licensed under the [MIT License](./LICENSE).
