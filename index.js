
let options = [];
let arrayTerminal = [];
const chalk = require('chalk');
const process = require('process'); 
const mdLinks= require('./mdLinks');
const emoji = require('node-emoji')

//DATA QUE ENTRA POR LA TERMINAL node <i> <file> <val> <st>
process.argv.forEach((val, index) => {
   arrayTerminal.push(process.argv[index]);

   });

   //leyendo las opciones de la terminal
if (arrayTerminal[3] && arrayTerminal[4]){
   if ((arrayTerminal[3] === "--validate" && arrayTerminal[4] === "--stats" )){
      options.push(
      {validate:true},
      {stats:true}
      );
 }
   if ((arrayTerminal[3] === "--stats" && arrayTerminal[4] === "--validate")){
      options.push(
      {stats:true},
      {validate:true}
      );
     }
    }
else if (arrayTerminal[3]){
if (arrayTerminal[3] === "--validate"){
   options.push(
   {validate:true}
   );
}
if (arrayTerminal[3] === "--stats"){
   options.push(
   {stats:true}
   );
}

}
//llamando a la funcion mdLinks
//aquí se valida que el index se ingrese a la terminal para hacer la funcionalidad
 if(arrayTerminal[2]){
    //recibe mi array y opciones
mdLinks(arrayTerminal[2],options)
.then(data => {


      if (options.length === 2 && ((options[0].validate && options[1].stats) || (options[1].validate && options[0].stats))) {
        
         console.log(emoji.get("rainbow"),emoji.get("two_hearts"),chalk.hex('#F619C0').bold(`  Total:`),chalk.hex('#F619C0').bold(data.Total),emoji.get("two_hearts"),emoji.get("rainbow"));
         console.log(emoji.get("sparkling_heart"),emoji.get("unicorn_face"),chalk.hex('#19BAF6').bold(`  Unique:`),chalk.hex('#19BAF6').bold(data.Unique),emoji.get("unicorn_face"),emoji.get("sparkling_heart"));
         console.log(emoji.get("sob"),emoji.get("broken_heart"),chalk.hex('#ED0700').bold(`  Broken:`),chalk.hex('#ED0700').bold(data.Broken),emoji.get("broken_heart"),emoji.get("sob"));
                      

   }

   if ((options.length === 1 && options[0].validate)) {

      data.forEach(el =>{
 
         console.log(emoji.get("unicorn_face"),` ${chalk.hex('#F619C0').bold(el.file)}`,emoji.get("space_invader"), ` ${chalk.hex('#7E0CEF').bold(el.href)}`,emoji.get("palm_tree"),`${chalk.hex('#58F10C').bold(el.status)} ${chalk.hex('#58F10C').bold(el.statusText)}`,emoji.get("palm_tree")," ",emoji.get("star2"),` ${chalk.yellow.bold(el.text)}`,emoji.get("star2"))

      });   
   
   }
   if (options.length === 1 && options[0].stats) {

      console.log(emoji.get("rainbow"),emoji.get("two_hearts"),chalk.hex('#F619C0').bold(`  Total:`),chalk.hex('#F619C0').bold(data.Total),emoji.get("two_hearts"),emoji.get("rainbow"));
      console.log(emoji.get("sparkling_heart"),emoji.get("unicorn_face"),chalk.hex('#19BAF6').bold(`  Unique:`),chalk.hex('#19BAF6').bold(data.Unique),emoji.get("unicorn_face"),emoji.get("sparkling_heart"));
      console.log(emoji.get("sob"),emoji.get("broken_heart"),chalk.hex('#ED0700').bold(`  Broken:`),chalk.hex('#ED0700').bold(data.Broken),emoji.get("broken_heart"),emoji.get("sob"));
                   


   }

   
   
})
.catch(error=> console.log(error));
 }

 else { console.log(chalk.hex('#ED0700').bold("Proporciona un archivo para leer", emoji.get('face_with_rolling_eyes')))} 



































 

// https?:\S+\w  LINKS

// \[[^{}]*\] MARKDON






/*

const chalk = require('chalk');
const fs = require('fs');
const url = require('url');
const request = require('request');
const path = require('path');

module.exports = {

  findMd : (filePath) =>{

   if(path.extname(filePath)=== '.md'){
  
   return true;
}
return false;
},


   readFile :  (filePath,callback)=>{
   fs.readFile(filePath, (error,data)=>{
       if(error){
           throw error;
       }
      callback(data);

   })

},


   findLinks : (data)=>{

      let textMd = data.toString();
      let regExp = new RegExp(/https?:\S+\w/g);
      let found = textMd.match(regExp);
         
      return found


   }




}


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




/*





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




const findLinks = (fileMd) =>{

let textMd = readFile(fileMd);
console.log(textMd);
let regExp = new RegExp(/https?:\S+\w/g);
let found = textMd.match(regExp);

return found
}

   
console.log(findLinks('./README.md'));



const filterLinks = () =>{

let allLinks = findLinks('./README.md');

allLinks.forEach(host => {
 
   request({method: 'HEAD', uri:host}, function (error, response) {
      let page = url.parse(host);
      let pageHref = page.href;

      if (!error && response.statusCode == 200) {
        console.log("Pagina funcionando " , pageHref );
       // return true; 
      }
      else{
         console.log("Pagina no funcionando");
         console.log(pageHref);
         console.log(error);
        // return false;
      }
    });
});

return allLinks;

}

console.log(filterLinks());






*/

/*


const readFile = (filePath)=>{
   let showFile = fs.readFileSync(filePath)
   return showFile.toString();
}
console.log(readFile('./README.md'));











function checkStatus(data) {



return new Promise((resolved,rejected)=>{

    let objectStatsValidate = {};
    let myArrayData = [];

    if (data.status == 200) { 

        myArrayData.push(data={
            link: data.url,
            data: true

          })

        
    } else {

        myArrayData.push(data={
            link: data.url,
            data: false

          })

        }
objectStatsValidate = myArrayData.length;

resolved(objectStatsValidate.length)
})

}













console.log('links found: ', linksFound);

const arrayP = [];


linksFound.forEach(host => {

request(host ,{json:true}, function (error, response) {
  let page = url.parse(host);
  let pageHref = page.href;

  
  if (!error && response.statusCode == 200) {

    arrayP.push({
      response : true,
      page : pageHref,
  } );


    //console.log(response.statusCode);

  }
  else{

   // console.log("no response")

  }


});






});


*/