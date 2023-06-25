// Clases 

class Producto {
    constructor(nombre, precio) {
        this.nombre =  nombre; 
        this.precio = precio; 
    }

    formatear() {
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
    }

    retornar_precio() {
        return `El precio de este producto es de ${this.precio}`;
    }

};

const producto2 = new Producto('Monitor Curvo de 49 Pulgadas', 900);
const producto3 = new Producto('Monitor Curvo de 90 Pulgadas', 200);







// Herencia. Lo que hacemos es heredar propiedades o funciones de otra clase, considerada como clase padre. 'extends' se usa para heredar todo de la clase de Producto hacia Libro. Es útil cuando no se quiere duplicar código en donde hayan cosas parecidas. 

class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn; 
    }

    formatear() {
        return `${super.formatear()} y su ISBN es ${this.isbn}`;
    }

    retornar_precio() {
        super.retornar_precio(); 
        console.log('Y sí hay existencia');
    }
}

const libro = new Libro('JavaScript: La Revolución', 120, '234234234234234');

// console.log(libro.formatear());
// console.log(libro.retornar_precio());


// console.log(producto2.formatear());
// console.log(producto2.retornar_precio());

// console.log(producto3.formatear());
// console.log(producto3.retornar_precio());



class Coche {
    constructor(nombre, auto, presupuesto, precio) {
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.auto = auto;
        this.precio = precio;
    };

    obtener_precio() {
        return `El auto tiene un precio de $${this.precio} dólares`
    };

    comprobacion_presupuesto () {
        if (this.presupuesto < 1000) {
            return `¡No puedes comprar el auto ${this.auto} debido a que no tienes el presuesto suficiente!`
        } else if (this.presupuesto < this.precio) {
            return `¡No tienes dinero suficiente para comprar el auto!`
        }

        return `¡El usuario ${this.nombre}, con un presupuesto de $${this.presupuesto} dólares, ha conseguido el auto ${this.auto}, que tiene un precio de $${this.precio} dólares!`
    }; 

};

class Nuevo_auto extends Coche {
    constructor(nombre, auto, presupuesto, precio, historial) {
        super(nombre, auto, presupuesto, precio);
        this.historial = historial;
    }

    compra() {
        if (this.historial === 1) {
            return `${super.comprobacion_presupuesto()} También tiene un gran historial`
        } else 
            return `Tu historial no te permite adquirir el auto. Necesitas desarollar un buen historial`
    }
}; 


const nuevo_auto = new Nuevo_auto('Juan', 'Nissan Tundra', 7000, 6000, 1);

console.log(nuevo_auto.compra());


// console.log(usuario.obtener_precio());
// console.log(usuario.comprobacion_presupuesto());




class Profesion {
    constructor(nombre, apellido, edad, ocupacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ocupacion = ocupacion;
    }

    presentacion () {
        return `Su nombre y apellido es ${this.nombre} ${this.apellido}, tiene ${this.edad} años y trabaja como ${this.ocupacion}`
    }
};

class Trabajador extends Profesion {
    constructor(nombre, apellido, edad, ocupacion, pais) {
        super(nombre, apellido, edad, ocupacion);
        this.pais = pais;
    }

    formatear() {
        return `${super.presentacion()}. Además, vive en ${this.pais}.`;
    }
    
}

const empleado = new Trabajador('Pedro', 'Rodríguez', 35, 'Desarrollador de Software', 'México')

// console.log(empleado.formatear());