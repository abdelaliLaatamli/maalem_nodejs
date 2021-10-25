const express = require( "express" ),
app = express(),
configs = require('./config'),
cors = require('cors');


app.set( 'port', configs.port );

app.use( cors() );
app.use( express.json() );

const apiRouter = require('./routes/apiRouter').router;

app.listen( app.get('port') , function() {
    console.log('Node app is running on port', app.get('port'));
});


app.use('/api' , apiRouter);