// Uso de Arreglos o Arrays. Estos concepts son fundamentales para el desarrollo de código con JavaScript. Es una estructura de datos dentro de una variable que pueden tener los mismos valores o diferentes. Ejemplos: 

// const numeros = [10, 20, 30, 40, 50]; 
// console.table(numeros);

// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

// Cabe recordar que los constructores en JavaScript son funciones especiales que se usan para crear e inicializar objetos. Son instancias debido a que poseen las mismas propiedades de la clases, con la finalidad de que puedes cambiarle los valores de las propiedades. Haste cuenta de que la clase es una receta predefinida y el objeto de un derivado de esa receta. Y se usan los constructores para crear esos objetos derivados. 

// const meses = ['Enero',  'Febrero', 'Marzo', 'Abril',  'Mayo']; 
// console.table(meses);


// Los arrays pueden tener todo tipo de datos: 
const arreglo = ['Hola', 20, true, 'si', null, {nombre: 'Enyel', trabajo: 'Desarrollador'},[1, 2, 3]];
// console.log(arreglo);


// Cómo accedemos a los valores de los arreglos. 

// console.log(numeros[4]);
// console.log(arreglo[4]);


// Recordando los objetos. 
const objeto = {
    nombre: 'Enyel', 
    apellido: 'Liranzo'
};

// El acceder a una propiedad de los objetos con Destructuring

const {nombre, apellido} = objeto; // creacion de variables desde las propiedades del objetos. 

// console.log(apellido);

// // Conocer la extensión de los arreglos 

// console.log(meses.length);

// // Inicial de Initerador. asignamos un forEach(para cada uno) de los valores de la variable meses, le asignamos una funcion con la variable numeros en donde muestre por pantalla todos los valores. Básicamete no nos muestra que es un array. 

// meses.forEach(function (numeros) {
//     console.log(numeros);
// });




// Modificar Arrays

const numeros = [10, 20, 30, 40, 50];


// Primera forma de agregar o modificar elementos de un arreglo. Usamos la extensión de la variable y entre corchetes colocamos un nuevo elemento (ya que se ordenan numéricamente) y colocamos el nuevo valor. Se hace lo mismo, pero no con un nuevo elemento si no colocar un elemento ya existente y poner un nuevo valor para modificarlo. 


// numeros[5] = 60; 
// numeros[6] = 100; 


// Nueva forma: Push. Es una función que te permite agregar nuevos datos a los arreglos, con la condicion de que estos no hayan sido modificados. Los nuevos valores se agregan al final de un arreglo

// numeros.push(60, 'Hola', true);

// Otra forma: Unshift. Básicamente lo mismo que los push pero con la diferencia de que los nuevos elementos se colocan al inicio de los arreglos. Todo esto pertenece a las Estructuras de Datos.

numeros.unshift(-10, -20, -30);

// console.table(numeros); 



// Eliminar elementos de un arreglo. 


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril',  'Mayo']; 

// Hay dos formas

// meses.pop(); // Así, de forma estándar, elimina el último elemento del arreglo
// meses.shift(); // De esta forma, elimina el primer elemenot del arreglo

// Forma de eliminar los elementos a voluntad, cualesquiera: 

// meses.splice(1, 2); 
// console.table(meses);

// Esta funcion lo que hace es eliminar, agregar o modificar los elementos de un arreglo. En este caso estamos eliminado elementos. Dentro hay dos valores: 1 (que es la posicion que a partir de ahí empezará a borrar) y 2 (que es la cantidad de elementos que se borarán a partir de la posicion que hayamos escogido, que en este caso es la numero 1). 




// Como se modifican los elementos de los arreglos, es recomendable hacerlos pero en otro arreglo con las mismas características. Para ello se usa Rest Operator o Spread Operator.

const nuevo_arreglo = [...meses, 'Junio'];
console.log(nuevo_arreglo);

// Lo que estamos haciendo es crear un nuevo arreglo, y dentro de su valor (dentro de los corchetes) usamos esto: ... que es para indicar que estaremos copiando algo, en este caso el arreglo de meses. luego agregamos una coma y agregamos un nuevo elemento, llamado Junio. Recordar que si pones los elementos a colocar y luego la propiedad de copiar otro arreglo, los nuevos elementos se colocarán arriba. Si lo hace viceversa, se mostrarán abajo. 