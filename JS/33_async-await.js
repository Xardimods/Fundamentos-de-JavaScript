// Async Await. 

// Esta es la base de todo desarrollo moderno. Se usa para tener codigo asincrono, en donde cierta parte del mismo se ejecutará mientras que otro se ejecutará en un lapse de tiempo deiferente. 

function descargar_clientes () {
    return new Promise (resolve => {
        console.log('Deacargando clientes. Espera...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });  
}

function descargar_pedidos () {
    return new Promise (resolve => {
        console.log('Deacargando pedidos...');

        setTimeout(() => {
            resolve('Pedidos descargados');
        }, 3000);
    });  
}


async function app() {
    try {
        // const clientes = await descargar_clientes();
        // const pedidos = await descargar_pedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const result = await Promise.all([descargar_clientes(), descargar_pedidos()]) // Con Promise.all lo que hacemos es unir en un arreglos las funciones promesas que queremos ejecutar, dando así con un mejor performance. 
        console.log(result[0]);
        console.log(result[1]);
    } catch (error) {
        console.log(error);
    }
}






// app();

// console.log('Este codigo no se bloquea');



function datos_juegos () {
    return new Promise (resolve => {
        console.log('Descargando la base de datos de los jugadores...');

        setTimeout(() => {
            resolve('Los datos han sido descargados con exito!')
        }, 10000)
    });
} 

function datos_archivos () {
    return new Promise (resolve => {
        console.log('Accediendo a los datos de los archivos');

        setTimeout(() => {
            resolve('¡Se ha accedido con éxito a los daros requeridos!')
        }, 5000)
    });
} 

async function jugadores() {
    try {
        const valores = await Promise.all([datos_juegos(), datos_archivos()])
        console.log(valores[0]);
        console.log(valores[1]);
    } catch (error) {
        console.log(error);
    }
} 

jugadores();