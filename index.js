/*  

https?:\S+\w  LINKS

\[[^{}]*\] MARKDON

console.log('hola mundo Node!');

for (var i=0; i<10; i++) {
  console.log('hola mundo ' + i);
}
setTimeout(function() {
  console.log('Hola NodeJS');
}, 3000);


 var http = require("http");
var server = http.createServer(function (peticion, respuesta){
   respuesta.end("Hola DesarrolloWeb.com");
});
server.listen(3000, function(){
   console.log("tu servidor está listo en " + this.address().port);
});




var eventos = require('events');

var EmisorEventos = eventos.EventEmitter; 
var ee = new EmisorEventos(); 
ee.on('datos', function(fecha){ 
   console.log(fecha); 
}); 
setInterval(function(){ 
   ee.emit('datos', Date.now()); 
}, 500);


var fs = require('fs');

fs.readdir('/path/to/md/files', function(err, files) {
    files
         .filter(function(file) { return file.substr(-5) === '.md'; })
         .forEach(function(file) { fs.readFile(file, 'utf-8', function(err, contents) { inspectFile(contents); }); });
});

function inspectFile(contents) {
    if (contents.indexOf('data-template="README"') != -1) {
        // do something
    }
}


fetch(url, options).then(res => {
    return res.text()
   }).then(text => {
    sys.__v0['対象'] = text
    callback(text)
   }).catch(err => {
    console.log('[fetch.error]', err)
    sys.__v0['AJAX:ONERROR'](err)
   })



*/

const path = require('path');
//mdLinks

const filePath = require('../GDL003-md-links');

module.exports = (filePath) =>{


if(path.extname(filePath)=== '.md'){
  
   return true;
}
return false;
};



console.log("qué pasa");

/*
const fs = require('fs');

fs.readFile('README.md', 'utf-8', (err, data) => {
   if(err) {
     console.log('error: ', err);
   } else {
     console.log(data);
   }
 });
*/


const fs = require('fs');

 fs.readdir('./', function(err, files) {
   files
        .filter(function(file) { console.log(file); return path.extname(file)=== '.md' })
        .forEach(function(file) { fs.readFile(file, 'utf-8', function(err, contents) { 
           
         const datos = contents.toString();
         const links = 'https?:\S+\w';

         const pos = -1;

         datos.forEach(function(data){

            pos = links.search(data.toString());

            if (pos!=-1){
               console.log(data);

            }

         })

         
         console.log(contents); }); });
});




