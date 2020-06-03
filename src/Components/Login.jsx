import React, {Component} from 'react';
import {connect} from 'react-redux';
import { TextField,Button, Card } from '@material-ui/core'
import { INPUT_LOGIN_NAME, INPUT_LOGIN_PASSWORD } from '../constants/actionTypes';

const mapDispatchToProps=dispatch=>({
    inputLoginName:(value)=>dispatch({
        type:INPUT_LOGIN_NAME,payload:value
    }),
    inputLoginPassword:(value)=>dispatch({
        type:INPUT_LOGIN_PASSWORD, payload:value
     }),
    })
function mapStateToProps(state){
        console.log("Register Props",state.Register)
        return{
            name:state.Register.name,
            password:state.Register.password,
            loginname:state.Login.loginname,
            loginpassword:state.Login.loginpassword,
            registerData:state.Register.registerData
        }
    }
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            loginNameError:"",
            loginPasswordError:"",
        }
    }


    registerClick (){
        this.props.history.push('register')
    }
    handleLoginNameChange(event) {
        var a = event.target.value
        if(a.length === 0) {
            this.setState({
                loginNameError:"required"
            })
        }
        else if(a.length <4) {
            this.setState({
                loginNameError:"Minimum 4 characters required"
            })
        }
        else if(a.length >10) {
            this.setState({
                loginNameError:"Minimum 10 characters required"
            })
        }
        else {
            this.setState({
                loginNameError:""
            })
        }
        this.props.inputLoginName(a)
        }
        handleLoginPasswordChange(event) {
            var l = event.target.value
            if(l.length === 0) {
                this.setState({
                    loginPasswordError:"required"
                })
            }
            else if(l.length <4) {
                this.setState({
                    loginPasswordError:"Password should not be less than 4 characters"
                })
            }
            else if(l.length >8) {
                this.setState({
                    loginPasswordError:"Password should not be more than 8 characters"
                })
            }
            else {
                this.setState({
                    loginPasswordError:""
                })
            this.props.inputLoginPassword(l)
            }
        }
        LoginHomeClick() {
            if(this.props.loginname === "" && this.props.password === "") {
                alert("PLease Create am accout")
            }
            else if(this.props.loginname !== "" &&  this.props.name === this.props.loginname && this.props.loginpassword !== ""  && this.props.password === this.props.loginpassword)
            {
                console.log("Welcome to Home Page")   
                alert("Login Successfull")
                this.props.history.push('home')

            }
            else {
                console.log('Authentication Filed')              
                alert("Authentication Failed")
            }
        }
    render() {
        console.log("Register from Login",this.props.registerData)
        return(
            <div className="outsideCard">
            <div className="setCard"> 
                <Card>
                <div className="headerTag">
                    <h2>Login Your Account</h2>
                    </div>

                    <div className="loginText">
                    <TextField
                        id="standard-name"
                        label="User Name"
                        input="User Name"
                        variant="outlined"
                        type="name"
                        margin="normal"
                        // value={this.props.name}
                        onChange={(event)=>{this.handleLoginNameChange(event)}}
                        error={this.state.loginNameError}
                        helperText={this.state.loginNameError}
                    />
                    </div>
                    <div className="loginText">
                       <TextField
                        id="standard-name"
                        label="Password"
                        input="Password"
                        variant="outlined"
                        type="password"
                        margin="normal"
                        // value={this.props.loginpassword}
                        onChange={(event)=>{this.handleLoginPasswordChange(event)}}
                        error={this.state.loginPasswordError}
                        helperText={this.state.loginPasswordError}
                    />
                    </div>
                    <div className="buttons">
                    <div>
                <Button color="primary" variant="contained" onClick={()=>this.LoginHomeClick()}>Login</Button>
                </div>
                <div className="nextButton">
                <Button color="primary" variant="contained" onClick={()=>this.registerClick()}>Register</Button>
                </div>
                </div>
                </Card>
                {/* <h2>Login Page</h2> */}
            </div>  
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);