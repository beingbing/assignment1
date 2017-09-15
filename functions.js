const fs = require('fs');

module.exports = {

    // Read data from json file and show it to the console

    show: file =>  {
        fs.readFile(`./${file}`, (error, data) => {
            if (error) {
                console.log('Error occured in reading the file')
            } else {
                console.log(`data: ${data}`)
            }
        });
    },

    // Find user from a value of a particular attribute

    findByAttribute: (file, attr, value, callback) => {
        fs.readFile(`./${file}`, (error, data) => {
            if (error) {
                console.log('Error occured in reading the file')
            } else {
                for (user of JSON.parse(data).data)
                    if (user[attr] == value)
                        callback(user)
            }
        });
    },

    // Find user from the index in the array

    findByIndex: (file, index, callback) => {
        fs.readFile(`./${file}`, (error, data) => {
            if (error) {
                console.log('Error occured in reading the file')
            } else {
                callback(JSON.parse(data).data[index])
            }
        });
    }
} 

