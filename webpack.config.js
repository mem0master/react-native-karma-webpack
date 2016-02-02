'use strict';

var path = require('path');
var args = require('minimist')(process.argv.slice(2));

// List of allowed environments
var allowedEnvs = ['test'];

// Set the correct environment
var env;

process.env.REACT_WEBPACK_ENV = 'test';

module.exports = require(path.join(__dirname, 'cfg/test'));
