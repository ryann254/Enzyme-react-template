import React from 'react'
import './styles.scss'

const Header = () => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logoImg" src="assets/classylogo.png" alt="Logo"/>
                </div>
            </div>
        </header>
    )
}

export default Header;