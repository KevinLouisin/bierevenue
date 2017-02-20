/* MODULES */
var express = require('express')
var engine = require('tingodb')()
var bodyParser = require('body-parser')

/* CUSTOM MODULES */
var usersInit = require('./custom_modules/initUsers')

/* DB */
var db = new engine.Db('./database', {})


/* APP */
var app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({'extended':'true'}))
app.use(bodyParser.json())

/* SERVER */
var port = 8080
var server = app.listen(port, function(){
	usersInit.initUsers(db)
	console.log('Server running at', port)
})

/* ROUTES*/
app.get('/home', function(req, res){
	res.sendfile('./public/index.html')
})

app.get('/new', function(req, res){
	res.sendfile('./public/new.html')
})

/* API */
app.get('/api/beers', function(req, res) {
	
	var beersCollection = db.collection('beers')
	beersCollection.find({}).toArray(function(err, collection) {
		if (!err) {			
			res.send(collection)			
		}else {
			console.log(err)
		}		
	})
})

app.post('/api/beers', function(req, res) {
	var beersCollection = db.collection('beers')
	var key = { 'name': req.body.name }
	var beer = req.body
	beersCollection.update(key, beer, {upsert: true})
	res.send({})
})

app.delete('/api/beers/:name', function(req, res) {
	var beersCollection = db.collection('beers')
	var key = { 'name': req.params.name }
	beersCollection.remove(key, {})
	res.send({})
})
