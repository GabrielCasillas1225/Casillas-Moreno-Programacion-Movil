import logo1 from './logo1.png';
import './Forgot.css'

function ForgotPass() {
    return (
      <>

  <div className="App">
      <div className="contenedor">

      <img src={logo1} className="applogo" alt="logo" />
      
      </div>
      <div className="forgotpasstitulo">

      <h1>Forgot Password</h1>

      </div>

      
            <br></br>
            <br></br>
            <div className="contenedornombre">

            <label className='emaildis' htmlFor="email">Email:</label>
      <input
            type="text"
            id="email"
            name="email"
            />
              
            </div>

            <br></br>
            <br></br>

      <div className="botones">
          
          <button className="enviardis" type="submit">Enviar</button>
          

        </div>

        <p className='login'>Login</p>

        

    </div>









      </>
    );
  }
  
  export default ForgotPass;
