import React from 'react';
import Logo from '../img/mountain.png'

const Header = () =>{
    return(
        <header className='header__menu'>
            <div className='header__menu__logo'>
                <div className='header__menu__logo--move'>
                    <img src={Logo} alt="Logo da marca Mountain" />
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#destaques'>Destaques</a></li>
                    <li><a href='#contato'>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;