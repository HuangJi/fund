const request = require('request');
const cheerio = require('cheerio');
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

const mongodbUrl = 'mongodb://localhost:27017/fund';
let count = 0;

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

function getOneFundData(fundIDList, userAgentList) {
  sleep(parseInt((Math.random() * 3 * 1000) + (2 * 1000), 10)).then(() => {
    if (fundIDList.length <= 0) {
      return;
    }
    const fundID = fundIDList.shift();
    const options = {
      url: `http://announce.fundclear.com.tw/MOPSFundWeb/A01_11.jsp?fundId=${fundID}&navMonth=120`,
      headers: {
        'User-Agent': userAgentList[parseInt((Math.random() * 999) % userAgentList.length, 10)],
      },
    };

    request(options, (error, response, body) => {
      if (error) {
        // console.error(`error: ${error}`);
        getOneFundData(fundIDList, userAgentList);
      } else {
        console.log(`request success:${fundID} and count:${count}`);
        count += 1;
        const $ = cheerio.load(body);
        let fundData = $('param[name=htNav]').attr('value');
        if (fundData === undefined) {
          getOneFundData(fundIDList, userAgentList);
        } else {
          fundData = fundData.replace(/ /g, '');
          fundData = fundData.replace(/{/g, '');
          fundData = fundData.replace(/}/g, '');
          const fundDataList = fundData.split(',');
          // console.log(fundData);
          const fundObject = {
            fundID,
            dateData: {},
          };
          for (let i = 0; i < fundDataList.length; i++) {
            const keyValue = fundDataList[i].split('=');
            fundObject.dateData[keyValue[0]] = parseFloat(keyValue[1]);
          }
          MongoClient.connect(mongodbUrl, (err, db) => {
            // Get a collection
            const collection = db.collection('fundCollection');
            const filter = {
              fundID,
            };
            collection.updateMany(filter, { $set: fundObject }, { upsert: true }, (e, r) => {
              if (!error && r) {
                db.close();
                getOneFundData(fundIDList, userAgentList);
              }
            });
          });
        }
      }
    });
  });
}

fs.readFile('./fund_id', (err, data) => {
  if (err) throw err;
  const fundIDList = data.toString().split('\n');
  fs.readFile('./user_agent', (error, fundData) => {
    const userAgentList = fundData.toString().split('\n');
    getOneFundData(fundIDList, userAgentList);
  });
});
