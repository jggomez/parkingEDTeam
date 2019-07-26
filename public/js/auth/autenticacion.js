class Autenticacion {

  async autEmailPass(email, password) {
    try {
      // TODO

    } catch (error) {
      console.error(error)
      Materialize.toast(error.message, 4000)
    }
  }

  async crearCuentaEmailPass(email, password, nombres) {
    try {
      // TODO

      const configuracion = {
        url: 'https://IDPROYECTO.firebaseapp.com/'
      }

      // TODO

    } catch (error) {
      console.error(error)
      Materialize.toast(error.message, 4000)
    }
  }

  async authCuentaGoogle() {
    try {
      // TODO
    } catch (error) {
      console.error(error)
      Materialize.toast(`Error al autenticarse con google: ${error} `, 4000)
    }
  }

  async authCuentaFacebook() {
    try {
      // TODO
    } catch (error) {
      console.error(error)
      Materialize.toast(`Error al autenticarse con google: ${error} `, 4000)
    }
  }

  authTwitter() {
    // TODO: Crear auth con twitter
  }
}
