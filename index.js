/**
 * Title: index.js
 * Author: Walter McCue
 * Date: 09/04/2022
 * Description: JS that contains routing and required functions for the pets-r-us assignments
 * Resources: WEB-340-Assign-4.docx; WEB-340-pets-r-us.docx; WEB-340 GitHub; W3Schools.com; geeksforgeeks.com; nodejs.dev
 */

// Require statements
const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
 
// Renders HTML with EJS
app.engine('html', require('ejs').__express);

// Sets the views folder as the path for HTML files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set('views', './views');
 
// Sets the public folder as the path for static files
app.use(express.static(path.join(__dirname, 'public')));

// App listens on this port
const PORT = process.env.PORT || 3000;

// links the corresponding HTML files to the correct path and sets their title
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pets-R-Us Home',
    })
});
app.get('/grooming', (req, res) => {
    res.render('grooming', {
        title: 'Pets-R-Us Dog Grooming',
    })
});
app.get('/boarding', (req, res) => {
    res.render('boarding', {
        title: 'Pets-R-Us Dog Boarding',
    })
});
app.get('/training', (req, res) => {
    res.render('training', {
        title: 'Pets-R-Us Dog Training',
    })
});

// Tells the user that the application has started on the declared port
app.listen(PORT, () => {
    console.log('Application started and listening on port ' + PORT);
});