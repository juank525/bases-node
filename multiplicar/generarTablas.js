const fileSystem = require('fs');
const colors = require('colors');
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base  "${base}" no es un numero`);
        }

        if (!Number(limite)) {
            reject(`El limite  "${limite}" no es un numero`);
        }

        console.log(`TABLA DEL ${base}`.green)
        resolve(dataTabla(base, limite));
    });
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base  "${base}" no es un numero`);
        }

        if (!Number(limite)) {
            reject(`El limite  "${limite}" no es un numero`);
        }

        let fileName = `tablas/tabla-${base}.txt`;
        fileSystem.writeFile(fileName, dataTabla(base, limite), (err) => {
            if (err) {
                reject("Error al crear el fichero");
            }
            console.log('The file has been saved!');
            resolve(fileName);
        });
    });
}

let dataTabla = (base, limite) => {
    let data = '';
    for (let i = 0; i <= limite; i++) {
        data += (`${base} * ${i} = ${base*i} \n`);
    }
    return data;
}

module.exports = {
    crearArchivo,
    listarTabla
}