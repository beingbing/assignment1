const functions = require('./functions');

const file = 'data.json';
const printUser = user => {
    console.log(`firstName: ${user.firstName}\nlastName: ${user.lastName}`)
}

// Read the data from the file

functions.show(file);

// Find an user from the attribute

functions.findByAttribute(file, 'firstName', 'Samar Taj', user => {
    printUser(user)
})

// Find an user by the index of the user array

functions.findByIndex(file, 1, user => {
    printUser(user)
})
