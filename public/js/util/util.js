class Utilidad {

    static obtenerFecha(timeStamp) {
        const d = new Date(timeStamp)
        let month = '' + (d.getMonth() + 1)
        let day = '' + d.getDate()
        let year = d.getFullYear()

        if (month.length < 2) month = '0' + month
        if (day.length < 2) day = '0' + day

        return [day, month, year].join('/')
    }

    static obtenerFechaHoraActual() {
        let d = new Date();
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        let year = d.getFullYear();
        let hora = d.getHours();
        let minutos = d.getMinutes();

        if (month.length < 2) month = '0' + month
        if (day.length < 2) day = '0' + day
        if (hora.length < 2) hora = '0' + hora
        if (minutos.length < 2) minutos = '0' + minutos

        return [day, month, year].join('/').concat(` ${hora}:${minutos}`)
    }

    static obtenerTemplateParqueaderoVacio(
        nombreParqueadero,
        idParqueadero
    ) {
        return `<article class="parqueadero" data-id=${idParqueadero}>
      <div class="parqueadero-titulo">
          <h5>${nombreParqueadero}</h5>
      </div>
      <div class="parqueadero-estado">
          <h5>Libre</h5>
      </div>
      <div class="parqueadero-video">
          <img id="imgVideo" src='https://firebasestorage.googleapis.com/v0/b/parking-f75e3.appspot.com/o/imgapp%2Ffree.png?alt=media&token=81d25fa8-67ec-497b-83d2-f9de73f730e1' class="parqueadero-imagen-video" 
            alt="Imagen Video">
      </div>
      <div class="parqueadero-videolink">
          NO ASIGNADO
      </div>
      <div class="parqueadero-descripcion">
          <p>
            <a id="btnEntrada" data-id=${idParqueadero} class="modal-trigger waves-effect waves-light btn btnEntrada">Crear Entrada</a>
          </p>
      </div>
      <div class="parqueadero-footer container">     
      </div>
  </article>`
    }

    static obtenerParqueaderoTemplate(
        nombreParqueadero,
        nombreCliente,
        celularCliente,
        placa,
        observacion,
        imagenLink,
        fecha,
        idParqueadero,
        idEntrada
    ) {
        return `<article class="parqueadero" data-id=${idParqueadero}>
            <div class="parqueadero-ocupado-titulo">
                <h5>${nombreParqueadero}</h5>
            </div>
            <div class="parqueadero-calificacion">
                <h5>${nombreCliente}</h5>
            </div>
            <div class="parqueadero-video">                
                <img id="imgVideo" src='${imagenLink == null ? "https://firebasestorage.googleapis.com/v0/b/parking-f75e3.appspot.com/o/imgapp%2Fbusy.png?alt=media&token=c798947b-b1b7-4a0b-ab4a-d285f8cb1669" : imagenLink}' class="parqueadero-imagen-video" 
                    alt="Imagen Video">     
            </div>
            <div class="parqueadero-ocupado-placa">
                <h6>${placa}</h6>                          
            </div>
            <div class="parqueadero-descripcion-salida">
                <p>${observacion}</p>
                <a id="btnSalida" data-id=${idParqueadero} data-identrada=${idEntrada} class="modal-trigger waves-effect waves-light btn btnSalida">Crear Salida</a>
            </div>
            <div class="parqueadero-ocupado-footer container">
                <div class="row">
                    <div class="col m6">
                        Fecha: ${fecha}
                    </div>
                    <div class="col m6">
                        Celular: ${celularCliente}
                    </div>        
                </div>
            </div>
        </article>`
    }

}
