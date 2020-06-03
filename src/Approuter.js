import React, {Component} from 'react';
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom';
import Register from './Components/Register'
import FrontPage from './Components/FrontPage';
import Login from './Components/Login';
import Home from './Components/Home';
import EditPage from './Components/EditPage';
const AppRouter=()=>(
    <BrowserRouter>
    <div>
        <Route path='/' exact = {true} component = {FrontPage}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/edit' component={EditPage}/>
    </div>
    </BrowserRouter>
);
export default AppRouter;