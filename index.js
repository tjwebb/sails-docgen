#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var ejs = require('ejs');
var SailsApp = require('sails').Sails;
var program = require('commander');

var app = new SailsApp();
var config = { 
  //appPath: '.',
  hooks: {
    grunt: false
  },
  permissions: {
    adminPassword: 'test1234'
  }
};  

app.load(config, function (error, sails) {
  require('mkdirp').sync('docs');
  fs.readdirSync(path.resolve(__dirname, 'templates')).forEach(function (_template) {
    var template = path.resolve(__dirname, 'templates', _template);
    var templateString = fs.readFileSync(template).toString('ascii');
    console.log(template);
    console.log(templateString);
    var md = ejs.render(templateString);
    fs.writeFileSync(path.resolve('docs', path.basename(template, '.ejs') + '.md'), md);
  });
}); 
