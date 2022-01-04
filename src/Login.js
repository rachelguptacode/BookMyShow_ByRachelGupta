import React from 'react'
import {NavLink} from 'react-router-dom';
import './Login.css';
function Login() {
    return (
        <>
        <div className='login'>
            <img className='login_logo' src="https://www.businessinsider.in/photo/76083099/bookmyshow-lays-off-furloughs-270-employees.jpg?imgsize=64741" alt="" />
            <div className ='login_details'>
                <input className ='login_username' type="text" placeholder='username, or email'/>
                <input className ='login_password' type='password' placeholder='Password'/>
                <button className='login_btn'>
                <NavLink to='/'>LOGIN</NavLink>
                </button>
            </div>
        </div>

        <div className='sign_up'>
            <p>Don't have an account?</p>
            <p className='sign_up_link'>Sign up</p>
        </div>
        </>
        
    )
}

export default Login
