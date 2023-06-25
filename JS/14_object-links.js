// Existe la característica de que podemos unir dos objetos, siempre y cuando estos objetos no los podamos modificar. Es recomendable puesto que es considerado una buena prática. Si los quieres modificiar, debes crear una copia de esos objetos. 

const producto = {
    nombreProducto: 'Monitor de 20 Pulgadas',
    precio: 300, 
    disponible: true
}; 

const medidas = {
    peso: '1kg',
    medida: '1m'
}; 

// Forma para unir dos objetos: 

const nuevo_producto = {
    ...producto, ...medidas
}; 

// Esta es la sintaxis de unir o fusionar dos objetos (la que ves arriba)

console.log(producto);
console.log(nuevo_producto);
