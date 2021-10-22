import React from 'react'; 
import './SubmitBox.css'; 
import Input from './Input'; 
import SubmitButton from './SubmitButton'; 

class SubmitBox extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            inputValue : "", 
            errTextClssNme : "errorTextHidden",
            inputClssNme: "inputEmail",
        }
        this.handlClick = this.handlClick.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
        this.setNormal = this.setNormal.bind(this); 
        this.setError = this.setError.bind(this); 
        this.emailPaternIsGood = this.emailPaternIsGood.bind(this); 



    }

    handleChange(e){
        let value = e.target.value; 
        this.setState({
            inputValue : value, 
        })
    }

    handlClick(){
        if (this.emailPaternIsGood() === true){
            this.setNormal(); 

        } else {
            this.setError(); 
        }
    }

    emailPaternIsGood(){
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.inputValue.match(regex)){
            return true
        } 
        else {
            return false
        }
    }

    setError(){
        this.setState({
            errTextClssNme : "errorTextDisplay", 
            inputClssNme: "inputEmail inputEmailError",
        })
    }

    setNormal(){
        this.setState({
            errTextClssNme : "errorTextHidden", 
            inputClssNme: "inputEmail",
        })
    }

    render(){
        return (
            <div className="SubmitBox" >

                <Input  errTextClssNme={this.state.errTextClssNme} 
                        inputClssNme={this.state.inputClssNme}
                        onChange={this.handleChange}/>

                <SubmitButton onClick={this.handlClick}/>
            </div>
        )
    }
    
}

export default SubmitBox;  
