import React, {useEffect, useState} from 'react'
import {  NavLink } from "react-router-dom";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
const Header = (props) => {
const [show, setShow]= useState(false);
useEffect(()=>{
   let cls= document.getElementsByClassName("Patient")
   let currtab=window.localStorage.getItem("currentTab")
   if(currtab==="home"){
    cls[0].style.backgroundColor="#1a237e"
    cls[1].style.backgroundColor=""
    cls[2].style.backgroundColor=""
   }
   else if(currtab==="prescription"){
    cls[0].style.backgroundColor=""
    cls[1].style.backgroundColor="#1a237e"
    cls[2].style.backgroundColor=""
   }
   else if(currtab==="report"){
    cls[0].style.backgroundColor=""
    cls[1].style.backgroundColor=""
    cls[2].style.backgroundColor="#1a237e"
   }
},[])
const userClickHandler=(e)=>{
  let cls=document.getElementsByClassName("Patient")
  console.log(e)
    if(e.target.value==="Home")
    {
      console.log("clicked Home")
      window.localStorage.setItem("currentTab","home")
      cls[0].style.backgroundColor="#1a237e"
      cls[1].style.backgroundColor=""
      cls[2].style.backgroundColor=""
    }
    else if(e.target.value==="Prescription")
    {
      console.log("clicked Prescription")
      window.localStorage.setItem("currentTab","prescription")
      cls[1].style.backgroundColor="#1a237e"
      cls[0].style.backgroundColor=""
      cls[2].style.backgroundColor=""
    }
    else if(e.target.value==="Report")
    {
      console.log("clicked Report")
      window.localStorage.setItem("currentTab","report")
      cls[2].style.backgroundColor="#1a237e"
      cls[1].style.backgroundColor=""
      cls[0].style.backgroundColor=""
    }
  }
  return (
    <>
    <section className="Header" >
    <nav className="navbar navbar-expand-lg"  >
  <div className="container-fluid" >
  <NavLink className="navbar-brand" style={{fontSize:"50px",margin:"-8px"}}  to="#">CyberHealth<LocalHospitalIcon style={{fontSize:"70px"}}/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{borderColor:"black"}} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : "" }`} id="navbarSupportedContent">
    <ul id="navbarSupportedConten" className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
          <NavLink className="Patient nav-link active" id="homeButton" aria-current="page" to={props.user==="patient"?"/PatientHome":props.user==="doctor"?"/DoctorHome":"AdminHome"} ><button style={{color:"white",fontWeight:"bold",backgroundColor:"#0288d1"}} value="Home" onClick={(e)=>{userClickHandler(e)}}>Home</button></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" Patient nav-link" id="casePrescriptionButton" to={props.user==="patient"?"/PatientPrescription":props.user==="doctor"?"/DoctorPrescription":"AdminHome"} aria-current="page"><button style={{color:"white",backgroundColor:"#0288d1",fontWeight:"bold"}} value="Prescription" onClick={(e)=>{userClickHandler(e)}}>Prescription</button></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" Patient nav-link" id="reportButton" to={props.user==="patient"?"/PatientReport":props.user==="doctor"?"/DoctorReport":"AdminHome"}><button style={{color:"white",backgroundColor:"#0288d1",fontWeight:"bold"}} value="Report" onClick={(e)=>{userClickHandler(e)}}>Report</button></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" id="logoutButton" to="/" style={{color:"white",fontWeight:"bold"}} onClick={()=>{window.localStorage.removeItem("isLoggedIn")}}>Logout</NavLink>
        </li>
      </ul>
      </div>
  </div>
  </nav>
</section>
    </>
  )
}

export default Header
