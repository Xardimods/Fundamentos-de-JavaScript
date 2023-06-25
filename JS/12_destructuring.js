// Objetos, que son lo que más se usa en jabaScript 

// Sintaxis de un objeto:

//  (var, let, const) nombrevariable = {
//      propiedad1: valor1,
//      propiedad2: valor2;
//      propiedad3: valor3;
//  };



const producto = {
    nombreProducto: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
};


// Forma anterior 
const precio_producto = producto.precio; // Lo que estamos haciendo es crear una nueva variable (constante) en donde su valor corresponde a una propiedad de un objeto, y accdemos a esa propiedad con nombredelavariable.propiedadelavariable 
const nombre_producto = producto.nombreProducto;

// console.log(precio_producto);
// console.log(nombre_producto);


// Forma actual Destructuring, que extae el valor y crea la variable en un solo paso. 

// const {nombreProducto} = producto; // de la constante producto, extrae el valor de nombreProducto para crear la variable nombreProducto
// const {precio} = producto; aquí pasa exactamente lo mismo

// Para que Destructuring funcione, la propiedad y la variable deben tener el mismo nombre.

const {precio, nombreProducto} = producto



console.log(precio);
console.log(nombreProducto);


// Podemos cambiarle el nombre a nuestras variables en caso de ponerles otros nombres:

//     const producto = {
//         nombreProducto: 'Monitor de 20 Pulgadas',
//         precio: 300,
//         disponible: true
//     };

// Nota cómo le cambio el nombre poniendo después del nombre de la propiedad dos puntos, y seguido de ello el nuevo nombre que le quieras poner. 

//  const {precio: hola, nombreProducto: mundo} = producto

// La variable para la propiedad de precio se llama 'hola', y para el nombreProducto es 'mundo'. Ya luego imprimes por consola y verás que te funcionará. 