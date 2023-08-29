import React, {useEffect, useState} from "react";
import "../loginform.css"
import { Link } from 'react-router-dom'


const LoginForm = () => {

   
    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn" >
            <Link to="/dac" class="nav-link active" aria-current="page" href="#">Login</Link>
            </div>


           
            </div>

           
            
    )
}

export default LoginForm