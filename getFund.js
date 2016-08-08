var request = require('request');
var cheerio = require('cheerio');
var MongoClient = require('mongodb').MongoClient;
var Agent = require('socks5-http-client/lib/Agent');
var fs = require('fs');

var mongodbUrl = 'mongodb://localhost:27017/fund';
var count = 0;

function getRandomAgent(userAgentList) {
    return userAgentList[parseInt(Math.random() * 999 % userAgentList.length)];
}

function sleep (time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

function getOneFundData(fundIDList, userAgentList) {
	sleep(parseInt(Math.random() * 3 * 1000 + 2 * 1000)).then(() => {
	    // Do something after the sleep!
	    if (fundIDList.length <= 0) {
			return;
		}
		fundID = fundIDList.shift();
		var options = {
			url: 'http://announce.fundclear.com.tw/MOPSFundWeb/A01_11.jsp?fundId=' + fundID + '&navMonth=120',
			headers: {
				'User-Agent': userAgentList[parseInt(Math.random() * 999 % userAgentList.length)],

			}
		};
		// console.log('Before request: ' + fundID);
		// console.log('User-Agent is: ' + options.headers['User-Agent']);
		// console.log('API is: ' + options.url);
		request(options, function (error, response, body) {
			if (error) {
				console.log('error: ' + error);
				getOneFundData(fundIDList, userAgentList);
			}
			else {
				console.log('request success: ' + fundID + ' and count: ' + count);
				count += 1;
				var $ = cheerio.load(body);
				var fundData = $('param[name=htNav]').attr('value');
				if (fundData === undefined) {
					getOneFundData(fundIDList, userAgentList);
				}
				else {
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
						fundObject.dateData[keyValue[0]] = parseFloat(keyValue[1]);
					}
					MongoClient.connect(mongodbUrl, function(err, db) {
				        // Get a collection
				        var collection = db.collection('fundCollection');
				        filter = {
				        	fundID: fundID 
				        }
				        collection.updateMany(filter, {$set:fundObject}, {upsert:true}, function(err, r) {
					        db.close();
					        getOneFundData(fundIDList, userAgentList);
				        });
				    });
				}
			}		
		});
	})
}

fs.readFile('./fund_id', function (err, data) {
	if (err) throw err;
	var fundIDList = data.toString().split('\n');
	fs.readFile('./user_agent', function (err, data) {
		var userAgentList = data.toString().split('\n');
		getOneFundData(fundIDList, userAgentList);
	})
});
