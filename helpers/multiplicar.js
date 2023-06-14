const fs = require("fs");
require("colors");

//======PROMESA NEW PROMISE =============

// const crearArchivo = (base) => {
//   return new Promise((resolve, reject) => {
//     console.log("========================");
//     console.log(`Tabla del: ${base}`);
//     console.log("========================");

//     let salida = "";

//     for (let i = 1; i <= 10; i++) {
//       salida += `${base} x ${i} = ${base * i}\n`;
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida);

//     resolve(`tabla-${base}.txt creado`);
//   });
// };

//======PROMESA ASYNC - AWAIT =============

const crearArchivo = async (base, multiplo = 10, listar) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= multiplo; i++) {
      salida += `${base} X ${i} = ${base * i}\n`;
      consola += `${base} ${"X".red} ${i} ${"=".green} ${base * i}\n`;
    }

    if (listar) {
      console.log("========================".green);
      console.log(`${"Tabla del:".white}${base}`.red);
      console.log("========================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./Salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creado`.rainbow;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo
};
