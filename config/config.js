const options = {
    base: {
        demand: true,
        alias: 'b',
        default: '0'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};
const argv = require('yargs')
    .command('listar', 'Imprime en onsola la tabla de multiplicar', options)
    .command('crear', 'Permite crear un fichero con la tabla de multiplicar', options).help().argv;

module.exports = {
    argv
}