const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")
const fs = require("fs")
const app = express()  // make express app
const http = require('http').Server(app)

// ADD THESE COMMENTS AND IMPLEMENTATION HERE
// 1 set up the view engine
app.set("views", path.resolve(__dirname, "views"))
app.set("view engine", "ejs")

// 2 include public assets and use bodyParser
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3 set up the logger
let accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));

// 4 handle valid GET requests
//http GET defaut page at /
app.get("/", function (req, res) {
  res.render("index.ejs")
})

//http GET /work
app.get("/work", function (req, res) { 
  res.render("work.ejs")
})

//http GET /contact
app.get("/contact", function (req, res) {
  res.render("contact.ejs")
})

// 5 handle valid POST request
//html POST /contact
app.post("/contact", function (req, res) {
  var api_key = '5a4a2726cc8dc74c5e0561d054d8576d-c9270c97-ec922873';
var domain = 'sandbox7a25494c9c8b46cdbcf5ae0e632f5916.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'a-white-portfolio <postmaster@sandbox7a25494c9c8b46cdbcf5ae0e632f5916.mailgun.org>',
  to: 'amywhite8206@gmail.com',
  subject: req.body.firstName,
  text: req.body.message
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
  console.log(error);
  if(!error) {
    res.send("Mail sent");
  }
  else
    res.send("Mail not sent");
});
})

// 6 respond with 404 if a bad URI is requested
app.get(function (req, res){
  res.sender("404")
})

// Listen for an application request on port 8081
http.listen(process.env.PORT || 8081, function () {
  console.log(process.env.PORT)
  console.log('app listening on http://127.0.0.1:8081/')
})
