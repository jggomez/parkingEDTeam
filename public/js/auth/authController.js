$(() => {
  const objAuth = new Autenticacion()

  $('#btnRegistroEmail').click(async () => {
    const nombres = $('#nombreContactoReg').val()
    const email = $('#emailContactoReg').val()
    const password = $('#passwordReg').val()
    await objAuth.crearCuentaEmailPass(email, password, nombres)
    Materialize.toast(
      `Bienvenido ${nombres}, debes realizar el proceso de verificación`,
      4000
    )
    $('.modal').modal('close')
  })

  $('#btnInicioEmail').click(async () => {
    const email = $('#emailSesion').val()
    const password = $('#passwordSesion').val()
    const resp = await objAuth.autEmailPass(email, password);
    if (resp) {
      $('#avatar').attr('src', 'imagenes/usuario_auth.png')
      Materialize.toast(`Bienvenido ${result.user.displayName}`, 5000)
    } else {
      Materialize.toast(
        `Por favor realiza la verificación de la cuenta`,
        5000
      );
    }
    $('.modal').modal('close');
  })

  $('#authGoogle').click(async () => {
    const user = await objAuth.authCuentaGoogle();
    $('#avatar').attr('src', user.photoURL)
    $('.modal').modal('close')
    Materialize.toast(`Bienvenido ${user.displayName} !! `, 4000)
  })

  $('#authFB').click(async () => {
    const user = await objAuth.authCuentaFacebook();
    $('#avatar').attr('src', user.photoURL)
    $('.modal').modal('close')
    Materialize.toast(`Bienvenido ${user.displayName} !! `, 4000)
  })

  // $("#authTwitter").click(() => objAuth.authCuentaFacebook());

  $('#avatar').click(async () => {
    try {
      // TODO signOut
      $('#avatar').attr('src', 'imagenes/usuario.png');
      Materialize.toast(`SignOut correcto`, 4000);

    } catch (error) {
      console.error(error);
      Materialize.toast(error.message, 4000);
    }
  })

  // Evento boton inicio sesion
  $('#btnInicioSesion').click(async () => {
    try {
      const user = null; // TODO current user
      if (user) {
        $('#btnInicioSesion').text('Iniciar Sesión');
        await firebase.auth().signOut();
        $('#avatar').attr('src', 'imagenes/usuario.png');
        Materialize.toast(`SignOut Correcto`, 4000);
      }
    } catch (error) {
      console.error(error)
      Materialize.toast(error.message, 4000)
    }

    $('#emailSesion').val('')
    $('#passwordSesion').val('')
    $('#modalSesion').modal('open')
  })

  // Firebase observador del cambio de estado de auth
  /*//TODO Cambio de estado(user => {
    if (user) {
      $('#btnInicioSesion').text('Salir')
      if (user.photoURL) {
        $('#avatar').attr('src', user.photoURL)
      } else {
        $('#avatar').attr('src', 'imagenes/usuario_auth.png')
      }
    } else {
      $('#btnInicioSesion').text('Iniciar Sesión')
      $('#avatar').attr('src', 'imagenes/usuario.png')
    }
  })*/

  $('#btnRegistrarse').click(() => {
    $('#modalSesion').modal('close')
    $('#modalRegistro').modal('open')
  })

  $('#btnIniciarSesion').click(() => {
    $('#modalRegistro').modal('close')
    $('#modalSesion').modal('open')
  })
})
