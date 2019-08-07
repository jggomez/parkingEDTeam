importScripts('https://www.gstatic.com/firebasejs/6.3.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

firebase.initializeApp({
    projectId: "parkingedteam",
    messagingSenderId: "63859531897"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {

    const tituloNotificacion = "Parqueadero Disponible";

    const opcionesNotificacion = {
        body: `El parqueadero ${payload.data.nombreparqueadero} esta disponible`,
        icon: 'icons/icon.png',
        image: 'imagenes/logo.png',
        actions: [
            {
                title: 'Ver Más',
                action: 'ver',
                icon: 'icons/icon.png'
            }
        ]
    }

    return self.registration.showNotification(
        tituloNotificacion,
        opcionesNotificacion
    )

});

self.addEventListener('notificationsclick', event => {
    if (event.action == 'ver') {
        // abrir una ventana para ver el parqueadero disponible
    }
});