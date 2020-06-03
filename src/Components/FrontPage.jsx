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
            <h1>Welcome to Analytics Fox Software Pvt.Ltd</h1>
            <Card>
            <div >
                <div className="frontContent">
                

                </div>
                <div className="registerButton">
                <Button onClick={()=>this.registerClick()}>Register</Button>
                </div>
                <div className="loginButton">
                <Button  onClick={()=>this.loginClick()}>Login</Button>
                </div>

            </div>

            
            </Card>
            </div>
            </div>
            
        )
    }
}
export default FrontPage