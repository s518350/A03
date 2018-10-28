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
  const name = req.body.inpuname;
  const email = req.body.inputemail;
  const phone = req.body.inputphone;
  const message = req.body.inputmessage;
  const isError = true;
})

//setup e-mail data with unicode symbols
//const mailOptions = {
  //from: '"Amy White" <amywhite8206@gmail.com>', //sender address
  //to: 'amywhite8206@gmail.com, s518350@nwmissouri.edu', //list of receivers
  //subject: 'Message from Website Contact Page', //Subject Line
  //text: message,
  //err: isError
//}

//logs to the terminal window (not the browser)
//console.log('\nCONTACT FORM DATA: ' + name + ' ' + email + ' ' + phone + ' ' + message + '\n');

// 6 respond with 404 if a bad URI is requested
app.get(function (req, res){
  res.sender("404")
})

// Listen for an application request on port 8081
http.listen(8081, function () {
  console.log('app listening on http://127.0.0.1:8081/')
})
