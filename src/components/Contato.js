import React from "react";
import {SiInstagram} from 'react-icons/si';
import {MdOutlineMail} from 'react-icons/md';

const Contato = ()=>{
    return(
        <div>
            <h2 id='contato' className='contato__title'>Contato</h2>
            <div className='contato__block'>
                <p>Digite seu E-mail para receber novas informações</p>
                <input type='text' name='email' placeholder="Digite aqui"></input>
            </div>
            <div className="contato__midias">
                <a href="https://www.instagram.com" target='blank'><SiInstagram className="contato__midias--insta"/>Instagram</a>
                <MdOutlineMail className="contato__midias--email"/><p>contato-mountainST@gmail.com.br</p>
            </div>
            
        </div>
    )
}

export default Contato;