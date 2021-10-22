import React from 'react'; 
import './MainImage.css'; 
import image from '../images/illustration-dashboard.png'; 

function MainImage(props){
    return (
        <div className="MainImage" >
            <img className="mainImageImg" src={image} alt="render of the futur Ping application" />
        </div>
    )
}

export default MainImage; 