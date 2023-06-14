const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

// const base = 7;
console.clear();

//=============== FORMA DE OBTENER LOS ARGUMENTOS EN CONSOLA ============
// const [, , arg3 = ""] = process.argv;
// const [, base = 1] = arg3.split("=");

// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//   if (err) throw err;
//   console.log(`tabla-${base}.txt creado`);
// });

crearArchivo(argv.b, argv.m, argv.l)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err.red));
