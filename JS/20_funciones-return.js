// Uso del return 


function sumar (n1, n2) {
    return n1 + n2;
}; 

const resultado = sumar(1, 3);

// return se usa para retornar valores para luego ser utilizados para alguna cosa. En este caso, imprimimos la funcion de sumar, donde retorna la suma de n1 y n2, en donde esa información se almacenará en la variable resultado, que dentro tiene dos argumentos: 1 y 3. Para ver el resultado podemos usar el console.log(); para ver. 

// console.log(resultado);

let total = 0; // creamos una variable

function agregar_al_carrito (precio) {
    return total += precio; 
}; // hacemos una funcion en donde se utiliza como parametro el precio, en donde la variable total tendrá productos y el precio las irá almacenando. Luego agregamos valores dentro de la variable total e imprimimos por consola.

function calcular_impuesto(total) {
    return 1.15 * total; 
}

total = agregar_al_carrito(300);
total = agregar_al_carrito(500);
total = agregar_al_carrito(800);

console.log(total);

// const total_a_pagar = calcular_impuesto(total); //

const pagar = Math.floor(calcular_impuesto(total));

console.log(`El total a pagar con impuestos es de: $${pagar}`); // Se usan los templates dentro delos Strigs para introducir variables, constantes, funciones, etc...

