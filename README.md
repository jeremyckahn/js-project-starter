# A Modern JavaScript Project

### A demonstration of modern JavaScript project structure

This is a minimalist example of how you might set up a modern JavaScript project.  The goal is to establish a baseline set of features to build a project out of, while remaining unopinionated enough to be "guessable" by the average developer.  It's also designed with CI integration in mind by sticking to [npm scripts](https://docs.npmjs.com/misc/scripts) for running tasks.

This project provides a bootstrap for:

  * Authoring in ES6
  * Running tests (written in [Mocha](https://mochajs.org/))
  * Browser dev tool support
  * A build process
  * Versioned releases

## Installation

```
git clone https://github.com/jeremyckahn/modern-js-project.git
cd modern-js-project
npm install
```

## Authoring in ES6

Painlessly write your code as beautiful ES6!  Thanks to [Webpack](https://webpack.github.io/), all of your code will be compiled down to more compatible ES5 code that can be easily consumed by downstream projects.

```
npm build
```

## Running tests (written in Mocha)

Code should be tested!  [Mocha](https://mochajs.org/) is a perennial test framework among JavaScript developers, so this project uses that.

```
# run tests in the CLI
npm test
```

```
# run tests in the CLI with a watcher that will re-run tests
# when you make a code change
npm run test:watch
```

## Browser dev tool support

This project configures Webpack to generate [source maps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) so you can use your browser's dev tools to debug your ES6 code just as easily as you would with ES5.

```
# run the tests in your browser
npm start
```

From here, you can fire up your browser's dev tools and set breakpoints, step through code, etc.

## A build process

All projects need a build process, and this project leverages Webpack for that as well.

```
npm run build
```

Your compiled code will wind up in the `dist` directory.

## Versioned releases

npm makes it super easy to make versioned releases!  This project is set up to run tests before making a release, which helps prevent you from releasing new versions with bugs.  This happens automatically thanks to the [npm version scripts](https://docs.npmjs.com/cli/version).

```
npm version patch # Or "minor," or "major"
```

## License

MIT.
