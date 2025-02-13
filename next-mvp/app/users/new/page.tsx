import React from 'react'
import Link from 'next/link'
import SignUpButton from '@/app/components/SignUpButton';


    const NewUserPage = () => {
        return (
            <main> 
                <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="33" height="33" fill="#fff" x="10" y="64" opacity="100%">
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
              </svg>
            </Link>
          
            <div>
                <h1>Register</h1>
            </div>
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
              <SignUpButton />
               </div>
        
              </fieldset>
              </main>
     )
  }


export default NewUserPage