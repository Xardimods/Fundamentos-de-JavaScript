// Declaración de una función

function sumar() {
    console.log(10 + 10); 
}; 
// sumar();

// Expresión de una función

const sumar2 = function() {
    console.log(3 + 3);
}; 
// sumar2();

// Formas de hacer mejores funciones con parametros

function sumar3 (numero1, numero2) { // numero1 y numero2 son los parametros de la funcion. Son variables locales.
    console.log(numero1 + numero2);
};

sumar3(90, 33400); // Introducir los argumentos
sumar3(90, 10); // Introducir los argumentos
sumar3(90, 90); // Introducir los argumentos
sumar3(90); // Introducir los argumentos
sumar3(90, 90); // Introducir los argumentos
sumar3(90, 10); // Introducir los argumentos

// Lo que se hace aquí es llamar múltiples veces a la funcion de sumar3, ya que recordemos que las funciones son reutiizables. 


// Parametros por defecto / default 

function sumar4 (numero1 = 2, numero2 = 0) {
    console.log(numero1 + numero2);
};

sumar4(undefined, 8);