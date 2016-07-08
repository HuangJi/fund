var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

// var options = {
//   url: 'http://announce.fundclear.com.tw/MOPSFundWeb/A01_11.jsp?fundId=AGIF-FQ3&navMonth=60',
//   headers: {
//     'User-Agent': 'request'
//   }
// };

function getOneFundData(fundID) {
	var options = {
		url: 'http://announce.fundclear.com.tw/MOPSFundWeb/A01_11.jsp?fundId=' + fundID + '&navMonth=60',
		headers: {
		'User-Agent': 'request'
		}
	};
	request(options, function (error, response, body) {
		// console.log(body);
		var $ = cheerio.load(body);
		var fundData = $('param[name=htNav]').attr('value');
		fundData = fundData.replace(/ /g, '');
		fundData = fundData.replace(/{/g, '');
		fundData = fundData.replace(/}/g, '');
		fundDataList = fundData.split(',');
		// console.log(fundData);
		console.log();

	});
}

fs.readFile('./fund_id', function (err, data) {
	if (err) throw err;
	var fundIDList = data.toString().split('\n');
	// console.log(fundIDList);
	// console.log(fundIDList.length);
	for (var i = 0; i < 1; i++) {
		getOneFundData(fundIDList[i]);	
	}
});




// request(options, function (error, response, body) {
// 	console.log(body);
// });