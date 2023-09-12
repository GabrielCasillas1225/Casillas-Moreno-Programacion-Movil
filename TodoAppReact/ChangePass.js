import logo1 from './logo1.png';
import './ChangePass.css';

function ChangePass() {
    return (
      <>

<div className='App'>

<div className="contenedor">

<img src={logo1} className="applogo" alt="logo" />

</div>
<div className="changepasstitulo">

<h1>Reset Password</h1>

</div>


      <br></br>
      <br></br>

      <div className="contenedorcontrasenia">



<label className='contraseniadis' htmlFor="contrasenia">Contraseña:</label>
<input
      type="text"
      id="contrasenia"
      name="contrasenia"
      />

    </div>

    <br></br>



      <div className="nuevacontrasenia">

      <label className='nuevacontraseniadis' htmlFor="nuevacontrasenia">Nueva Contraseña:</label>
<input
      type="text"
      id="nuevacontrasenia"
      name="nuevacontrasenia"
      />
        
      </div>

      <br></br>


      <div className='confirmarcontrasenia'>

      <label className='confirmarcontraseniadis' htmlFor="confirmarcontrasenia">Confirmar contraseña:</label>
<input
      type="text"
      id="confirmarcontrasenia"
      name="confirmarcontrasenia"
      />

      </div>

      <br></br>
      



   
      <br></br>
      <br></br>

<div className="botones">
    
    <button className="botonresetdis" type="submit">Reset</button>
    

  </div>

 


  </div>


      </>
    );
  }
  
  export default ChangePass;
