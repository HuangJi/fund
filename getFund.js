var request = require('request');
var cheerio = require('cheerio');

var options = {
  url: 'http://announce.fundclear.com.tw/MOPSFundWeb/A01_11.jsp?fundId=AGIF-FQ3&navMonth=1',
  headers: {
    'User-Agent': 'request'
  }
};

request(options, function (error, response, body) {
	console.log(body);
});