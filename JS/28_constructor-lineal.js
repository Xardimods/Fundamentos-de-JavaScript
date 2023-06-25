// Programación Orientado a Objetos (POO)

// Object Literal forma estandar para crear propiedades y valores

const producto = {
    nombre: 'Tablet',
    precio: 500 
};


// Object Constructor. Con esto se crea una Clase, que es una funcion en donde es una forma en la que vas a almacenar la forma en la que se tendrá los datos de un objeto en específico. 

function Producto(nombre, precio) {
    this.nombre = nombre; // Lo que se hace es colocar el this para referenciarlo dentro del objeto, luego le ponemos el nombre que queramos y finalmente le damos como valor los argumentos que le damos dentro del parametro nombre. Lo mismo sucede con precio. 
    this.precio = precio;
};

function disponibilidad () {
    return Math.random() >= 0.5; // Entregará un false o un true para los productos. 
}

// Prototype. Creacion de funciones que solamente se usarán con ciertas objetos

Producto.prototype.formateo = function() {
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`
}; // funcion para que tome uno de los productos y hacer que se muestre por pantalla la descripción proporcionada. 

const producto2 = new Producto('Monitor Curvo de 49 Pulgadas', 900); // Creacion de Instancia de la clase (funcion) Persona. Lo mismo aplica para los demás.
producto2.disponibilidad = disponibilidad();

const producto3 = new Producto('Monitor Curvo de 90 Pulgadas', 200);
producto3.disponibilidad = disponibilidad();

const producto4 = new Producto('Cafetera', 600);
producto4.disponibilidad = disponibilidad();

const producto5 = new Producto('Audifonos', 100);
producto5.disponibilidad = disponibilidad();

const producto6 = new Producto('Estufa', 900);
producto6.disponibilidad = disponibilidad();

console.log(producto2.formateo());
console.log(producto3.formateo());
console.log(producto4.formateo());
console.log(producto5.formateo());
console.log(producto6.formateo());


function Pc (cpu, gpu, ram, placamadre, almacenamiento, gabinete, disipador, psu, precio) {
    this.cpu = cpu;
    this.gpu = gpu;
    this.ram = ram;
    this.placamadre = placamadre;
    this.almacenamiento = almacenamiento;
    this.gabinete = gabinete;
    this.disipador = disipador;
    this.psu = psu;
    this.precio = precio 
};

function disponibilidad () {
    return Math.random() >= 0.5; // Entregará un false o un true para los productos. 
}

const Producto1 = new Pc ('Intel Core i7 13700k', 'Nvidia GeForce RTX 4070Ti', '2x16 GB CL16 7000Mhz','Asus Z790', 'M.2 de 4TB', 'Gabinete Asus', 'Refirgeración Líquida', '80 Plus Gold de 850W', 2400, 'Dolares')

Producto1.disponibilidad = disponibilidad();

console.log(Producto1);


class Perro {
    constructor(nombre, raza, precio) {
        this.nombre = nombre;
        this.raza = raza;
        this.precio = precio;
    }
}

Perro.prototype.formataer = function () {
    return `El usuario ${producto6.nombre} ha comprado a ${this.nombre} por ${this.precio}`
}

const Perro1 = new Perro ('Firulais', 'Perro Salchicha', 250);
Perro1.disponibilidad = disponibilidad();

console.log(Perro1.formataer());