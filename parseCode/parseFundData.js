const csv = require('fast-csv');
const fs = require('fs');
// const Iconv = require('iconv').Iconv;

// const iconv = new Iconv('big5', 'utf-8');
const MongoClient = require('mongodb').MongoClient;


const stream = fs.createReadStream('f.csv');
const mongodbUrl = 'mongodb://localhost:27017/fund';

let collection;
let filter;
let db;
// var fileString = fs.readFileSync('f.csv');

// var buffer = iconv.convert(fileString);
// console.log(buffer.toString());
MongoClient.connect(mongodbUrl, (err, database) => {
  db = database;
  collection = db.collection('fundCollection');
  // console.log(collection);
  csv
    .fromStream(stream, { headers: true })
    .on('data', (data) => {
    // console.log('11');
    // for (var i = 0; i < data.length; i++) {
    // data['fundMandarinName'] = iconv.decode(data['fundMandarinName'], 'win1252');
    // var buffer = iconv.convert(data['fundMandarinName']);
    // data['fundMandarinName'] = buffer.toString();
    // data['fundMandarinName'] = iconv.encode(data['fundMandarinName'], 'win1252');
    // console.log(data[i]['fundMandarinName']);
    // console.log(i);
    // }
      console.log(data);
      filter = {
        fundID: data.fundId,
      };
      collection.updateMany(filter, { $set: {
        fundId: data.fundId,
        fundChineseName: data.fundChineseName,
        fundEnglishName: data.fundEnglishName,
        currencyType: data.currencyType,
        isinCode: data.isinCode,
        generalAgentId: data.generalAgentId,
        generalAgentName: data.generalAgentName,
        offshoreInstitutionId: data.offshoreInstitutionId,
        offshoreInstitutionName: data.offshoreInstitutionName,
      } }, { upsert: true }, (error) => {
        if (!error) {
          // console.log(result);
          console.log(`${data.fundId} done!`);
          // db.close();
        } else {
          console.log('error!');
          console.log(error);
          // db.close();
        }
        // getOneFundData(fundIDList, userAgentList);
      });
    // jschardet.detect(data['fundMandarinName']);
    })
  .on('end', () => {
    // console.log("done");
    db.close();
  });
});
