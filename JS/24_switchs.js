// Switchs o una mejor forma de tener varios if
// primero usas el switcj y dentro la variable, abres llaves y evalua casos con case, das lo que quieres hacer y los terminas con break. En el caso de que no se cumpla, es necesario tener un default para que indique que los casos no se han cumplido o la condicion no es la que se esperaba.


const metodo_pago = 'TARJETA';
const texto_formateado = metodo_pago.toLowerCase(); 

// Sintaxis de switch

switch(texto_formateado) {
    case 'tarjeta': 
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque': 
        console.log('Pagaste con Cheque. Revisaremos los fondos primero');
        break;
    case 'efectivo': 
        console.log('Has pagado con efectivo');
        break;
    default:
        console.log('Aún no has pagado');
        break;
}