var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();
var request = require('request');
var logger = require('morgan');
var cookieParser = require('cookie-parser');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : false
}));
app.use(logger('dev'));
app.use(cookieParser());





/**
 * HOW TO Make an request Call - GET
 */
// options for GET
// GET ALL USERS
app.get('/users', function(req, res) {
	request.get({
		headers : {
			'content-type' : 'application/json'
		},
		url : 'http://localhost:3000/users'

	}, function(err, response, res_body) {
		var user = JSON.parse(res_body);
		console.log(user.status);
		if (err) {
			res.render('try', {
				data : user
			});
		} else if (user.data === null) {
			res.render('try1', {
				data : user
			});
		} else {
			res.render('users', {
				page_title : "ListOfUsers ",
				data : user
			});
		}
	});
});

// ADD USER PAGE
app.get('/users/add', function(req, res) {
	res.render('add_users', {
		page_title : "Add Users"
	});
});

/**
 * HOW TO Make an request Call - POST
 */
// do a POST request
// INSERTING NEW USER
app.post('/users/add', function(req, res) {
	var post_data = {
		firstname : req.body.firstname,
		lastname : req.body.lastname,
		email : req.body.email,
		id : req.body.id
	};

	var db = JSON.stringify(post_data);

	request.post({
		headers : {
			'content-type' : 'application/json'
		},
		url : 'http://localhost:3000/users',
		body : db
	}, function(err, response, res_body) {
		console.log(res_body);
		var user = JSON.parse(res_body);
		console.log(user.status);
		if (err) {
			res.render('try', {
				data : user
			});

		} else {
			res.redirect('/users');
		}
	});
});

// GET USER BY ID
app.get('/users/:id', function(req, res) {

	var id = req.params.id;
	console.log(id)
	request.get({
		headers : {
			'content-type' : 'application/json'
		},
		url : 'http://localhost:3000/users/' + id

	}, function(err, response, res_body) {
		console.log(res_body);
		var user = JSON.parse(res_body);
		console.log(user.status);
		if (err) {
			res.render('try', {
				data : user
			});

		} else if (response.data === null) {
			res.render('try', {
				data : user
			});

		} else {
			res.render('edit_users', {
				page_title : "Edit Users",
				data : user
			});
		}

	});

});

/**
 * HOW TO Make an request Call - PUT
 */
// do a put request
// UPDATE USER
app.post('/users/edit/', function(req, res) {
	var post_data = {
		firstname : req.body.firstname,
		lastname : req.body.lastname,
		email : req.body.email,
		id : req.body.id
	};

	console.log(post_data);

	var db = JSON.stringify(post_data);

	request.put({
		headers : {
			'content-type' : 'application/json'
		},
		url : 'http://localhost:3000/users',
		body : db
	}, function(err, response, res_body) {
		var user = JSON.parse(res_body);
		console.log(user.status);
		if (err) {
			res.render('try', {
				data : user
			});

		} else if (user.data === null) {
			res.render('try', {
				data : user
			});
		}

		else {
			res.redirect('/users');
		}

	});
});

/**
 * HOW TO Make an request Call - DELETE
 */
// do a delete request
// DELETE USER BY ID
app.get('/users/delete/:id', function(req, res) {

	var id = req.params.id;

	request.del({
		headers : {
			'content-type' : 'application/json'
		},
		url : 'http://localhost:3000/users/' + id,

	}, function(err, response, res_body) {
		var user = JSON.parse(res_body);
		console.log(user.status);
		if (err) {
			res.render('try', {
				data : user
			});

		} else if (user.data === null) {
			res.render('try', {
				data : user
			});

		} else {
			res.redirect('/users');
		}
	});
});
module.exports = app;