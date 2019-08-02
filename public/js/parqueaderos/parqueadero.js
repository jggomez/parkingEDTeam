class Parqueadero {

  constructor() {
    this.db = firebase.firestore();

  }

  async crearEntrada(
    uid,
    idParqueadero,
    nombreCliente,
    placa,
    celularCliente,
    observacion,
    imagenLink) {
    try {
      const refDoc = await this.db
        .collection('entradas')
        .add({
          uid: uid,
          idparqueadero: idParqueadero,
          nombrecliente: nombreCliente,
          celularcliente: celularCliente,
          placa: placa,
          observacion: observacion,
          imagenlink: imagenLink,
          fecha: firebase.firestore.FieldValue.serverTimestamp()
        });

      await this.db
        .collection('parqueaderos')
        .doc(idParqueadero)
        .update({
          "libre": false
        });

      return refDoc.id;

    } catch (error) {
      console.error(`Error creando la entrada => ${error}`)
    }
  }

  async crearSalida(
    idEntrada,
    fechaSalida,
    costo,
    idParqueadero) {
    try {

      await this.db
        .collection('entradas')
        .doc(idEntrada)
        .set({
          salida: {
            fechaSalida: fechaSalida,
            costo: costo
          }
        });

      await this.db
        .collection('parqueaderos')
        .doc(idParqueadero)
        .update({
          "libre": true
        });

      return true;

    } catch (error) {
      console.error(`Error creando la salida => ${error}`)
    }
  }

  async consultarTodosParquedaderos(fntCallBack) {
    try {
      await this.db
        .collection('parqueaderos')
        .orderBy('nombre', 'asc')
        .onSnapshot(parqueaderos => {

          $('#parqueaderos').empty();

          parqueaderos.forEach(async parqueadero => {
            const parqueaderodata = parqueadero.data();

            const entradasParqueadero = await this.db
              .collection('entradas')
              .where('idparqueadero', '==', parqueadero.id)
              .orderBy('fecha', 'desc')
              .limit(1)
              .get();

            if (entradasParqueadero.empty || parqueaderodata.libre === true) {
              fntCallBack({
                nombreParqueadero: parqueaderodata.nombre,
                libre: parqueaderodata.libre,
                id: parqueadero.id
              });
            } else {
              const entrada = entradasParqueadero.docs[0].data();
              console.log("entrada")
              console.log(entrada)
              fntCallBack({
                nombreParqueadero: parqueaderodata.nombre,
                libre: parqueaderodata.libre,
                id: parqueadero.id,
                nombreCliente: entrada.nombrecliente,
                celularCliente: entrada.celularcliente,
                placa: entrada.placa,
                observacion: entrada.observacion,
                imagenLink: entrada.imagenlink,
                fecha: entrada.fecha,
                idEntrada: entradasParqueadero.docs[0].id
              })
            }

          })


        });

    } catch (error) {
      console.error(`Error consultando todos los parqueaderos => ${error}`)
    }
  }

  async consultarParqueaderoLibres(fntCallBack) {
    try {
      const parqueaderos = await this.db
        .collection('parqueaderos')
        .where('libre', '==', true)
        .orderBy('nombre', 'asc')
        .get();

      const lst = [];

      parqueaderos.forEach(parqueadero => {
        const parqueaderodata = parqueadero.data();
        lst.push({
          nombreParqueadero: parqueaderodata.nombre,
          libre: parqueaderodata.libre,
          id: parqueadero.id
        })
      });

      return lst;

    } catch (error) {
      console.error(`Error consultando todos los parqueaderos libres => ${error}`)
    }
  }

  subirImagenPost(file, uid) {
    // TODO
  }


}
