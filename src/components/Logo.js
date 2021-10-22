import React from 'react'; 
import './Logo.css'; 
import logo from '../images/logo.svg'; 

function Logo(props){
    return (
        <div className="Logo" >
            <img className="logoImage" src={logo} alt="logo Ping" />
        </div>
    )
}

export default Logo; 