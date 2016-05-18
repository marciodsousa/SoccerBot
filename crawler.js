var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var fs = require('fs');
var path = require('path');

  var $ = cheerio.load(fs.readFileSync('meusres.html'));
  $('#fs-results table tr').each(function( index ) {
    debugger;
    var home = $(this).find('td > span.padr').text().trim();
    var away = $(this).find('td > span.padl').text().trim();
    var score = $(this).find('td.cell_sa').text().trim();
    if(home && away && score)
    fs.appendFileSync('meus.txt', "Home: " +home + ' |'+score+'| ' + away +'\n');
  });