import React from 'react'
import './style.scss';
import Logo from '../../assets/graphics/logo.png'
const Header = () => {

    return(
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logoIMG" src={Logo} alt="Logo not found"/>
                </div>
            </div>
        </header>
    )
}

export default Header;
