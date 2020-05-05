const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base) || !Number(limite)) {
            reject("Todos los parametros son numeros");
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += ` ${ base } * ${ i } = ${ base * i }\n`;
        }
        resolve(data);
    });

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject('No es un numero ');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += ` ${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-limite-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${ base }`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}