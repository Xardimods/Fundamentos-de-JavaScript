// Metodso de propiedad. 

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`);
    }, 
    pausar: function () {
        console.log('Pausando...');
    },
    crear_playlist: function (nombre) {
        console.log(`Creando la Playlist: ${nombre}`);
    },
    reproducir_playlist: function (nombre) {
        console.log(`Reproduciendo la Playlist: ${nombre}`);
    }
}; // Es una funcion dentro de un objeto 


// Añadir propiedades

reproductor.borrar_cancion = function(id) {
    console.log(`Eliminando la canción: ${id}`);
}


console.log(reproductor);

reproductor.reproducir(3840); // llamas a la funcion dentro del objeto, donde te dirá el console. Es una funcion que funciona de metodo. 
reproductor.pausar();
reproductor.borrar_cancion(20);
reproductor.crear_playlist('Mi Lista');
reproductor.reproducir_playlist('Mi Lista');