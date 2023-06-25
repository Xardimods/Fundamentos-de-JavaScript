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

// ForEach. Se usa únicamente en arreglos y se ejecutarán una vez que haya un elemento del arreglo, es decir, la cantidad de elementos que tenga el elemento será la cantidad de veces que se ejecutará el método. Se usa cuando en un arreglo, iterando en él y quieres mostrar por pantalla los elementos del arreglo. 

// carrito_de_compras.forEach(producto => console.log(producto.nombre)); 

// Decimos que repita esa oración por cada elemento que haya en el arreglo (9 veces)
// Ahora lo cambiamos con un parámetro que itere sobre cada elemento y le decimos que imprima por consola los nombres de los artículos. 

carrito_de_compras.forEach(producto => console.log(producto.nombre)); // Iterando

//////////////////////////////

// Map. Se ejecutan únicamente en arreglos se ejecutarán una vez que haya un elemento del arreglo, es decir, la cantidad de elementos que tenga el elemento será la cantidad de veces que se ejecutará el método. Se usa cuando quieres crear nuevos arreglos

// carrito_de_compras.map(producto => producto.nombre); 

const arreglo2 = carrito_de_compras.map(producto => `${producto.nombre} - ${producto.precio}`);  // Creando Arreglos

// console.log(arreglo1);
console.log(arreglo2);