/**
 * Title: index.js
 * Author: Walter McCue
 * Date: 09/04/2022
 * Description: JS that contains routing and required functions for the pets-r-us assignments
 * Resources: WEB-340-Assign-4.docx; WEB-340-pets-r-us.docx; WEB-340 GitHub; W3Schools.com; geeksforgeeks.com; nodejs.dev
 */

const express = require('express');
const path = require('path');
const app = express();
 
app.engine('html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
 
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index.html', {
        title: 'Pets-R-Us Home'
    })
});

app.get('/grooming.html', (req, res) => {
    res.render('grooming.html', {
        title: 'Dog Grooming',
    })
});

app.listen(PORT, () => {
    console.log('Application started and listening on port ' + PORT);
});