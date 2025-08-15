//Galang, Marius Kevin D.

var express = require("express");
var app = express();

//This responds with "Hello World" on the homepage
app.get('/', function(request, response){
    console.log("There is GET request from homepage!");
    response.send("Here is the GET method!");
});

//This responds a POST request for the homepage
app.get('/', function(request,response){
    console.log("A POST request for the homepage is accessed.");
    response.send("Here is the POST method");
}) ;

//This responds a GET request for the /list_user page
app.get('/', function(request,response){
    console.log("Got a GET page for /list_user.");
    response.send("This is page listing.");
}) ;

//This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(request,response){
    console.log("Got a GET request for /ab*cd.");
    response.send("Pattern match page");
}) ;

app.get('/profile', function(request,response){
    console.log("Got a GET request for /profile.");
    response.send("Hello, Kevin Galang from WD - 301");
}) ;

var server = app.listen(4000, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://abcd", host, port)
});
