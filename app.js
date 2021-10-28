const express = require( "express" ),
app = express(),
{ port , dbhost , dbname , dbport } = require('./config'),
mongoose = require('mongoose'),
cors = require('cors');


app.set( 'port', port );

app.use( cors() );
app.use( express.json() );

const apiRouter = require('./routes/apiRouter').router;



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

app.use('/api' , apiRouter);

app.get('/' , (request , response) => {
    response.send("server work")
})