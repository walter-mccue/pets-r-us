/**
 * Title: appointments.js
 * Author: Walter McCue
 * Date: 09/30/2022
 * Description: JS for customer appointments
 * Resources: WEB-340-Assign-8.docx; WEB-340-pets-r-us.docx; WEB-340 GitHub; W3Schools.com; geeksforgeeks.com; nodejs.dev
 */

 const mongoose = require('mongoose');
 const schema = mongoose.schema;
 
 let appointmentSchema = new mongoose.Schema({
     userName: {type: String, required: true},
     fName: {type: String, required: true},
     lName: {type: String, required: true},
     email: {type: String, required: true},
     service: {type: String, required: true},
 });
 
 module.exports = mongoose.model('Appointment', appointmentSchema);