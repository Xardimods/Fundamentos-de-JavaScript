// Funciones. Son una serie de instrucciones o procedimientos en los que se realiza una acción determinada. Una de las ventajas de usar funciones es que permite que tu código sea más ordenado y fácil de mantener. Además de ello, puedes utilizar las funciones las veces que quieras. 



// Formas de crear funciones: 

// Declaracion de funcion 

function sumar() {
    console.log(10 + 10); 
}; // Forma general de crear una funcion

sumar(); // Forma de llamar una funcion


// Expresion de la funcion. Es casi lo mismo, solo que el nombre de la funcion es el nombre de la variable que en la dicha tiene como valor una funcion.

const sumar2 = function() {
    console.log(3 + 3);
}; 

sumar2();

console.log(typeof sumar);

// Si llamas una funcion y despues la defines con este sintaxis, te marcará error. Debemos conocer lo que es el Hoisting en JS. Trata de que de el codigo se ejecuta en normalmente en dos vueltas: primero registra las funciones y luego registra los llamados a las funciones, por eso es que la primera funciona y la otra no, porque no estamos registrando una funcion como tal. Es más considerada la segunda sintaxis como una variable que contiene una funcion, que a realmente una funcion.

// IIFS

(function() {
    console.log('Esto es una función');
})();

// Aquí no es necesario tener que llamar la funcion, sino que esta se autollama. 
































// IIFE 

// (function() {
//     console.log('Esto es una funcion');
// })();

// // En esta sintaxis las funciones se llaman ellas mismas si tener que decirles explicitamente que lo hagan. Una característica de estos es que se mantienen 
// console.log(cliente);