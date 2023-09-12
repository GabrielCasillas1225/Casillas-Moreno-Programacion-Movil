import logo1 from './logo1.png';
import './SignUp.css';


function SignUp() {
    return (
      <>

<div className="App">
      <div className="contenedor">

      <img src={logo1} className="applogo" alt="logo" />
      
      </div>
      <div className="signuptitulo">

      <h1>Sign Up</h1>

      </div>

      
            <br></br>
            <br></br>
            <div className="contenedornombre">

            <label className='nombredis' htmlFor="nombre">Nombre:</label>
      <input
            type="text"
            id="nombre"
            name="nombre"
            />

            </div>

            <br></br>


            <div className='contenedoremail'>

            <label className='emaildis' htmlFor="email">Email:</label>
      <input
            type="text"
            id="email"
            name="email"
            />



            </div>

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
            <br></br>

      <div className="botones">
          
          <button className="botonsignupdis" type="submit">Sign Up</button>
          

        </div>

        <p className='or'>Or</p>
        

        <p className='login'>Login</p>

        

    </div>


      </>
    );
  }
  
  export default SignUp;
