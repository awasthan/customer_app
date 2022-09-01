var express = require("express"); 
var app = express();
var http = require('http');

// Set the Server Port
var PORT  = process.env.PORT || 8080

var server = app.listen(PORT, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', 'localhost', port);
});


//GET STATUS ENDPOINT
app.get('/', function (req, res) {
  res.send('Our Server is Up and Running!')
})

//GET Date ENDPOINT
app.get('/customer', function (req, res) {
  http.get('http://customer-info-http-cp4i.itzroks-060001q8qm-07gi5z-6ccd7f378ae819553d37d5f2ee142bd6-0000.us-south.containers.appdomain.cloud/getDetails', res => {
   
 
});
  var utcDate = new Date()

  var day = utcDate.getDate()
  var month = utcDate.getMonth()+1
  var year = utcDate.getFullYear()

  //Date in month-day-year format
  var todaysDate = `${month}-${day}-${year}`

  res.send(todaysDate)
})
