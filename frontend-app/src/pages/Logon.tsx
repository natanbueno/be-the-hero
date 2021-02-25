import { useState } from 'react';

import logoImg   from '../assets/logo.svg';
import heroesImg from '../assets/heroes.png';
import styles    from '../styles/pages/Logon.module.css';


export default function Logon() {
  const [id, setId] = useState('');

  function fazerLogin() {
  
    console.log(id);

  }


  return(
      

      <div className={styles.logonContainer}>
         
          <section className={styles.form}>
            <img src={ logoImg}  alt="Be The Hero"/>

            <form>
              <h1>Faça seu Logon</h1>
              
              <input
                placeholder= "Sua Identificação"
                value      = {id}
                onChange   = {e => setId(e.target.value)}
              ></input>
              
              <button 
                className="button" 
                onClick    = {
                  e =>  {
                    e.preventDefault(); 
                    fazerLogin()
                  }
              }>
                Entrar
              </button>

              <span>Não tenho cadastro</span>
            </form>

          </section>    

          <img src={ heroesImg } alt="Heroes"/>
      </div>
  )  
}