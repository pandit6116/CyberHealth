import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {  NavLink } from "react-router-dom";

const Login = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  window.localStorage.setItem("currentTab","home")
  const emailValidation = (e) => {
    let re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(e.target.value)){
      setEmail(e.target.value)
      setEmailError("");
    }
    else{
      setEmail("");
      setEmailError("please enter valid email id")
    }
  }
  const passwordValidation = (e) => {
    let re =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/
    if(re.test(e.target.value)) {
      setPassword(e.target.value)
      setPasswordError("");
    }
    else{
      setPassword("");
      setPasswordError("please enter a valid password")
    }
   
  }
  const clickHandler=()=>{
    email!=="" && password!=="" && window.localStorage.setItem("isLoggedIn","yes")
  }
  const userClickHandler=(e)=>{
    let cls=document.getElementsByClassName("users")
      if(e.target.value==="patient")
      {
        window.localStorage.setItem("user","patient")
        cls[0].style.backgroundColor="#1a237e"
        cls[1].style.backgroundColor=""
        cls[2].style.backgroundColor=""
      }
      else if(e.target.value==="doctor")
      {
        window.localStorage.setItem("user","doctor")
        cls[1].style.backgroundColor="#1a237e"
        cls[0].style.backgroundColor=""
        cls[2].style.backgroundColor=""
      }
      else if(e.target.value==="admin")
      {
        window.localStorage.setItem("user","admin")
        cls[2].style.backgroundColor="#1a237e"
        cls[1].style.backgroundColor=""
        cls[0].style.backgroundColor=""
      }
  }

    return(

        <>
         <nav className="navbar navbar-expand-lg "  >
        <NavLink className="navbar-brand" style={{fontSize:"50px"}}  to="#">CyberHealth<LocalHospitalIcon style={{fontSize:"70px"}}/> </NavLink>
        <button className="btn btn-dark-active-color-succes ms-auto  me-2 users" value="patient" style={{backgroundColor:"#1a237e",color:"white"}} onClick={(e)=>{userClickHandler(e)}} type="button" >Patient</button>
          <button className="btn btn-sm btn-dark-active-color-secondary me-2 users" value="doctor" style={{color:"white"}} onClick={(e)=>{userClickHandler(e)}} type="button">Doctor</button>
           <button className="btn btn-sm btn-dark-active-color-secondary users" value="admin" style={{color:"white"}} onClick={(e)=>{userClickHandler(e)}} type="button">Admin</button>
           
        <div className="at" id="loginBox" style={{overflow:"hidden", minWidth:"350px"}} >
        
        <form action="#">
        
        <h1 className="abs mt-4"> Login </h1>
        
        <div style={{marginBottom:"12px"}}>
        <label htmlFor="emailError" style={{display:(emailError==="please enter valid email id"?"block":"none")}}>{emailError}</label>
        <label htmlFor="passwordError" style={{display:(passworderror==="please enter a valid password"?"block":"none")}}>{passworderror}</label>
        <input type="email"
        placeholder="Enter email" 
        name="email" 
        id="email" 
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={(e)=>emailValidation(e)}
        />
        </div>
        <div style={{marginBottom:"12px"}}>
        <input type="password"
        placeholder="Enter Password" 
        name="password" id="password"
        autoComplete="off" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={(e)=>passwordValidation(e)}
        />
        </div>
        
        <br />
        <Link to={email===""||password===""?"/":window.localStorage.getItem("user")==="patient"?"/PatientHome":window.localStorage.getItem("user")==="doctor"?"/DoctorHome":"AdminHome"}>
        
        
        <button  className="btn btn-primary" type="Submit" id="loginButton" onClick={clickHandler} data-bs-toggle="tooltip"
         data-bs-placement="top" title="Login"> Login </button>
        </Link>
        
        <br />
        <p style={{fontWeight:"500",marginTop:"15px"}}>New User? <Link to="/Signup"><span style={{color:"#0091ea"}} 
        id="signupLink"data-bs-toggle="tooltip" data-bs-placement="top" title="SignUp">Sign Up</span></Link></p>
        
        </form>
        
        </div>
        </nav>
        
        </>
    );


};

export default Login;