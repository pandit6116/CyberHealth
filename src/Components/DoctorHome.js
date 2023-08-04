import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import Header from './Header';

const DoctorHome = () => {
    const user=window.localStorage.getItem("user")  

    return (
    <>
      {window.localStorage.getItem("isLoggedIn") &&<Header  user={user}/>}
      <div className="container-fluid height-auto" id="doctorHome" style={{display:"flex", justifyContent:"space-between", overflow:"hidden"}} >
        <div className="col-9" style={{width:"70%",height:"650px",overflow:"hidden"}}>
          <div className="row" style={{height:"100px"}}>
            <div className="row row-cols-sm-3" style={{overflowY:"auto",textAlign:"center",padding:"20px",height:"610px" ,backgroundColor:"#26a69a!important"}}>

        <div className="card"id="grid1 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px"}}>
  <div className="card-body">
  <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 1</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>
<div className="card"id="grid2 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 2</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>

<div className="card"id="grid3 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 3</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>
<div className="card"id="grid4 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 4</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>

<div className="card"id="grid5 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 5</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>
<div className="card"id="grid6 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 6</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>
  </div>  
</div>
</div>
<div className="col-3"style={{display:"flex",flexDirection:"row",justifyContent:"center", width:"29%",borderRadius:"20px",height:"85vh",overflow:"hidden",backgroundColor:"#ffccbc"}}>
  
<div className="container" style={{ padding:"20px",textAlign:"center"}}>
        <h2 style={{textShadow:"2px 2px 5px red",fontSize:"30px",color:"black"}}> Waiting Card</h2>
        <div className="table table-border-dark table-primary table-hover" style={{display:"flex",flexDirection:"column",overflow:"hidden"}}>
        <div className="border p-3 d-flex text-white mt-3"style={{textAlign:"left",height:"60px",borderRadius:"20px",width:"400px",backgroundColor:"#2979ff",overflow:"hidden",textIndent:"6px",letterSpacing:"2px",wordSpacing:"-4px"}}>
        <AccountCircleIcon style={{fontSize:"40px",color:"#4e342e"}} />Patient 6 18-02-2021 03:30 PM <CheckIcon style={{color:"green"}}/><CloseIcon style={{color:"#d50000"}}/>
        </div>
        <div className="border p-3 d-flex text-white mt-3"style={{textAlign:"left",height:"60px",borderRadius:"20px",width:"400px",backgroundColor:"#2979ff",overflow:"hidden",textIndent:"6px",letterSpacing:"2px",wordSpacing:"-4px"}}>
        <AccountCircleIcon style={{fontSize:"40px",color:"#4e342e"}} /> Patient 6 18-02-2021 03:30 PM <CheckIcon style={{color:"green"}}/><CloseIcon style={{color:"#d50000"}}/>
        </div>
        <div className="border p-3 d-flex text-white mt-3"style={{textAlign:"left",height:"60px",borderRadius:"20px",width:"400px",backgroundColor:"#2979ff",overflow:"hidden",textIndent:"6px",letterSpacing:"2px",wordSpacing:"-4px"}}>
        <AccountCircleIcon style={{fontSize:"40px",color:"#4e342e"}} />Patient 6 18-02-2021 03:30 PM <CheckIcon style={{color:"green"}}/><CloseIcon style={{color:"#d50000"}}/>
        </div>
        </div>
            </div>
</div>

        
      </div>
    </>    
    )
}

export default DoctorHome