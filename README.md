# Communic

master: [![Build Status](https://travis-ci.com/codecampleipzig/communic.svg?branch=master)](https://travis-ci.com/codecampleipzig/communic)
develop: [![Build Status](https://travis-ci.com/codecampleipzig/communic.svg?branch=develop)](https://travis-ci.com/codecampleipzig/communic)

Communic is a community management platform, with the goal to build help community leaders and initiators of hybdrid communities to plan and build projects that are proposed by initiators who actively contribute, in an engaging and motivating way!

This open source project has been initiated and started by the first class of the Code Camp Leipzig. If you want to contribute and help us make the platform better, you are very welcome! The development is currently still at the MVP-Stage.

## Installation
Will be added, once the project MVP is finished.

## Development
If you want to contribute by adding a feature, please contact the initiators and checkout the branches, to see on what features we are currently working on. Because the project is still a MVP, we try to only build high-value-low-effort features, to get the project running ASAP. The initiators can give you an overview of the development and what features need to be build and implemented next.

We are working with Angular and every feature has it´s own component. If you want to learn more about Angular, checkout: https://angular.io/ 

Once you chose a feature, you want to work on, start your own branch from the "develop" branch. Here we merge all our features.
Please name you branch like the feature you are working on, so other developers know what you are working on.
If you have completed a branch, set up a pull request, so we can all have a look on you feature and review it, before we merge it into the "develop" branch.

*Do i need to explain shit like npm install?*

## Development Infrastructure
## Commands And Packages
You will all the dependencies, commands and packages we installed, in the "package.json" file.
Everytime you run a commit, the code will automatically tested, linted and checked out by compodoc.

Packages installed:
- @angular-devkit/build-angular
- @angular/cli
- @angular/compiler-cli
- @angular/language-service
- @compodoc/compodoc
- @types/jest"
- @types/node
- canvas
- codelyzer
- husky
- jest
- jest-present-angular
- lint-staged
- ng-lint-staged
- prettier
- ts-node
- tslint
- typescript

## Testing
We are using "jest" as our testing framework. If you want to know more about jest, checkout: https://jestjs.io/docs/en/getting-started.html
You will find several example tests in the "component.specs.ts files" and those will be executed everytime a commit is run.
Please also checkout the testing guidelines, which you will find in the "github communic wiki". Here you can learn more about testing with Angluar and how to write test for your components: https://angular.io/guide/testing

Here you find the test commands:
- npm test
- npm test:watch
- npm test:ci
- npm test:coverage

*Are they really necessary?*

## tslint
tslint 
- npm lint : runs lint and shows all minor errors
- npm autofix : runs lint and fixes all the minor error

## Documentation
We are using Compodoc, to assure that components are documented and understandable for everyone. It executes on every commit and does not let you commit, if the code is not documented well enough. The treshhold for documentation for a file is 20%. For code documentation we use "Typedoc", which uses the following structure:

Inside your code:
/**
 * Here comes your documenatation
 */

If you need to write text documentation, create a new .md file in "docs". 

### Notes
- Use of the TestBed.compileComponents() method is only required when Webpack
is not being used (or is not configured properly). Check the Webpack configuration
file if template compilation errors arise.
