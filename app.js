const { argv } = require('./config/config')
const { crearArchivo, listarTabla } = require('./multiplicar/generarTablas');
const colors = require('colors/safe');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch((err) => console.log(`Se presento un error ${err}`));
        break;
    default:
        console.log(`Comando ${comando} no reconocido`);
}