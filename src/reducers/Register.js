import {INPUT_NAME, INPUT_LAST_NAME, INPUT_EMAIL, INPUT_PASSWORD, INPUT_CONFIRM_PASSWORD, INPUT_CONTACT_NUMBER, REGISTER_DATA} from '../constants/actionTypes';

export default (state={
    name:"",
    lastName:"",
    phoneNumber:"",
    email:"",
    password:"",
    confirmPassword:"",
    registerData:{},
    },action)=>{
        switch(action.type){
            case INPUT_NAME:
            return{
                ...state,
                name:action.payload
            }
            case INPUT_LAST_NAME:
            return{
                ...state,
                lastName:action.payload
            }
            case INPUT_CONTACT_NUMBER:
            return{
                ...state,
                phoneNumber:action.payload
            }
            case INPUT_EMAIL:
            return{
                ...state,
                email:action.payload
            }
            case INPUT_PASSWORD:
            return{
                ...state,
                password:action.payload
            }
            case INPUT_CONFIRM_PASSWORD:
            return{
                ...state,
                confirmPassword:action.payload
            }
            case REGISTER_DATA:
            return{
                ...state,
                registerData:action.payload
            }
            default:
            return state
        }
    }