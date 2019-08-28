 







 

// https?:\S+\w  LINKS

// \[[^{}]*\] MARKDON


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




const readFile = (filePath)=>{
   let showFile = fs.readFileSync(filePath)
   return showFile.toString();
}
console.log(readFile('./README.md'));











function checkStatus(res) {



return new Promise((resolved,rejected)=>{

    let objectStatsValidate = {};
    let myArrayData = [];

    if (res.status == 200) { 

        myArrayData.push(data={
            link: res.url,
            data: true

          })

        
    } else {

        myArrayData.push(data={
            link: res.url,
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


