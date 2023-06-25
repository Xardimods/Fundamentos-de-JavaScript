function contar_vocales(texto) {
    let contador = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i].toLowerCase())) {
            contador++;
        }
    }

    return contador;
} 

var resultado = contar_vocales("Hola"); 

console.log(resultado);

function saludando (saludo) {
    console.log(`Hola ${saludo}! Espero que estés bien`);
}

saludando('Enyel');

function suma (n1, n2) {
    resultado = n1 + n2;
    console.log(`La suma da ${resultado}`);
}

suma(2, 5);


function area_triangulo (a ,b) {
    resultado = (a * b)/2; 
    console.log(`El área del triangulo es ${resultado}`);
} 

area_triangulo(5, 2);

function area_triangulo (a ,b) {
    resultado = (a * b)/2; 
    return 'El resultado es: ' + resultado;
} 

let respuesta = area_triangulo(5, 2);
console.log(respuesta);


function calc_factorial (numero) {
    if (numero === 0) {
        return 1
    } else { 
        let factorial = 1;
        for (i = 1; i <= numero; i++) {
            factorial *= i;
        } 
        return `El factorial de ${numero} es ` + factorial;
    }
}

respuesta = calc_factorial(4); 

console.log(respuesta);

function res_cuad(a, b, c) {
    var discriminante = b ** 2 - 4 * a * c;
    if (discriminante < 0) {
      return "No hay soluciones reales";
    } else {
      var raizDiscriminante = Math.sqrt(discriminante);
      var x1 = (-b + raizDiscriminante) / (2 * a);
      var x2 = (-b - raizDiscriminante) / (2 * a);
      return [x1, x2];
    }
}

respuesta = res_cuad(3, 45, 89);
  
console.log(respuesta);