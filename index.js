var express = require('express');

// Create express server
var app = express();

// Set server port
app.set('port', (process.env.PORT || 5000));

// Set express static folder
app.use(express.static(__dirname + '/public'));

// Configure base route
app.get('/', function(request, response) {
  response.render('index');
});

// Load APIs in separate files 
require('./api/logger.js')(app);

// Start the application!
app.listen(app.get('port'), function() {
  log.info('Node app is running on port', app.get('port'));
});
