//IM CREATING MDLINKS TO SEPARATE MY FUNCTIONS

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const FileHound = require('filehound')

//return true or false if the file is md
const fileMd = (filePath) => {
	if (path.extname(filePath) === ".md") {
		return true;
	}
	return false;
};

//process.argv nos sirve para manipular la data de la consola

console.log(fileMd(process.argv[2]));



//trying functions callbacks

/*

const readFile = (filePath,callback)=>{
    fs.readFile(filePath, (error,data)=>{
        if(error){
            throw error;
        }
    callback(data);
       console.log(getLinks(findLinks(data.toString()))
       .then(data=>{
           console.log(data)
       }))
    })

 }
*/

 //readFile with promise 
 // getting links in this function


const readFile =(filePath)=>{
return new Promise((resolved,rejected)=>{

    fs.readFile(filePath, "utf-8", (error, data) => {
        if (error) {
           rejected(error);
        }
        else {
           let arrayLinks = [];
           const renderer = new marked.Renderer();
           renderer.link = (href, title, text) => {
              arrayLinks.push({
                 file: path.basename(filePath),
                 href: href,
                 text: text
                
              });
           }
           marked(data, { renderer: renderer });
        
           resolved(arrayLinks); 
                      
        }
    })
 })
}


/*

readFile('./README.md')
.then((fileContent)=>{
	console.log(fileContent)
});




readFile('./README.md')
.then((fileContent)=>{
	console.log(getLinks(fileContent).then(data =>{
console.log(data)
    }))
});

*/



//trying data
readFile('./README.md')
.then((fileContent)=>{
	console.log(getLinks(fileContent).then(data =>{
        console.log(countLinks(data).then(link=>{
             console.log(link)
        }))
    }))
});




 //console.log(readFile('./README.md',()=>{}))


/*
//Funcion para expresiones regulares, queda de aprendisaje pero se descarta 
 const findLinks = (data) =>{

    let textMd = data.toString();
    let regExp = new RegExp(/https?:\S+\w/g);
    let found = textMd.match(regExp);
       
    return found
}

*/






//Getting links ok and No Ok

const getLinks = (linksFound) =>{
 
    let linksArray =[];
    linksArray = linksFound;
    return new Promise((resolved, rejected) => {
       linksArray.forEach((link,i) => {
          fetch(link.href)
             .then(res => {
              
                 
                linksArray[i].status = res.status;
                linksArray[i].statusText= res.statusText,
                                  
                
                setTimeout(() => {
                   resolved(linksArray);
                }, 3000);



             })
             .catch(error => {
                rejected(error);
             });
       });
    });    

}
    


//function to count links Total,Unique and Broken

const countLinks = (arrayToStats) => {
    return new Promise((resolved, rejected) => {
       let objToValidate = {};
       let linksUnique = [];
       arrayToStats.forEach(linkUrl => {
          linksUnique.push(linkUrl.href);
       });
       
       linksUnique = [...new Set(linksUnique)];
       objToValidate.Total = arrayToStats.length;
       objToValidate.Unique = linksUnique.length;

       let brokenLinkStatus =[];
       arrayToStats.forEach(linkUrl => {
          brokenLinkStatus.push(linkUrl.statusText);
       });
     
       let allBrokenLink = brokenLinkStatus.filter(linkUrl => linkUrl === "Not Found");
       objToValidate.Broken = allBrokenLink.length;
 
       resolved(objToValidate);
    });
 }



 const files = FileHound.create()
 .discard('node_modules')
  .paths('./')
  .ext('md')
  .find();
 
files.then(console.log);


