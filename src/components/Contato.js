import React from "react";

const Contato = ()=>{
    return(
        <div>
            <h2 id='contato' className='contato__title'>Contato</h2>
            <div className='contato__block'>
                <p>Digite seu E-mail para receber novas informações</p>
                <input type='text' name='email' placeholder="Digite aqui"></input>
            </div>
        </div>
    )
}

export default Contato;