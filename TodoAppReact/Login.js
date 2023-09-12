import logo1 from './logo1.png';
import './Login.css';

function Login() {
  return (
    <div className="App">
      <div className="contenedor">

      <img src={logo1} className="applogo" alt="logo" />
      
      </div>
      <div className="logintitulo">

      <h1>Login</h1>

      </div>

      
            <br></br>
            <br></br>
            <div className="contenedornombre">

            <label className='nombreusuariodis' htmlFor="nombreusuario">Nombre Usuario:</label>
      <input
            type="text"
            id="nombreusuario"
            name="nombreusuario"
            />
              
            </div>



          <div className="contenedorcontrasenia">



      <label className='contraseniadis' htmlFor="contrasenia">Contraseña:</label>
      <input
            type="text"
            id="contrasenia"
            name="contrasenia"
            />

          </div>
            <br></br>
            <br></br>

      <div className="botones">
          
          <button className="botonlogindis" type="submit">Login</button>
          

        </div>
        <p className='recuperarcontrasenia'>¿Recuperar contraseña?</p>

        

    </div>
  );
}

export default Login;
