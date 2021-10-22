import React from 'react'; 
import './SubmitButton.css'; 

function SubmitButton(props){
    return (
        <button className="SubmitButton" onClick={props.onClick}>Notify Me</button>
    )
}

export default SubmitButton; 