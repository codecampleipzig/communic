# Communic

[![Build Status](https://travis-ci.com/codecampleipzig/communic.svg?branch=master)](https://travis-ci.com/codecampleipzig/communic)
[![Build Status](https://travis-ci.com/codecampleipzig/communic.svg?branch=develop)](https://travis-ci.com/codecampleipzig/communic)

Communic is a community management platform, with the goal to build help community leaders and initiators of hybdrid communities to plan and build projects that are proposed by initiators who actively contribute, in an engaging and motivating way!

This open source project has been initiated and started by the first class of the Code Camp Leipzig. If you want to contribute and help us make the platform better, you are very welcome! The development is currently still at the MVP-Stage.

## Backend

The backend for this project can be found under: https://github.com/codecampleipzig/communic-backend
To run the app or the tests the backend has to be running on port localhost:4200.

## Development

If you want to contribute by adding a feature, please contact the initiators and checkout the branches, to see on what features we are currently working on. Because the project is still a MVP, we try to only build high-value-low-effort features, to get the project running ASAP. The initiators can give you an overview of the development and what features need to be build and implemented next.

We are working with Angular and every feature has its own component. If you want to learn more about Angular, checkout: https://angular.io/

Once you chose a feature, you want to work on, start your own branch from the "develop" branch. Here we merge all our features.
Please name you branch like the feature you are working on, so other developers know what you are working on.
If you have completed a branch, set up a pull request, so we can all have a look on you feature and review it, before we merge it into the "develop" branch.

## Development Infrastructure

## Commands And Packages

You can find all dependencies, commands and packages we installed, in the "package.json" file.
Everytime you run a commit, the code will automatically be tested, linted and checked out by compodoc.

## Testing

We are using "jest" as our testing framework. If you want to know more about jest, checkout: https://jestjs.io/docs/en/getting-started.html
You will find several example tests in the "component.specs.ts files" and those will be executed everytime a commit is run.
Please also checkout the testing guidelines, which you will find in the "github communic wiki". Here you can learn more about testing with Angluar and how to write test for your components: https://angular.io/guide/testing

Here you find the test commands:

- npm test
- npm test:watch
- npm test:ci
- npm test:coverage

## tslint

tslint

- npm lint : runs lint and shows all minor errors
- npm autofix : runs lint and fixes all the minor error

## Documentation

We are using Compodoc, to assure that components are documented and understandable for everyone. It executes on every commit and does not let you commit, if the code is not documented well enough. The treshhold for documentation for a file is 20%. For code documentation we use "Typedoc", which uses the following structure:

Inside your code:
/\*\*

- Here comes your documenatation
  \*/

If you need to write text documentation, create a new .md file in "docs".
