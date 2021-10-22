import React from 'react'; 
import './Icon.css'; 



function Icon(props){
    return (
        <img className="Icon" src={props.src} alt={props.alt}/>
    )
}

export default Icon; 