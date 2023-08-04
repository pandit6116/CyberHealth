import React,{useState} from 'react'
import {  NavLink } from "react-router-dom";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Questions from './AHApi'
import Admin from './Admin';
import "./AdminHome.css";

const AdminHome = () => {
  const [data] = useState(Questions)
  const [show, setShow]= useState(false);

  return (
    <>
    <nav className="navbar navbar-expand-lg me-2"  >
    <NavLink className="navbar-brand" style={{fontSize:"50px"}}  to="#">CyberHealth<LocalHospitalIcon style={{fontSize:"70px"}}/> </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{borderColor:"black"}} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : "" }`} id="navbarSupportedContent">
    <ul id="navbarSupportedConten" className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
    <NavLink className="nav-link" id="logoutButton" to="/" style={{color:"white",fontWeight:"bold"}} onClick={()=>{window.localStorage.removeItem("isLoggedIn")}}>Logout</NavLink>
       </li>
       </ul>
       </div>
    </nav>
     <div className='main_divs'>
        <h1> Dashboard</h1>
        {data.map((curElem) => {
          return <Admin key={curElem.id} {...curElem} />
        })}
      </div>
      
    </>
  )
}

export default AdminHome