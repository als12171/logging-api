var express = require('express');

// Create express server
var app = express();

// Set server port
app.set('port', (process.env.PORT || 5000));

// Configure base route
app.get('/', function (request, response) {});

// Load APIs in separate files
require('./api/logger.js')(app);

// Start the application!
app.listen(app.get('port'), function () {
    console.log('Node app is running on port ' + app.get('port'));
});
