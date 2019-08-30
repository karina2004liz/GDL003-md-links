//DEPENDENCIAS
const fs = require('fs');
const marked = require('marked');
const FileHound = require('filehound');
const fetch = require('node-fetch');
const path = require('path');


const mdLinks = (filePath, options) => {

return new Promise((resolved, rejected) => {

      fs.stat(filePath, (error, stats) => {

   if (error) {
            rejected(error);
         }
       else {

   if (stats.isFile()) {
               // llamar a la funcion para imprimir los links en la consola
      readingFile(filePath)
      .then(result => {

       if (options.length === 2 && ((options[0].validate && options[1].stats) || (options[1].validate && options[0].stats))) {
                  getLinksOknoOk(result)
                        .then(result => {

                        resolved(countLinks(result));
                        
                     })
                     .catch(error => console.log(error));
               }
         if (options.length === 1 && options[0].validate) {
                 getLinksOknoOk(result)
                  .then(result => {
                   result.forEach(findPathMd => {
                  setTimeout(() => {
                  resolved(result);
                           }, 1000);
                      });
                   })
                   .catch(error => console.log(error));
                     }

          if (options.length === 1 && options[0].stats) {

              resolved(countLinks(result));
             }
          })
          .catch(error => (error));
               }  

             if (stats.isDirectory()) {

               resolved(starAppWithFileOrDir(filePath, options));
            
         }
      }
   });
});
}
   
//Iniciamos el programa, recibe mi filepath y las opciones de la consola ya sea stats o validate
const starAppWithFileOrDir = (filePath, options) => {

   return new Promise((resolved, rejected) => {
      //En caso de que sea un direcctorio se buscará con FileHound
      const files = FileHound.create()
         .discard('node_modules')
         .paths(filePath)
         .ext('md')
         .find();
            files
         .then(result => {
            //el resultado me dará un array con las coincidencias, es decir con los archivos ".md"
            //Creo un array vacío para poder iterarlo
       let arrayDirWithPath =[];
       //lo itero con foreach y con push inserto mi data para poder manipularla
       result.forEach(element => {
         arrayDirWithPath.push(element);
       });
       //Utilizo promisseAll para poder encontarr los links en cada archivo que encuentre
       //Utilizo array map para crear mi array con los elementos que mandé con push
      Promise.all(arrayDirWithPath.map(findPathMd => {
         //llamo a mi función readingFile para empezar con el proceso de leer mi data y encontrar links
        return readingFile(findPathMd);
    
  }))
  .then(result=>{

   //Concateno mi array para poder gestinar los resultados de mi directorio
   let newArrayFile = Array.prototype.concat.apply([], result);


    if (options.length === 2 && ((options[0].validate && options[1].stats) || (options[1].validate && options[0].stats))) {
      getLinksOknoOk(newArrayFile)
         .then(result => {
            
            resolved(countLinks(result));
         })
         .catch(error => (error));
   }

    if (options.length === 1 && options[0].validate) {
      getLinksOknoOk(newArrayFile)
         .then(result => {
         resolved(result);
         
         })
         .catch(error => console.log(error));

      }
      if (options.length === 1 && options[0].stats) {

         resolved(countLinks(newArrayFile));
      }

     })
  })
  })
.catch(error => (error))
           
           
     
}

//funcion para capturar los links
const readingFile = (filePath) => {
   
   return new Promise((resolved, rejected) => {
   fs.readFile(filePath, "utf-8", (error, data) => {
   if (error) {
         rejected(error);
   }
   else {
   let arrayGetLinks = [];
   const renderer = new marked.Renderer();
   renderer.link = (href, title, text) => {
   arrayGetLinks.push({
         file: path.basename(filePath),
         href: href,
         text: text
              
   });
}
marked(data, { renderer: renderer });
      
resolved(arrayGetLinks); 
         
            
   }
});
});

}
//funcion para imprimir los links ok y no ok
const getLinksOknoOk = (linksFound) =>{
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



//funcion para contar links unicos, reptidos y rotos
const countLinks = (arrayOfreadFile) => {
   return new Promise((resolved, rejected) => {
   let objToValidate = {};
   let linksUnique = [];
      arrayOfreadFile.forEach(linkUrl => {
      linksUnique.push(linkUrl.href);
   });
   linksUnique = [...new Set(linksUnique)];
       objToValidate.Total = arrayOfreadFile.length;
       objToValidate.Unique = linksUnique.length;
   
   let brokenLinkStatus =[];
      arrayOfreadFile.forEach(linkUrl => {
      brokenLinkStatus.push(linkUrl.statusText);
   });
   let allBrokenLink = brokenLinkStatus.filter(linkUrl => linkUrl === "Not Found");
      objToValidate.Broken = allBrokenLink.length;
      resolved(objToValidate);
   });
   }



module.exports = mdLinks;

