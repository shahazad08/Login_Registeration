import { combineReducers } from "redux";
import Register from '../src/reducers/Register'
import Login from '../src/reducers/Login'
export default combineReducers({
    Register,
    Login
})