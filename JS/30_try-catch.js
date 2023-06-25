// Uso del Try Catch. Mientras escribas código, debes procurar de que no se incluya los errores, porque por uno de ellos, todo el código dejaría de funcionar, procovocando de que no pueda ejecutarse más piezas de código. Para esto se usa el Try Catch, donde el codigo se ejecutará, pero te dirá dónde está los potenciales errores en el código. SOlo es necesario en casos altamente importantes donde quieres ver cosas en específico, como la autenticacion exitosa o desastrosa de los usuarios, o que si una base de datos se conectó exitósamente.  

const numero1 = 20;
const numero3 = 30;

console.log(numero1);

try { // Intenta ejecutar este codigo. 
    console.log(numero2);
} catch (error) { // Buscame el error e imprimelo por consola
    console.log(error);
}

console.log(numero3);