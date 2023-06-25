// Uso del this. Se usa para referirse a una cosa en concreto dentro de un objeto. En el caso de las funciones, es necesario usar la declaración y la forma estandar de la función y no usar las arrow funcionts, debido a que ese tipo solo hará caso al metodo global, y no a los que se contiene dentro de los objetos. 

const reservacion = {
    nombre: 'Enyel',
    apellido: 'Liranzo', 
    total: 50000, 
    pagado: false,
    informacion: function () {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}; // Objetc Literal

const reservacion_2 = {
    nombre: 'Pedro',
    apellido: 'De la Torre', 
    total: 50000, 
    pagado: false,
    informacion: function () {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}; // Objetc Literal

reservacion.informacion();
reservacion_2.informacion();