class Parqueadero {

  constructor() {
    // TODO
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
      // TODO

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

      // TODO

    } catch (error) {
      console.error(`Error creando la salida => ${error}`)
    }
  }

  async consultarTodosParquedaderos(fntCallBack) {
    try {
      // TODO
    } catch (error) {
      console.error(`Error consultando todos los parqueaderos => ${error}`)
    }
  }

  async consultarParqueaderoLibres(fntCallBack) {
    try {
      // TODO
    } catch (error) {
      console.error(`Error consultando todos los parqueaderos libres => ${error}`)
    }
  }

  subirImagenPost(file, uid) {
    // TODO
  }


}
