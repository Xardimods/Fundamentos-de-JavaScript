// Lo que estamos haciendo es combinar texto con variables o funciones. Hay de dos formas:  Concatenación y Strigs Literals. 

//Creacion de constantes

const nombre = 'Juan'; 
const email = 'correo@correo.com';

//Concatenación. Mientras que con + en numeros sumas, en Strings los unes. 

console.log('Nombre del Cliente: ' + nombre + " Correo: " + email); 

// Template Strings - Strings Literals. Esta expresión ${} es una interpolación para agregar dentro de una cadena de texto variables o funciones. Recuerda que el hecho de que esté la palabra Template (plantilla) no significa que la puedas reutilizar. 

console.log(
`Nombre del cliente: ${nombre} 

Email: ${email}`);

// console.log(email);
// console.log('Hola Mundo!');