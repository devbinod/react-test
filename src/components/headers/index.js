import React from 'react'
import './style.scss';
import Logo from '../../assets/graphics/logo.png'
const Header = () => {

    return(
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="Logo not found"/>
                </div>
            </div>
        </header>
    )
}

export default Header;
