import React, {Component} from 'react';
import Register from './Register';
import { Button, Card } from '@material-ui/core';

class FrontPage extends Component {
    registerClick() {
        this.props.history.push('register')
    }
    loginClick() {
        this.props.history.push('login')
    }
    render() {
        return(
            <div className="outsideCard">
            <div className="setCard">
            <Card>
            <div>
                <div className="frontContent">
                Welcome to My First Page

                </div>
                <div className="registerButton">
                <Button color="primary" onClick={()=>this.registerClick()}>Register</Button>
                </div>
                <div className="loginButton">
                <Button color="primary" onClick={()=>this.loginClick()}>Login</Button>
                </div>
            </div>
            </Card>
            </div>
            </div>
            
        )
    }
}
export default FrontPage