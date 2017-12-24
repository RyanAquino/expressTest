const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const dbConfig = require('./config/database');



mongoose.connect(dbConfig.database,{
	useMongoClient:true
});

const app = express(); 
const port = 3000;

app.use(bodyParser.json());

const users = require('./routes/users');



app.use(express.static(path.join(__dirname, 'public')));

app.use('/users',users);

app.listen(port,function(){
	console.log('Server started at port ' + port);
}); 
