import {INPUT_LOGIN_NAME, INPUT_LOGIN_PASSWORD} from '../constants/actionTypes';
export default (state={
    loginname:"",
    loginpassword:"",
    },action)=>{
        switch(action.type){
            case INPUT_LOGIN_NAME:
            return{
                ...state,
                loginname:action.payload
            }
            case INPUT_LOGIN_PASSWORD:
            return{
                ...state,
                loginpassword:action.payload
            }
            default:
            return state
        }
    }