//Pequeño programa para calcular una suma. 

// let a = window.prompt('Ingresa el primer número:');
// let b = window.prompt('Ingresa el segundo número:');

// a = parseFloat(a);
// b = parseFloat(b);

// let suma = a + b;

// console.log('La suma es: ' + suma);



//String

const tweet = '"Monitor 4K de 20 pulgadas"'; 
console.log(typeof producto3); //TyoeOf te dice qué tipo de valor es el que estás usando. 
const producto5 = String('Monitor de 40 pulgadas'); // Aquí especificas que el valor es un String
const producto3 = new String('Monitor 8K de 50 pulgadas'); //Objeto String
console.log(typeof producto2); 

const producto2 = 'Aprendiendo JavaScript con el curso de Desarrollo Web de Udemy'; 
const email = 'correo@correo.com'


console.log(tweet.length); // lenght te dice cuantos caracteres hay en un string. Es una propiedad más que un método. 
console.log(producto2);

//IndexOF te ayuda a encontrar un elemento en un string en el lugar concentro, arrojandote un número. 

console.log(producto2.indexOf('Desarrollo'));
console.log(tweet.indexOf('pulgadas'));


//Includes te dice si el elemento está incluido o no en el String. Te devolverá valores como True o False en caso de que si encontró una palabra o no. 

// console.log(producto2.includes('Desarrollo'));
// console.log(tweet.includes('Monitor'));
console.log(email.includes('@'))