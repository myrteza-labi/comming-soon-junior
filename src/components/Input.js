import React from 'react'; 
import './Input.css'; 

function Input(props){
    return (
        <div className="Input" >
            <input className="inputEmail inputEmailError" type="email" placeholder="Your email adress..." />
            <p className="errorText" >Please proide a valid email address</p>
        </div>
    )
}

export default Input; 