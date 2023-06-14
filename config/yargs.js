const { describe } = require("yargs");

const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: "Es la base de la tabla de multiplicar"
    },
    m: {
      alias: "multiplo",
      type: "number",
      default: 10,
      describe: "Es el multiplo de la tabla de multiplicar"
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: "Muestra la tabla de multiplicar creada"
    }
  })
  .check((argv, options) => {
    if (isNaN(argv.b) || isNaN(argv.m)) {
      throw "La base o multiplo debe ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
