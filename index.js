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
const mongoose = require('mongoose');

const Customer = require('./models/customers');
 
// Renders HTML with EJS
app.engine('html', require('ejs').__express);

// Sets the views folder as the path for HTML files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set('views', './views');
 
// Sets the public folder as the path for static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extend: true }));
app.use(express.json());

// App listens on this port
const PORT = process.env.PORT || 3000;

// Connects to MongoDB
const conn = 'mongodb+srv://web340_admin:1Bulldog2@bellevueuniversity.dmjnhtd.mongodb.net/web340DB';
mongoose.connect(conn).then(() => {
    console.log('Connection to the database was successful');
}).catch(err => {
    console.log('MongoDB Error: ' + err.message);
});

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

app.get('/registration', (req, res) => {
    res.render('registration', {
        title: 'Pets-R-Us Register for an Account',
    })
});

// Post user input from registration to MongoDB
app.post('/', (req, res, next) => {
	// console.log the sent data
	console.log(req.body);
	console.log(req.body.customerID);
	console.log(req.body.email);

	// Create a new customer object
	const newCustomer = new Customer({
		customerID: req.body.customerID,
		email: req.body.email,
	});

	console.log(newCustomer);

	// Save the new customer to the database
	Customer.create(newCustomer, (err, customer) => {
		// If there is an error, log it
		if (err) {
			console.log(err);
			next(err);
		// If there is no error, log the customer and redirect to the home page
		} else {
			console.log(`New Customer: ${customer} has been added to the database`);
			res.render('index', {
				title: 'Pets-R-Us Home',
			});
		}
	});
});

// Renders the customerID and email on the customer list page
app.get('/customers', (req, res) => {
	Customer.find({}, function(err, customers) {
		if (err) {
			console.log(err);
			next(err);
		} else {
			res.render('customers', {
				title: 'Pets-R-Us Customer List',
				customers: customers,
			})
		}
	})
});

// Tells the user that the application has started on the declared port
app.listen(PORT, () => {
    console.log('Application started and listening on port ' + PORT);
});