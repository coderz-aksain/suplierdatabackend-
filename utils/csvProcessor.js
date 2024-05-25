// const fs = require('fs');
// const csv = require('csv-parser');

// const processCSV = (filePath) => {
//     return new Promise((resolve, reject) => {
//         const results = [];

//         fs.createReadStream(filePath)
//             .pipe(csv())
//             .on('data', (data) => results.push(data))
//             .on('end', () => resolve(results))
//             .on('error', (err) => reject(err));
//     });
// };

// module.exports = { processCSV };


// utils/csvProcessor.js
const fs = require('fs');
const csv = require('csv-parser');

const processCSV = (filePath) => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => {
                results.push(data);
            })
            .on('end', () => {
                resolve(results);
            })
            .on('error', (err) => {
                reject(err);
            });
    });
};

module.exports = {
    processCSV
};
