import React from 'react'; 
import './SoonApp.css'; 
import Logo from './Logo'; 
import TextPresentation from './TextPresentation'; 
import SubmitBox from './SubmitBox'; 
import MainImage from './MainImage'; 
import Footer from './Footer'; 

function SoonApp(props){
    return (
        <div className="SoonApp" >
            <Logo/>
            <TextPresentation/>
            <SubmitBox/>
            <MainImage/>
            <Footer/>
        </div>
    )
}

export default SoonApp; 