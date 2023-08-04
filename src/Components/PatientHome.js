import React,{useState} from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Header from './Header';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const PatientHome = () => {
  const user=window.localStorage.getItem("user")
  const [startDate,setStartDate]=useState(new Date())
  const [dateValue,setDateValue]=useState("Select Date")
 
  const clickHandler=()=>{
    
  }
  const changeDate=(e)=>{
    setStartDate(e)
    setDateValue(e.target.value)
  }

    return (
        <>
        {window.localStorage.getItem("isLoggedIn") &&<Header user={user}/>}
         <div className="container-fluid height-auto" id="userHome" style={{display:"flex", justifyContent:"space-between", overflow:"hidden"}} >
        <div className="col-9" style={{width:"70%",height:"650px",overflow:"hidden"}}>
          <div className="row" style={{height:"100px"}}>
            <div className="row row-cols-sm-3" style={{overflowY:"auto",textAlign:"center",padding:"20px",height:"610px" ,backgroundColor:"#26a69a!important"}}>

        <div className="card border-primary" id="grid1 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px"}}>
  <div className="card-body">
  <AccountCircleIcon style={{fontSize:"90px",color:"#2979ff"}} />
    <h5 className="card-title">Dr.Abc</h5>
    <h6 className="card-subtitle mb-2 text-muted">HEART SPECIALIST</h6>
    <p className="card-text">Abc HOSPITAL</p>
  </div>
</div>
<div className="card border-primary"  id="grid2 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px",color:"#2979ff"}} />
    <h5 className="card-title">Dr.AbcD</h5>
    <h6 className="card-subtitle mb-2 text-muted">LUNG SPECIALIST </h6>
    <p className="card-text">AbcD HOSPITAL</p>
  </div>
</div>
<div className="card border-primary"  id="grid2 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px",color:"#2979ff"}} />
    <h5 className="card-title">Dr.AbcD</h5>
    <h6 className="card-subtitle mb-2 text-muted">LUNG SPECIALIST </h6>
    <p className="card-text">AbcD HOSPITAL</p>
  </div>
</div>

<div className="card border-primary" id="grid3 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px",color:"#2979ff"}} />
    <h5 className="card-title">Dr.Abcde</h5>
    <h6 className="card-subtitle mb-2 text-muted"> EYE SPECIALIST </h6>
    <p className="card-text">Abcde HOSPITAL</p>
  </div>
</div>
<div className="card border-primary" id="grid4 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px",color:"#2979ff"}} />
    <h5 className="card-title">Dr.Abcdef</h5>
    <h6 className="card-subtitle mb-2 text-muted"> HERAT SPECIALIST</h6>
    <p className="card-text">Abcdef HOSPITAL</p>
  </div>
</div>

<div className="card border-primary" id="grid5 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px",color:"#2979ff"}} />
    <h5 className="card-title">Dr.Abcdefg</h5>
    <h6 className="card-subtitle mb-2 text-muted"> EYE SPECIALIST</h6>
    <p className="card-text">Abvdefg HOSPITAL</p>
  </div>
</div>
<div className="card border-primary" id="grid6 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px",color:"#2979ff"}} />
    <h5 className="card-title">Dr.xyzab</h5>
    <h6 className="card-subtitle mb-2 text-muted"> LUNG SPECIALIST</h6>
    <p className="card-text">xyzab HOSPITAL</p>
  </div>
</div>
  </div>  
</div>
</div>
<div className="col-3"style={{width:"30%",height:"auto",borderRadius:"20px",overflow:"hidden",backgroundColor:"#ede7f6"}}>
  
<div className="container" style={{padding:"20px",textAlign:"center"}}>
  <h1 className="jumbotron" style={{textShadow:"2px 2px 5px red"}}> ADD BOOKING </h1>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"110px",color:"#2979ff",marginTop:"20px"}} />
    <br/><br/>
    <h5 className="card-title">Dr.xyzab</h5>
    <br/>
    <h6 className="card-subtitle mb-2 text-bold"> LUNG SPECIALIST</h6>
    <p className="card-text">xyzab HOSPITAL</p>
  </div>
 <DatePicker dateFormat="dd-MM-yyyy" minDate={new Date()}  selected={startDate} value={dateValue} onChange={changeDate} />
  <br/>
 
  <button className=" border-primary mt-2 dropdown-toggle" type="Slot" id="selectSlot" data-bs-toggle="dropdwon" aria-expanded="false">
    Select Slot
  </button>
  
</div>
<button type="Submit" className="btn btn-primary center" id="submitButton"style={{cursor:"pointer",marginLeft:"43%",marginTop:"25%"}} onClick={clickHandler}>Submit</button>
            </div>


        
      </div>
        </>
    )
}
export default PatientHome