// Arrow Functions o Funciones flecha. Se pueden usar únicamente en la forma de expresión de la función. 


// Expresión tradicional de la funcion

let sumar2 = function(n1, n2) {
    console.log(n1 + n2);
}; 

// sumar2(5, 10);

// Lo mismo, pero usand los arrows

let sumar3 = (n1, n2) => console.log(n1 + n2); // Sintaxis de una arrow cuanndo solo tiene una linea de codigo.

sumar3(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('C++');

// Si en la funcion solamente se tiene un único parámetro, puedes omitir los paréntesis. 



const meses = ['Enero', 'Febrero', 'Marzo', 'Abril',  'Mayo']; // Arreglo plano

// Arreglo de objetos 

const carrito_de_compras = [
    {nombre: 'Monitor de 20 pulgadas', precio: 500},
    {nombre: 'Camiseta', precio: 25},
    {nombre: 'Televisor de 50 pulgadas', precio: 800},
    {nombre: 'Tablet', precio: 400},
    {nombre: 'Audifonos', precio: 40},
    {nombre: 'laptop', precio: 800},
    {nombre: 'Alfombra', precio: 300},
    {nombre: 'Estufa', precio: 900},
    {nombre: 'Teclado', precio: 50}
]; 


meses.forEach(mes => {
    if (mes === 'Marzo') {
        console.log('Marzo sí existe');
    }
});

const resultado = meses.includes('Marzo');

let resultado2;
let resultado3;

resultado3 = carrito_de_compras.some(producto => producto.nombre === 'Estufa');
console.log(resultado3);

// Forma de sacar el total a pagar de los artículos del carrito

// Reduce

resultado2 = carrito_de_compras.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado2);
// Filter 

resultado2 = carrito_de_compras.filter(producto => producto.precio >= 400);

resultado2 = carrito_de_compras.filter(producto => producto.nombre !== 'Estufa');

