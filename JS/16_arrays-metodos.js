// Más metodos de arrays. Se les dice Array Methods porque se relacionan los arrays con las funciones de la forma: arreglo.metodo(funcion)

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
]; // Arreglo con Objetos

// forEach. Esto significa que se ejecutará al menos una vez por cada ocasión o cada elemento que se encuentre en el arreglo. 

// meses.forEach(function(mes) {
//     if (mes === 'Marzo') {
//         console.log('Marzo sí existe');
//     }
// });

// En este caso se usa un condicional, que se conoce como if, en donde si se cumple ciertas condiciones que se le hayan puesto, ejecutará alguna acción que le hayas asigando.


// Includes es un metodo en donde verifica si hay cosas que queremos en un arreglo que esten presentes. Esta perfecto cuando tenermos arreglos planos, pero cuando se trata de arreglos con objetos la cosa se pone más complicada. 

const resultado = meses.includes('Marzo');


// En vez de usar Includes, se usa some, que está genial para arreglos con objetos como elementos. Parece dificil, pero lo explicaré de una forma. 

// Aquí le estamos dando de valor a la constante de resultado2 lo siguiente: del carrito de compras usamos el metodo some, que dentro de el estará una funcion en donde tendremos una variable llamada producto. dentro de esa variable accedemos a una propiedad del arreglo, que son los nombres y verificamos si dentro de esa propiedad se encuentra el valor de Estufa. Si es correcto, me regresará un true, sino, será un false. 

// const resultado2 = carrito_de_compras.some(function(producto) {
//     return producto.nombre === 'Estufa'
// })

// Una forma más fácil para hacer lo mismo que lo de arriba. 

let resultado2 = carrito_de_compras.some(producto => producto.nombre === 'Estufa');


// Forma de sacar el total a pagar de los artículos del carrito
// Reduce

resultado2 = carrito_de_compras.reduce((total, producto) => total + producto.precio, 0);


// Filter 

resultado2 = carrito_de_compras.filter(function(producto) {
    return producto.precio >= 400;
});

// resultado2 = carrito_de_compras.filter(function(producto) {
//     return producto.nombre !== 'Estufa';
// });



console.log(resultado2);