import Image from '..public/logo.svg'
import RootLayout from './layout'
import Page from './page'
export default function Home() {
  return (
    <main className="form">
 
  
    <form className="form-container">
      <legend>Ingresa con tu email y contraseña</legend>

    <fieldset>
 
      <div className="placeholder">
      <input type="name" className="inputname" name="name" placeholder="Nombre" required /> 
      <input type="lastname" className="inputlastname" name="lastname" placeholder="Apellido" required />
      </div>
      
      <div className="placeholder">
      <input type="email" className="inputemail" name="email" placeholder="Email" required />
      </div>
      <div className="placeholder">
      <input type="password" className="inputpassword" name="password" placeholder="Contraseña" required />
      </div>
      <div className="placeholder">
      <input type="repeatpassword" className="inputrepeatpassword" name="repeatpassword" placeholder="Repetir Contraseña" required />
      </div>
      
      <div>
      <input type="submit" className="submit"  value="Iniciar Sesión" name="buttonsignup" id="submit" />
      </div>

      </fieldset>

  </form>

</main>
  )
}
