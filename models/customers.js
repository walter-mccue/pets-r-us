/**
 * Title: customers.js
 * Author: Walter McCue
 * Date: 09/17/2022
 * Description: JS for customer registration
 * Resources: WEB-340-Assign-6.docx; WEB-340-pets-r-us.docx; WEB-340 GitHub; W3Schools.com; geeksforgeeks.com; nodejs.dev
 */

const mongoose = require('mongoose');
const schema = mongoose.schema;

let customerSchema = new mongoose.Schema({
    customerID: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
});

module.exports = mongoose.model('Customer', customerSchema);