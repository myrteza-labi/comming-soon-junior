import React from 'react'; 
import './SubmitBox.css'; 
import Input from './Input'; 
import SubmitButton from './SubmitButton'; 

function SubmitBox(props){
    return (
        <div className="SubmitBox" >
            <Input/>
            <SubmitButton/>
        </div>
    )
}

export default SubmitBox; 