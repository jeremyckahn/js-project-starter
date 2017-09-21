# A Modern JavaScript Project

### A demonstration of modern JavaScript project structure

This is a minimalist example of how you might set up a modern JavaScript project.  The goal is to establish a baseline set of features to build a project out of, while remaining unopinionated enough to be "guessable" by the average developer.  It's also designed with CI integration in mind by sticking to [npm scripts](https://docs.npmjs.com/misc/scripts) for running tasks.

This project provides a bootstrap for:

  * Authoring in ES6
  * Running tests (written in [Mocha](https://mochajs.org/))
  * Browser dev tool support
  * A build process
  * Versioned releases

[This blog post](https://tech.jellyvision.com/2017/08/javascript-projects-joining-the-present/) explores some of the motivations of this project.

## Getting started

Here's a handy snippet you can add to your `.bash_profile` to create new tools easily:

```
function new_js_project() {
  if [ -z "$1" ];
  then
    "Must specify a project name as the first argument"
    return
  else
    git clone --depth=1 https://github.com/jeremyckahn/modern-js-project.git "$1"
    cd "$1" || exit 1
    rm -rf .git
    find . -type f -exec sed -i "" "s/modern-js-project/$1/g" {} \;
    git init
    git add --all
    git commit -m "Initial commit"
    npm install
  fi
}
```

## Authoring in ES6

Painlessly write your code as beautiful ES6!  Thanks to [Webpack](https://webpack.github.io/), all of your code will be compiled down to more compatible ES5 syntax that can be easily used by downstream projects.

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

## Debugging

This project configures Webpack to generate [source maps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) so you can use your browser's dev tools to debug your ES6 code just as easily as you would with ES5.

```
# run the tests in your browser
npm start
```

From here, you can fire up your browser's dev tools and set breakpoints, step through code, etc.  You can run the app at <a href="http://localhost:9123">http://localhost:9123</a>, or run the tests at <a href="http://localhost:9123/test.html">http://localhost:9123/test.html</a>.

## A build process

All projects need a build process, and this project leverages Webpack for that as well.

```
npm run build
```

Your compiled code will wind up in the `dist` directory.

## Documentation

You should make sure to update the [JSDoc](http://usejsdoc.org/) annotations as you work.  To view the formatted documentation in your browser:

```
npm run doc:view
```

This will generate the docs are run them in your browser.  If you would like this to update automatically as you work, leave the task running in your shell and run this task in a second shell:

```
npm run doc:watch
```

## Versioned releases

npm makes it super easy to make versioned releases!  This project is set up to run tests before making a release, which helps prevent you from releasing new versions with bugs.  This happens automatically thanks to the [npm version scripts](https://docs.npmjs.com/cli/version).

```
npm version patch # Or "minor," or "major"
```

This will also use the [gh-pages](https://github.com/tschaub/gh-pages) utility to deploy your versioned project with [GitHub Pages](https://pages.github.com/).

## License

MIT.
