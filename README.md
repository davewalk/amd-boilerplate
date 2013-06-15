# AMD/Backbone Boilerplate 

An AMD/Backbone boilerplate for JavaScript web applications with tests, dependency management and a build process. While attempting to learn the AMD way of life, I found existing projects like Backbone Boilerplate, while slick, to be overwhelming. So like most things, you learn by doing and I'm attempting to start from scratch in building a sustainable, reusable boilerplate that meets my needs.  

[A](http://www.henriquebarroso.com/creating-a-dynamic-modular-multi-page-app-with-backbone-js-and-requirejs/) [few](http://backbonetutorials.com/organizing-backbone-using-modules/) tutorials are helping me with this, as well as the aforementioned [Backbone Boilerplate](https://github.com/backbone-boilerplate/backbone-boilerplate).

## Installation

You'll need [Node](http://nodejs.org) so that you can install [Bower](https://github.com/bower/bower) (globally):

    npm install -g bower

Now you're ready to install all of the vendor libraries defined in the `bower.json` file with:

    bower install

For the build you'll need to install `requirejs` through npm:

    npm install


You can use `boilerplate.js` to quickly setup create new Backbone components.

## TODO
* Build process (`r.js`)
* JSLint (cringe)
* Test process
* Add live reload