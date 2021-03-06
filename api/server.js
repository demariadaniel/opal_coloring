const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + './../build'))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// EXPRESS
app.listen(process.env.PORT || 80, () => {
	console.log(`Server Started on Port ${process.env.PORT || 80}`);
	console.log('Press CTRL + C to stop server');
});

// MONGOOSE
mongoose.connect('mongodb://localhost/data/db/');
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log("Connected to db at /data/db/")
});

//MODELS
var Palette = require('./models/Palettes');
var User = require('./models/Users');

//ROUTES
var paletteRoutes = require('./routes/palette_routes');
var userRoutes = require('./routes/user_routes');

//ENDPOINTS
app.use('/users' , userRoutes);
app.use('/palettes' , paletteRoutes);

app.get('*', (req, res) => {
    res.sendFile('index.html',{root: __dirname + './../build'});
});