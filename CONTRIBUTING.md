# v-ime-model Contributing Guide

- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)

## Issue Reporting Guidelines

- It is recommended that you make a JSFiddle/JSBin/Codepen to demonstrate your issue. You could start with [this template](http://jsfiddle.net/5sH6A/) that already includes the latest version of Vue.

- For bugs that involves build setups, you can create a reproduction repository with steps in the README.

- If your issue is resolved but still open, don’t hesitate to close it. In case you found a solution by yourself, it could be helpful to explain how you fixed it.

## Pull Request Guidelines

- The `master` branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

- Checkout a topic branch from the relevant branch, e.g. `dev`, and merge back against that branch.

- Work in the `src` folder and **DO NOT** checkin `dist` in the commits.

- It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging.

- Make sure `npm test` passes. (see [development setup](#development-setup))

- If adding new feature:
  - Add accompanying test case.
  - Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it.

- If fixing a bug:
  - Provide detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.

### Work Step Example
- Fork the repository from [kciter/vue-ime-model](https://github.com/kciter/vue-ime-model) !
- Create your topic branch from `dev`: `git branch my-new-topic origin/dev`
- Add codes and pass tests !
- Commit your changes: `git commit -am 'Add some topic'`
- Push to the branch: `git push origin my-new-topic`
- Submit a pull request to `dev` branch of `kciter/vue-ime-model` repository !

## Development Setup

You will need [Node.js](http://nodejs.org) and [Java Runtime Environment](http://www.oracle.com/technetwork/java/javase/downloads/index.html) (needed for running Selenium server during e2e tests).

After cloning the repo, run:

    $ npm install

### Commonly used NPM scripts

    # watch and serve with hot reload unit test at localhost:8080
    $ npm run dev

    # lint source codes
    $ npm run lint

    # build all dist files, including npm packages
    $ npm run build

    # run the full test suite, include linting
    $ npm test

There are some other scripts available in the `scripts` section of the `package.json` file.

The default test script will do the following: lint with ESLint -> e2e tests. **Please make sure to have this pass successfully before submitting a PR.** Although the same tests will be run against your PR on the CI server, it is better to have it working locally beforehand.
