// Promises. Todas las APIs modernas que se agrefgaron a JavaScript (geolocalización, etc.) utilizan promises. Un promise es un valor que estará disponible ahora, en un futuro, o jamás. Cuando se ejecuta los primises, se pasarán dos valores de forma automática, llamados resolve y reject, que se pasan como parametros de la funcion de Promise. 

const usuario = new Promise ((resolve, reject) => {
    const auth = true; 

    if(auth) {
        resolve('Usuario Autenticado'); // Si la promise se cumple, que ejecute la funcion de resolve. 
    } else {
        reject('No se pudo iniciar sesión'); // Si no, que se ejecute la funcion de reject.
    }
});

// usuario
//     .then(resultado => console.log(resultado))
//     .catch(error => console.log(error));

//then se usa para retornar un valor de exito si la promise es cierta. Lo que se encuentra el resolve se usa en la funcion que se contiene en el metodo then. Con el parametro de resultado, estaremos leyendo el resolve del promise y tambien del reject. 

// Los promises tienen tres valores posibles: pending (la promise no se cumple pero mo se ha rechazado), fulfield (se cumplió el promise), rejected (se rechazó el promise). Estos tres valores son comunes cuando consultas a las APIs

// const miPromesa = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('Promesa resuelta');
//     }, 2000);
//   });

// miPromesa.then(resultado => console.log(resultado))


const auto = new Promise (function (resolve, reject) {
    const modelo = 'Toyota'; 

    if (modelo === 'Nissan') {
        resolve('¡Has elegido el modelo correcto!')
    } else {
        reject('¡Has elegido el modelo equivocado!')
    }
}) 

auto.then(result => console.log(result)).catch(error => console.log(error));