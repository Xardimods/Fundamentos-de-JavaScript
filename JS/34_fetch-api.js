// Fetch APi: El reemplazo de AJAX (XMLHttpRequest)

// Fetch te permite enviar información al servidor u obtener información de un servidor. También podemos actualizar el sitio web sin necesidad de recargar la página. Además, podemos obtener un archivo local o una respuesta de un servidor (ya sea en texto o en un JSON). PAra ello se necesitará un lenguaje de Backend. 

// Al igual que todas las APIs Modernas de JS, se utiliza Promises o también Asyn Await.

// JSON (JavaScript Object Notation). Es similar a un objeto, además de que es un lenguaje de transporte de datos. Un JSON puede ser creado en cualquier lenguaje y se puede consumir en JavaScript pro medio de Fetch API y mostrarlo en tu sitio web. 


async function obtener_empleados () {
    
    const archivos = 'empleados.json'

    // FORMA CON FETCH

    // fetch(archivos)
    //     .then(resultado => resultado.json())
    //     .then(datos => {
    //         const { empleados } = datos;
    //         console.log(empleados);
    //         empleados.forEach(empleado => {
    //             // console.log(empleado);
    //             console.log(empleado.nombre);
    //             console.log(empleado.id);
    //             console.log(empleado.puesto);
    //         });
    //     });


    // FORMA CON ASYNC / AWAIT
    const resultado = await fetch(archivos); 
    const datos = await resultado.json();
    console.log(resultado);
    console.log(datos);

    const {empleados} = await datos; 

    empleados.forEach(element => {
        console.log(element);
    });

};

obtener_empleados();