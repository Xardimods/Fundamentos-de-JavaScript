// Objeto Math, que te permite realizar operaciones matematicas

let resultado; // Una vez que haya declarado esa variable, no es necesario volver a colocarlo, osea , me refiero a let. Y digo que no es necesario, puesto que no hace falts, si vamos a cambiar este valor las veces que uno quiera, como los casos de abajo.

resultado = Math.PI; // te arroja el numero pi
resultado = Math.round(12.5); //Round es una propiedad que te ayuda a redondear número decimales.
resultado = Math.ceil(12.2); //Ceil es una propiedad en donde los redondeos siempre irán hacia arriba. 
resultado = Math.floor(12.9); //Floor es lo contrario a Ceil, ya que redondea hacia abajo.
resultado = Math.sqrt(144); //sqrt = raóz cuadrada
resultado = Math.abs(200); //abs hace que tus números negativos pasen a ser números positivos. 
resultado = Math.min(3, 5, 1, 8, 2, 10); //min hace que se tome el valor mínimo de la cadena. 
resultado = Math.max(3, 5, 1, 8, 2, 10); //max hace que se tome el valor más alto de la cadena. 
resultado = Math.random();
resultado = Math.floor(Math.random() * 30); // el valor es un floor (redondeo siempre descendente), que dentro del mismo hay un número aleatorio y lo multiplicamos por 30. Como respuestas valores entre 1 y 30, excluyendo a los mencionados. 
resultado = Math.log10(1000);


// declaramos dos constantes

const a = 20; 
const b = 4;

// Cambiamos el valor de la variable resultado para que ahora sea el resultado de esas dos constantes

resultado = a % b;


console.log('El resultado de la operacion es: ' + resultado); //función para immprimir algo en la consola del navegador. 