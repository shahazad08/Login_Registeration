import React, {Component} from 'react';
import {connect} from 'react-redux';
import { TextField,Button, Card } from '@material-ui/core'
function mapStateToProps(state){
    console.log("Register Props",state.Register)
    return{
        registerData:state.Register.registerData
    }
}
class Home extends Component {
    editClick () {
        console.log("Move to Click")
        this.props.history.push('edit')
    }
    render(){
        console.log("Home Register Data", this.props.registerData)
        // this.props.registerData
        return(
            <div>
                <div className="homeHeader">
                <h1>Welcome to Analytics Fox Software</h1>
                </div>
                <div className="userDetailHeader">
                <h2>User Details</h2>
               
                <div className="userDetailHeader">
                    <li> {this.props.registerData.name}</li>
                    <li> {this.props.registerData.lastName}</li>
                    <li> {this.props.registerData.email}</li>
                    <li> {this.props.registerData.phoneNumber}</li>
                </div>
                </div>
                <div className="editButton">
                <Button color="secondary" variant="contained" onClick={()=>this.editClick()}>Edit</Button>
                </div>
                {/* <div>
                    {this.props.registerData.name}
                </div> */}
            </div>
        )
    }
}
export default connect(mapStateToProps)(Home);