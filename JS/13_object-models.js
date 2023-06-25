// 'use strict'; // Hace que JavaScript sea esticto con tu código

// const resultado = Math.floor((((27-5)/3*2)**3));
// console.log(resultado);

const producto = {
    nombreProducto: 'Monitor de 20 Pulgadas',
    precio: 300, 
    disponible: true
}; 

// Función Object, de atributo freeze. Lo que hace es que esta función eligirá un objeto que desees y a ese mismo objeto congelarlo, de ahí el freeze. otra característica es que no te permite añadir nuevas propiedades, pero no puedes eliminar las ya existentes. Tampoco te permite cambiar valores de las propiedades ya existentes. 

// Object.freeze(producto);

// Existe también el Seal, que es para también evitar el añadido de nuevas proppiedades al objeto. La diferencia con Freeze es que es casi lo mismo, pero puedes modificar los valores de las propiedades de los objetos ya existentes. 

// Object.seal(producto);

// Añadir propiedades a un objeto.
producto.imagen = 'imagen.jpg';

// Para saber si un objeto está sellado se usa el método frozen
// console.log(Object.isSealed(producto)); o console.log(Object.isFreeze(producto));

console.log(producto);