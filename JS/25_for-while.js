


// For Loops. Estos se iran ejecutando mientras una condicion sea evaluada como verdadera y deja de evaluar cuando esa condicion se deja de cumplir. 

// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for(let i = 1; i <= 53; i++) {
//     if(i % 2 === 0) {
//         console.log(`El numero ${i} es par`);
//     } else {
//         console.log(`El numero ${i} es impar`);
//     }
// }

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

// for(i = 0; i < carrito_de_compras.length; i++) {
//     console.log(carrito_de_compras[i].nombre);
// }



// While Loop se ejecutará mientras una condición se considere verdadera. 

// let i = 0 Indice o valor inicial

// while(i <= 100) { // Condicion
//     if (i % 2 === 0) {
//         console.log(`El numero ${i} es PAR`);
//     } else {
//         console.log(`El numero ${i} es IMPAR`);
//     }
//     i++ // Incremento
// }

// while(i < carrito_de_compras.length) {
//     console.log(carrito_de_compras[i].nombre);
//     i++
// }



// Do While Loop. Se ejecutará al menos una vez

let i = 100;

do {
    console.log(i);
    i++;
} while(i < 10); 
