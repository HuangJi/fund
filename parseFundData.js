var csv = require("fast-csv");
var fs = require('fs');
// var iconv = require('iconv-lite');
var jschardet = require("jschardet")
var Iconv = require('iconv').Iconv;
var iconv = new Iconv('big5', 'utf-8');

var stream = fs.createReadStream("f.csv");

// var fileString = fs.readFileSync('f.csv');

// var buffer = iconv.convert(fileString);
// console.log(buffer.toString());

csv
  .fromStream(stream, {headers : true})
  .on("data", function(data){
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
    // jschardet.detect(data['fundMandarinName']);
  })
  .on("end", function(){
    console.log("done");
  });

// csv
//  .fromPath("fundCodeData.csv")
//  .on("data", function(data){
//      console.log(data);
//  })
//  .on("end", function(){
//      console.log("done");
//  });

// csv
//    .fromPath("fundCodeData.csv", {headers: true})
//    .pipe(csv.createWriteStream({headers: true}))
//    .pipe(fs.createWriteStream("out.csv", {encoding: "utf8"}));

// stream.pipe(csvStream);
