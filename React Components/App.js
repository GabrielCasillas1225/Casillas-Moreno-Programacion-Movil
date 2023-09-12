import React, { useState } from 'react';
import './App.css';

function App() {


  return (
    <div className="App">

      {/*<h1>Formulario React</h1>*/}

      <form>

      <div className='supercontainer'>

        <div> {/*prueba container*/}
          <label className='nombredis' htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"

          />
        </div>
        <br></br>
        <div>
          <label className='apellidosdis' htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"

          />
        </div>
        <br></br>
        <div>
          <label className='correodis' htmlFor="correoElectronico">Correo Electrónico:</label>
          <input
            type="email"
            id="correoElectronico"
            name="correoElectronico"
          />
        </div>
      </div>
        <br></br>
        <div className='botones'>
          <button className='buttonenviardis' type="submit">Enviar</button>
          <button className='buttoncancelardis' type="button" >Cancelar</button>

        </div> {/*cierra div app*/}

      </form>
        <div>
          <h2 className='colorh2'>Usuarios Guardados:</h2>
          <table className='tablacompleta'>
            <thead>
              <tr className='tabla'>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Correo Electrónico</th>
              </tr>
            </thead>
            <tbody>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

            </tbody>
          </table>
        </div>

    </div>
  );
}

export default App;
