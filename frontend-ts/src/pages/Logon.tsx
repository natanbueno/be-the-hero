import { useState } from 'react';

import logoImg   from '../assets/logo.svg';
import heroesImg from '../assets/heroes.png';
import styles    from '../styles/pages/Logon.module.css';


export default function Logon() {
  const [id, setId] = useState('');

  const fazerLogin = (event: React.FormEvent<HTMLFormElement>) =>  {
    
    event.preventDefault();
    console.log(id);

  }

  return(
      
      <div className={styles.logonContainer}>
         
          <section className={styles.form}>
            <img src={ logoImg}  alt="Be The Hero"/>

            <form onSubmit={fazerLogin}>

              <h1>Faça seu Logon</h1>
              
              <input
                placeholder= "Sua Identificação"
                value      = {id}
                onChange   = {e => setId(e.target.value)}
              ></input>
              
              <button className="button" type="submit">Entrar</button>

              <span>Não tenho cadastro</span>
              
            </form>

          </section>    

          <img src={ heroesImg } alt="Heroes"/>
      </div>
  )  
}