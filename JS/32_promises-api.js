// Notification API 


// Document hará referencia a todo el HTML y con el podemos elejir los elementos que queramos del mismo. 

const boton = document.querySelector('#boton');

boton.addEventListener('click', function() {
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es... ${resultado}`))
});

// if (Notification.permission == 'granted') {
//     new Notification('Esta esa una notificacion', {
//     icon: 'images/Xardimods.jpg',
//     body: 'Codigo aleatorio'
//     })
// }


if (Notification.permission == 'granted') {
    new Notification('¡Goku te mandó un mensaje!', {
        icon: 'https://pbs.twimg.com/media/Fxlvy5FXsAE3qTe.jpg',
        body: 'Te voy a matar hijo de puta'
    })
}