const express = require( "express" ),
app = express(),
{ port , dbhost , dbname , dbport } = require("./config"),
{ handler404 , handler500 } = require('./handlers/errors'),
mongoose = require('mongoose'),
cors = require('cors');
const { apiAuthRouter , apiRouter } = require('./routes');
const { authMidleware } = require('./middleware');


app.set( 'port', port );

app.use( cors() );
app.use( express.json() );


// database connection
// const dbURI = `mongodb://${dbhost}:${dbport}/${dbname}?replicaSet=rs`;.
const dbURI = `mongodb://${dbhost}:${dbport}/${dbname}`;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen( app.get('port') , function() {
    console.log('Node app is running on port', app.get('port'));
});

// auth router
app.use('/api' , authMidleware , apiRouter );
// api router
app.use('/api' , apiAuthRouter );

// handlers for 404 and 500
app.use(handler404 , handler500)