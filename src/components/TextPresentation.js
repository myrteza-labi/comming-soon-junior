import React from 'react'; 
import './TextPresentation.css'; 

function TextPresentation(props){
    return (
        <div className="TextPresentation" >
            <h2 className="textPresentationTitle" >We are launching  
                <span className="titleImportantWord" > soon! </span>
            </h2>
            <p className="textPresentationParagraph" >Subscribe and get notified</p>
        </div>
    )
}

export default TextPresentation; 