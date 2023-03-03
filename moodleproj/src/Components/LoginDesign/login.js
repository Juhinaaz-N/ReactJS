import React from "react";
import './login.css';
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function LoginDesign()
{
    return(
<div className="main">
    <div className="container p-5">
<div className="row bg-white div1">
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
    <img src="https://img.freepik.com/premium-vector/laptop-gadget-cartoon-style_546680-94.jpg?w=260" className="m-3 img"/></div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <form><br/>
    <h1>Member-Login</h1><br/>
    <div className="icon1">
    <FontAwesomeIcon icon={faEnvelope}/> <input type='Email' name='Email' value='email' id='Email' className='inp'/></div><br/>
    <div className="icon2">
    <FontAwesomeIcon icon={faLock}/><input type='Password' name='Password' value='' id='Paswword' className='inp' /></div><br/>
    <button className="butt">LOG-IN</button><br/><br/>
    </form>
    <p>Forgot <span className="text">Username / Password?</span></p>
    <p className="text">Create Your Account <FontAwesomeIcon icon={faArrowRight}/></p>
    </div></div></div></div>
    );
}
export default LoginDesign;