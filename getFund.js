var request = require('request');
var cheerio = require('cheerio');
var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');

var mongodbUrl = 'mongodb://localhost:27017/fund';

function getOneFundData(fundID) {
	var options = {
		url: 'http://announce.fundclear.com.tw/MOPSFundWeb/A01_11.jsp?fundId=' + fundID + '&navMonth=120',
		headers: {
		'User-Agent': 'request'
		}
	};
	request(options, function (error, response, body) {
		console.log('request: ' + fundID);
		var $ = cheerio.load(body);
		var fundData = $('param[name=htNav]').attr('value');
		fundData = fundData.replace(/ /g, '');
		fundData = fundData.replace(/{/g, '');
		fundData = fundData.replace(/}/g, '');
		fundDataList = fundData.split(',');
		// console.log(fundData);
		var fundObject = {
			fundID: fundID,
			dateData: {}
		};
		for (var i = 0; i < fundDataList.length; i++) {
			var keyValue = fundDataList[i].split('=');
			// var object = {
			// 	dateString: keyValue[0],
			// 	value: keyValue[1]
			// }
			fundObject.dateData[keyValue[0]] = parseFloat(keyValue[1]);
		}
		MongoClient.connect(mongodbUrl, function(err, db) {
	        // Get a collection
	        var collection = db.collection('fundCollection');
	        filter = {
	        	fundID: fundID 
	        }
	        collection.updateMany(filter, {$set:fundObject}, {upsert:true}, function(err, r) {
		        // db.close();
	        });
	    });
	});
}

fs.readFile('./fund_id', function (err, data) {
	if (err) throw err;
	var fundIDList = data.toString().split('\n');
	
	// console.log(fundIDList.length);
	for (var i = 0; i < 10; i++) {
		console.log(fundIDList[i]);
		getOneFundData(fundIDList[i]);
	}
});
