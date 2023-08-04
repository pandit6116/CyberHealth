import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PatientHome from "./Components/PatientHome";
import PatientPrescription from "./Components/PatientPrescription"
import PatientReport from "./Components/PatientReport"
import {Route, Switch, Redirect} from "react-router-dom"
import DoctorHome from "./Components/DoctorHome";
import AdminHome from "./Components/AdminHome"
import DoctorPrescription from "./Components/DoctorPrescription";
import DoctorReport from "./Components/DoctorReport"
const App = () =>{
  window.localStorage.setItem("user","patient")
  return(
  <>
  <div className="container-fluid overflow-hidden">
    

  <Switch>
  <Route exact path='/' component={Login}/>
  <Route  exact path='/Signup' component={Signup}/>
  <Route exact path='/PatientHome' component={PatientHome}/>
  <Route exact path='/PatientPrescription' component={PatientPrescription}/>
  <Route exact path='/PatientReport' component={PatientReport}/>
  <Route exact path='/DoctorHome' component={DoctorHome}/>
  <Route exact path='/DoctorPrescription' component={DoctorPrescription}/>
  <Route exact path='/DoctorReport' component={DoctorReport}/>
  <Route exact path='/AdminHome' component={AdminHome}/>
  <Redirect to="/"/>

  </Switch>
  </div>
  
  </>
  );
};

export default App;