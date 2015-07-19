## Note about fork
This fork adds in various fixes for Redmine 3.x and updates various styles to better use available space.

Original Read Me follows.

## What is Minelab?

Minelab is a free Redmine 2.5.x theme inspired by Gitlab, written in Sass. It uses Bourbon for cross browser compatibility, Neat for responsive grids and Font Awesome to replace all the stock icons. It also mimics Gitlab's page loading effect using PACE and CSS animations.

## What plugins are supported?

Minlab supports all the free and lite plugins from RedmineCRM. Support for more plugins is coming in later versions.

## How to install it

To install Minelab, you need to unzip it and copy it's contents in `Redmine/public/themes`. Then visit `Redmine>Administration>Settings>Display` and select Minelab theme.

## To do

Make it responsive!

## How it looks?

Screenshots are available at [Minlab's page](http://hardpixel.github.io/minelab/)


## Development setup

If not done, install node.js. Instructions for a Mac with Homebrew installed
follow. For other platforms, see the Node.js install guide:

~~~~
$ brew install node
~~~~

Then, install dependencies

  * Grunt (if not already availabe)

	~~~~
	$ npm install -g grunt-cli
	~~~~

  * Grunt dependencies for this project

	~~~~
	$ npm install
	~~~~

  * SASS

	~~~~
	$ gem install sass
	~~~~

  * Bourbon

	~~~~
	$ gem install bourbon
	$ bourbon install --path=sass/
	~~~~

  * NEAT

	~~~~
	$ gem install neat
	$ cd sass
	$ neat install
	$ cd ..
	~~~~

Finally, build with:

~~~~
$ grunt
~~~~

## Credits

[Bourbon](http://bourbon.io/) | [Neat](http://neat.bourbon.io/) | [Font Awesome](http://fontawesome.io/) | [PACE](http://github.hubspot.com/pace/)
