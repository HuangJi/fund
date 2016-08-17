const csv = require('fast-csv');
const fs = require('fs');

const stream = fs.createReadStream('tej.csv');

csv
  .fromStream(stream, { headers: true })
  .on('data', (data) => {
    console.log(data);
  })
  .on('end', () => {
    console.log('done');
  }
);
