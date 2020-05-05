// Requireds  


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log("fue creada la " + archivo))
            .catch(e => console.log(e))
        break;

    case 'listar':
        listarTabla(argv.base, argv.limite).then(tabla => console.log(tabla))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Esta opcion no esta registrada')
        break;
}


//let base = 9;
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split("=")[1];

/*crearArchivo(base).then(archivo => console.log("fue creada la " + archivo))
    .catch(e => console.log(e));*/