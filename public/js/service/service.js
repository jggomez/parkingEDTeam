$(() => {

    // Registrar el service worker
    navigator.serviceWorker
        .register('notificacionesparkingedteam-sw.js')
        .then(registroSW => {
            console.log("SW Registrado");
            firebase.messaging().useServiceWorker(registroSW);
        }).catch(error => console.error(`Error registrado el SW => ${error}`));

    const messaging = firebase.messaging();

    // credencial
    messaging.usePublicVapidKey(
        'BIzeNnYRzQVxEFt2UCrBufdNxsEyOlFmzLprB6RcSYhIJHzpE2Onlx20eej89MNnfEd8_XQS4sQ7bZw04EfPZYM'
    )

    messaging
        .requestPermission()
        .then(() => {
            console.log("permiso otorgado");
            return messaging.getToken();
        })
        .then(token => {
            console.log(token);
            const db = firebase.firestore();
            db.collection('tokens')
                .doc(token)
                .set({
                    token: token
                })
                .catch(error => console.error(error))
        }).catch(error => console.error(`No se dio el permiso => ${error}`))

    messaging.onMessage(payload => {
        Materialize.toast(
            `Ya hay un parqueadero disponible => ${payload.data.nombreparqueadero}`,
            6000
        )
    })

    messaging.onTokenRefresh(() => {
        messaging.getToken()
            .then(token => {
                // TODO: registrarlo en firestore
            })
    })

});