// Estructuras de Control. Podemos crear condiciones para ciertos eventos, en los que si se cumple, hará funcionar una parte de codigo especializado en realizar esa tarea, y si no, que ejecute otro pedazo de codigo. 


// const puntaje = 100; 

// if(puntaje !== 1000) {
//     console.log('No es igual');
// } else {
//     console.log('Sí, el puntaje es de 1000');
// }; // Si dentro del if no se cumple lo necesario, usa else para dar otra informacion

// if: si, entonces / else: sino, entonces 

// Extra: = para igualar o dar valor a las variables. == para comparar y verificar si es o no el dato que se requiere. === comparacion estricta, en donde tiene que ser el dato asignado y el tipo de valor asignado. !== deiferente de. 


// const efectivo = 700; 
// const carrito = 800; 

// if (efectivo > carrito) {
//     console.log('El usuario puede pagar');
// } else {
//     console.log('Fondos insuficientes');
// }


const rol = ' '

if (rol === 'Administrador') {
    console.log('Acceso a todo el sistema');
} else if (rol === 'Editor') {
    console.log('Tienes acceso, pero no para mucho');
    } else if (rol === 'Visitante') {
        console.log('Eres Visitante, por lo que no tienes acceso al sistema');
    } else {
    console.log('Acceso denegado');
}; 