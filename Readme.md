# QuackQuest #

## Building ##
Node.js and Grunt are required to build from source.

> npm install grunt

Furthermore the following grunt addons are required:

> npm install grunt-contrib-uglify
> npm install grunt-contrib-jshint
> npm install grunt-contrib-qunit
> npm install grunt-contrib-watch
> npm install grunt-contrib-concat

Then

> grunt

should lint and run the (currently non-existant) tests.

## Running ##

Running

> firefox src/index.html

will open the example game.