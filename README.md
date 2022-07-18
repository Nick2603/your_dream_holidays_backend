# Your Dream Holidays

## Description

Simple in use and minimalistic App to cover basic informational needs of any traveler

## Installing dependencies

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing the app

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Tooling

[ESlint](https://eslint.org/) for static code analysis and quick troubleshooting.

[Prettier](https://prettier.io/) for automatic code formatting.

## Src folder structure

### main.ts
The entry file of the application which uses the core function NestFactory to create a Nest application instance.

### app.module.ts
The root module of the application.

### models folder
Contains ICountry.ts file with interface for the country model.

### countries folder
Contains countries.controller.ts file with a basic controller with a single route, countries.module.ts file with module of the countries endpoint, countries.service.ts file with a basic service with a single method.