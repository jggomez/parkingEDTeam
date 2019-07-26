class Autenticacion {

  async autEmailPass(email, password) {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (result.user.emailVerified) {
        return result;
      }

      await firebase.auth().signOut();
      return null;
    } catch (error) {
      console.error(error)
      Materialize.toast(error.message, 4000)
    }
  }

  async crearCuentaEmailPass(email, password, nombres) {
    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await result.user.updateProfile({
        displayName : nombres
      });

      const configuracion = {
        url: 'https://parkingedteam.firebaseapp.com/'
      }

      await result.user.sendEmailVerification(configuracion);

      await firebase.auth().signOut();

      return true;

    } catch (error) {
      console.error(error)
      Materialize.toast(error.message, 4000)
    }
  }

  async authCuentaGoogle() {
    try {
      
      const provider = new firebase.auth.GoogleAuthProvider();

      const result = await firebase.auth().signInWithPopup(provider);

      if(result){
        return result.user;
      }

      return undefined;

    } catch (error) {
      console.error(error)
      Materialize.toast(`Error al autenticarse con google: ${error} `, 4000)
    }
  }

  async authCuentaFacebook() {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();

      const result = await firebase.auth().signInWithPopup(provider);

      if(result){
        return result.user;
      }

      return undefined;
    } catch (error) {
      console.error(error)
      Materialize.toast(`Error al autenticarse con google: ${error} `, 4000)
    }
  }

  authTwitter() {
    // TODO: Crear auth con twitter
  }
}
