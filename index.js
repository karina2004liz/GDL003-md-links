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

module.exports = (filePath) =>{

if(path.extname(filePath)=== '.md'){
  
   return true;
}
return false;
};


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

// función mezclada de leer directorio y file


const fs = require('fs');

/*

 fs.readdir('./', function(err, files) {
   files
        .filter(function(file) { console.log(file); return path.extname(file)=== '.md' })
        .forEach(function(file) { fs.readFile(file, 'utf-8', function(err, contents) { console.log(contents); }); });
});
*/


//archivo md

const fileMd = (filePath) => {
	if (path.extname(filePath) === ".md") {
		return true;
	}
	return false;
};

//console.log(fileMd('./README.md'));
//intento de separar funciones

// leer dir

const readDir = (filePath) =>{
   let allTheFiles = fs.readdirSync(filePath);
   return allTheFiles;
}
//console.log(readDir('./'));

// leer md

const readFile = (filePath)=>{
   let showFile = fs.readFileSync(filePath)
   return showFile.toString();
}
//console.log(readFile('./README.md'));


//leer sólo si es md

const readMd = (filePath) => {
     if (fileMd(filePath)) {
        return readFile(filePath);
   }
   return console.log("no es archivo md");
}

console.log(readMd('./README.md'));
   




