import React from 'react'; 
import './Input.css'; 

function Input(props){
    return (
        <div className="Input" >
            <input  className={props.inputClssNme} 
                    type="email" 
                    placeholder="Your email adress..." 
                    onChange={props.onChange}/>
            <p className={props.errTextClssNme} >Please proide a valid email address</p>
        </div>
    )
}

export default Input; 