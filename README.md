# AMD/Backbone Boilerplate 

An AMD/Backbone boilerplate for JavaScript web applications with tests (via [Mocha](http://visionmedia.github.io/mocha), dependency management (via [npm](https://npmjs.org) and [Bower](https://github.com/bower/bower)) and a build process ([r.js](http://requirejs.org/docs/optimization.html)) using [Grunt](http://gruntjs.com). While attempting to learn the AMD way of life, I found existing projects like Backbone Boilerplate, while slick, to be overwhelming. So like most things, you learn by doing and I'm attempting to start from scratch in building a sustainable, reusable boilerplate that meets my needs.  

[A](http://www.henriquebarroso.com/creating-a-dynamic-modular-multi-page-app-with-backbone-js-and-requirejs/) [few](http://backbonetutorials.com/organizing-backbone-using-modules/) tutorials are helping me with this, as well as the aforementioned [Backbone Boilerplate](https://github.com/backbone-boilerplate/backbone-boilerplate).

## Installation

You'll need [Node](http://nodejs.org) so that you can install Bower (globally):

    npm install -g bower

Now you're ready to install all of the vendor libraries defined in the `bower.json` file with:

    bower install

You can install all of the server-side modules with:

    npm install

Then you can use `boilerplate.js` to quickly create new Backbone components.

To upload your assets to an Amazon S3 bucket you'll need to pass your credentials. Rename `aws_sample.json` to `aws.json` and add your `key`, `secret` and `bucket`

There are a few Grunt tasks ready to go:

* `grunt test` will run [JS Hint](http://www.jshint.com) on your JavaScript files then run the Mocha tests in the `test-boilerplate.js` file.
* `grunt server` will a connect server on `9000` and open the URL in your favorite browser and reload the page on changes.
* `grunt deploy` will upload your static assets to an Amazon S3 bucket.
* `grunt loadhook` will load a Git pre-commit hook that runs `grunt test` before commiting

## TODO
* Build process (`r.js`, minification)
* Add [SASS](http://sass-lang.com/) compilation with Compass and Watch