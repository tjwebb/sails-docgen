#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var ejs = require('ejs');
var SailsApp = require('sails').Sails;
var program = require('commander');

program
  .command('* [appName] [component]')
  .action(function (appName, component) {

    var app = new SailsApp();
    var config = { 
      appPath: path.dirname(require.resolve(appName)),
      hooks: {
        grunt: false
      },
      permissions: {
        adminPassword: 'test1234'
      }
    };  

    app.load(config, function (error, sails) {
      var template = fs.readFileSync(path.resolve('./templates', component + '.ejs')).toString();
      var md = ejs.render(template);
      require('mkdirp').sync('./docs');
      fs.writeFileSync(path.resolve('./docs', component + '.md'), md);
    }); 
  });

program.parse(process.argv);
