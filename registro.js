const fs = require("fs");

module.exports = {
    nombreedad: (name, age) => {
        console.log(name,age)
    },

    escribir: (rutaArchivo, madefromapp, callback) => {
        
        fs.readFile(rutaArchivo, "utf-8", (err, data) => {
            if (err) {
              console.error("Error al leer el archivo:", err);
              return;
            } 

            let translate = JSON.parse(data)

            translate.push({madefromapp});
            
            fs.writeFile(rutaArchivo, JSON.stringify(translate), (err) =>{
                if (err) {
                    console.error("Error al enviar el archivo", err);
                    return;
                  } 
                console.log("Nombre puesto de manera exitosa")  
            })
        });
    },

    revisar: (rutaArchivo, nombreBuscado, callback) =>{
        fs.readFile(rutaArchivo, "utf-8",(err, data) =>{
            if (err) {
                console.error("Error al leer el archivo:", err);
                return;
              } 
              let revision = JSON.parse(data)

              const existeNombreBuscado = revision.some(usuario => usuario.madefromapp.nombre === nombreBuscado)

              if (existeNombreBuscado){
                console.log("Si esta")
              } else {
                console.log("No esta")
              }
        } )
    }

}