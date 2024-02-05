const fs = require('fs');

// read the file
fs.readFile('logfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error while reading file:', err);
        return;
    }

    // split data to lines
    const splitDataToLines = data.split('\r\n');

    // split data by '|'  and assigning to fields
    const spliltFields = splitDataToLines.map((line) => {
        const [timestamp, level, message] = line.split('|');
        return {
            timestamp,
            level,
            message
        };
    });

    // convert to json format
    const convertToJson = JSON.stringify(spliltFields, null, 2);
    console.log(convertToJson);

    // writing to the new json file
    fs.writeFile('logfile.json', convertToJson, (err) => {
        if(err){
            console.log('Error while writing file', err);
            return;
        }
        console.log('logfile.json file was created successfully')
    });

});

