import React, {Component} from 'react';
// import { Card } from '@material-ui/core';
import { TextField,Button, Card } from '@material-ui/core'
import {connect} from 'react-redux';
import Login from './Login';
import { INPUT_NAME, INPUT_LAST_NAME, INPUT_EMAIL, INPUT_PASSWORD, INPUT_CONFIRM_PASSWORD, INPUT_CONTACT_NUMBER, REGISTER_DATA } from '../constants/actionTypes';
import { toast } from "react-toastify";
const mapDispatchToProps=dispatch=>({
    inputName:(value)=>dispatch({
        type:INPUT_NAME,payload:value
    }),
    inputLastName:(value)=>dispatch({
        type:INPUT_LAST_NAME, payload:value
    }),
    inputEmail:(value)=>dispatch({
        type:INPUT_EMAIL, payload:value
    }),
    inputContactNumber:(value)=>dispatch({
        type:INPUT_CONTACT_NUMBER, payload:value
    }),
    inputPassword:(value)=>dispatch({
        type:INPUT_PASSWORD, payload:value
    }),
    inputPhoneNumber:(value)=>dispatch({
        type:INPUT_CONTACT_NUMBER, payload:value
    }),
    Register:(data)=>dispatch({
        type:REGISTER_DATA, payload:data
    })

})
function mapStateToProps(state){
    console.log("Register Props",state.Register)
    return{
        name:state.Register.name,
        lastName:state.Register.lastName,
        email:state.Register.email,
        phoneNumber:state.Register.phoneNumber,
        password:state.Register.password,
    }
}
class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            nameError:"",
            lastNameError:"",
            phoneError:"",
            emailError:"",
            passwordError:"",
            checkEmail:true,
            checkNumber:true,
            checkName:true,
            checklastName:true,
            checkPassword:true
        }
    }


    loginClick() {
        this.props.history.push('login')
    }
    handleNameChange(event) {
        var a = event.target.value
        if(a.length === 0) {
            this.setState({
                nameError:"required",
                checkName:false
            })
        }
        else if(a.length <4) {
            this.setState({
                nameError:"Minimum 4 characters required",
                checkName:false
            })
        }
        else if(a.length >=10) {
            this.setState({
                nameError:"Minimum 8 characters required",
                checkName:false
            })
        }
        else {
            this.setState({
                nameError:"",
                checkName:true
            })
        }
        this.props.inputName(a)
        }
     
        // console.log("Input Name",a)
    
    handleLastNameChange(event) {
        var b = event.target.value
        if(b.length === 0) {
            this.setState({
                lastNameError:"required",
                checklastName:false

            })
        }
        else if(b.length >10) {
            this.setState({
                lastNameError:"Minimum 8 characters required",
                checklastName:false

            })
        }
        else {
            this.setState({
                lastNameError:"",
                checklastName:true
            })
        }
        this.props.inputLastName(b)
    }
    handleEmailChange(event) {
        var c = event.target.value
        const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailValidate = regexp.test(c)
        if (emailValidate === false) {
            this.setState({
                emailError:"PLease write a validate email address",
                checkEmail:false
            })
        }
        else {
            this.setState({
                emailError:"",
                checkEmail:true
            })
        }
        this.props.inputEmail(c)
    }

    handlePasswordChange(event) {
        var d = event.target.value
        if(d.length === 0) {
            this.setState({
                passwordError:"required",
                checkPassword:false
            })
        }
        else if(d.length <4) {
            this.setState({
                passwordError:"Password should not be less than 4 characters",
                checkPassword:false
            })
        }
        else if(d.length >8) {
            this.setState({
                passwordError:"Password should not be more than 8 characters",
                checkPassword:false
            })
        }
        else {
            this.setState({
                passwordError:"",
                checkPassword:true
            })
        }
        this.props.inputPassword(d)
    }
    handleInputContactChange(event) {
        var e = event.target.value
        if(e.length===0){
            this.setState({
                phoneError:"required",
                checkNumber:false
                
            })}
            else if(e.length<10){
                this.setState({
                    phoneError:" Only 10 Nos are required",
                    checkNumber:false

                })}
            else if(e.length>10){
                this.setState({
                    phoneError:"Min 10 Nos are required",
                    checkNumber:false
                })
            }
            else if(isNaN(e))
            {
                this.setState({
                    phoneError:"Enter Valid Nos Only",
                    checkNumber:false
                })
            }
            else if((e.charAt(0)!=9) && (e.charAt(0)!=8) && (e.charAt(0)!=7)){
                this.setState({
                    phoneError:"Numbers should start with 9,8,7",
                    checkNumber:false
                })
            }
            else{
                this.setState({
                    phoneError:"",
                    checkNumber:true
                })
            }
            this.props.inputPhoneNumber(e)
    }
    loginPageRedirect () {
        if (this.props.name!=="" && this.props.lastName!=="" && this.props.email!=="" && this.props.phoneNumber!=="" && this.props.password!=="" && this.state.checkNumber && this.state.checkEmail && this.state.checkName  && this.state.checklastName && this.state.checkPassword)
        {
            var data={
                name:this.props.name,
                lastName:this.props.lastName,
                email:this.props.email,
                phoneNumber:this.props.phoneNumber,
                password:this.props.password,
            }
        
        console.log("rrrr=>>",data);
        alert('Register Successfull')
        this.props.history.push('login')
        this.props.Register(data)
        
    }
    else {
        alert("PLease Validate the Register Fields")
    }
}

    render() {
        return (
            <div className="outsideCard">
            <div className="setCard"> 
                <Card>
                    <div className="headerTag">
                    <h2>Create Your Account</h2>
                    </div>
                  
                        <div className="textFields">
                    <TextField
                        id="standard-name"
                        label="Name"
                        input="Name"
                        variant="outlined"
                        type="name"
                        margin="normal"
                        value={this.props.name}
                        onChange={(event)=>{this.handleNameChange(event)}}
                        error={this.state.nameError}
                        helperText={this.state.nameError}
                    />
                       <TextField
                        id="standard-name"
                        label="Last Name"
                        // value={this.props.name}
                        input="Last Name"
                        variant="outlined"
                        type="name"
                        margin="normal"
                        value={this.props.lastName}
                        onChange={(event)=>{this.handleLastNameChange(event)}}
                        error={this.state.lastNameError}
                        helperText={this.state.lastNameError}
                    />
                    </div>
                    <div className="textFields">
                    <TextField
                        id="standard-name"
                        label="Email"
                        input="Email"
                        variant="outlined"
                        type="name"
                        margin="normal"
                        value={this.props.email}
                        onChange={(event)=>{this.handleEmailChange(event)}}
                        error={this.state.emailError}
                        helperText={this.state.emailError}
                    />
                   
                    <TextField
                        id="standard-name"
                        label="Contact Number"
                        input="Contact Number"
                        variant="outlined"
                        type="name"
                        margin="normal"
                        value={this.props.phoneNumber}
                        onChange={(event)=>{this.handleInputContactChange(event)}}
                        error={this.state.phoneError}
                        helperText={this.state.phoneError}
                    />
                    </div>
                    <div className="textFields">
                    <TextField
                        id="standard-name"
                        label="Password"
                        input="password"
                        variant="outlined"
                        type="password"
                        margin="normal"
                        // value={this.props.password}
                        onChange={(event)=>{this.handlePasswordChange(event)}}
                        error={this.state.passwordError}
                        helperText={this.state.passwordError}

                    />
                    </div>
                  <div className="buttons">
                    <div>
                <Button color="primary" onClick={()=>this.loginClick()}>Sign in Instead</Button>
                </div>
                <div className="nextButton">
                <Button color="primary" variant="contained" onClick={()=>this.loginPageRedirect()}>Next</Button>
                </div>
                </div>
                </Card>
                </div>
                {/* <Login x= {this.state.name} /> */}
            </div>
          
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);