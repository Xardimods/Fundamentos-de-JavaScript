// Objetos, que son lo que más se usa en jabaScript 

const producto = {
    nombreProducto: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
};

// Añadiendo propiedades cuando en, por ejemplo, en una base de datos, hayan cosas que no esten y quieras agregar. 

producto.imagen = 'imagen.jpg'; 


// Eliminar propiedades cuando quieras eliminar propiedades que en un principio quisiste pero que ahora no se te hacen necesarios. 

delete producto.precio; 
delete producto.disponible;

console.log(producto);
// console.log(producto);

// // Acceder a una propiedad; 


// // Forma 1: 
// console.log(producto.precio);

// // Forma 2:
// // console.log(producto['nombreProducto']);
// // console.log(producto['disponible']);


// const usuario = {
//     nombre: '',
//     edad: '',
//     email: ''
// }; 

// usuario.nombre = 'Enyel Liranzo'; 
// usuario.edad = 30; 
// usuario.email = 'correo@correo.com';

// console.log(usuario);