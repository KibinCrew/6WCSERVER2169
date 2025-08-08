//Galang, Marius Kevin D.
//WD - 301

var http = require('http');
//IMPORT MODULES
const about = require('./modules/about_module')
const root = require('./modules/root_module')
const contact = require('./modules/contact_module')
const gallery = require('./modules/gallery_module')
const notFound = require('./modules/not_found_module')
const footer = require('./modules/footer_module')

var server = http.createServer(function (req, res) {
if (req.url == '/') { //PARAMETERS FOR ROOT
res.writeHead(200, { 'Content-Type': 'text/html'});
res.write('<html><body><h1>Welcome to the Node.js Application</h1></body></html>')
res.write(root.rootFunction("Kevin Galang"))
res.end();

} //PARAMETERS FOR ABOUT PAGE
else if (req.url == '/about') {

res.writeHead(200, { 'Content-Type': 'text/html' });
res.write('<html><body><h1>This is the about page</h1></body></html>')
res.write(about.aboutFunction("Justin Cabe"));
res.end();

}//PARAMETERS FOR CONTACT PAGE
else if (req.url == '/contact') {

res.writeHead(200, { 'Content-Type': 'text/html'});
res.write('<html><body><h1>This is the contact page</h1></body></html>')
res.write(contact.contactFunction("Jame Mananquil"))
res.end();

}

else if (req.url == '/gallery') {//PARAMETERS FOR GALLERY PAGE

res.writeHead(200, { 'Content-Type': 'text/html'});
res.write('<html><body><h1>This is the Gallery page</h1></body></html>')
res.write(gallery.galleryFunction("Luis Gabriel"))
res.end();

}

else if (req.url == '/footer') { //PARAMETERS FOR FOOTER PAGE

res.writeHead(200, { 'Content-Type': 'text/html'});
res.write('<html><body><h1>This is the footer of page</h1></body></html>')
res.write(footer.footerFunction("Sebastian Canlas"))
res.end();

}
else {
    res.end(notFound.notFoundFunction()); //PARAMETERS FOR ABOUT PAGE
}
});

server.listen(5000);

console.log('Node.js Web Server at port 5000 is running...')

//ABOUT MODULE
