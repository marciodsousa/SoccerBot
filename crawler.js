var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var fs = require('fs');
var path = require('path');
http://www.meusresultados.com/jogo/xjJQrJ37/#sumario-do-jogo
  var $ = cheerio.load(fs.readFileSync('meusres.html'));
  $('#fs-results table tr').each(function( index ) {
    var round = $(this).find('td[colspan=6]').text().trim();
    var home = $(this).find('td > span.padr').text().trim();
    var away = $(this).find('td > span.padl').text().trim();
    var score = $(this).find('td.cell_sa').text().trim();
    var matchId = $(this).attr('id');
    if(matchId)
    var link = 'http://www.meusresultados.com/jogo/'+matchId.substring(4)+'/';
    if(home && away && score)
    fs.appendFileSync('meus.txt', "Home: " +home + ' |'+score+'| ' + away +'\n'+'Link: '+link+'\n');
    if(round)
      fs.appendFileSync('meus.txt', "Round: " +round+'\n');
  });