import React from 'react'; 
import './Footer.css'; 
import Icon from './Icon'; 
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import instagram from '../images/icon-instagram.svg';


function Footer(props){
    return (
        <section className="Footer">
            <div className="iconsContainer" >
                <Icon src={facebook} alt={"logo facebook"}/>
                <Icon src={twitter} alt={"logo twitter"}/>
                <Icon src={instagram} alt={"logo instagram"}/>
            </div>
            <p className="copyright" >Copyright Ping. All rights reserved.</p>
        </section>
    )
}

export default Footer; 