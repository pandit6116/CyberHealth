import React,{useState} from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Header from './Header';
import DatePicker from "react-datepicker";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import WatchLaterIcon from '@material-ui/icons/WatchLater';


const DoctorReport = () => {
  const user=window.localStorage.getItem("user")
  const [startDate, setStartDate] = useState(new Date());
 
  
 return (
        <>
          {window.localStorage.getItem("isLoggedIn") &&<Header user={user}/>}
      <div className="container-fluid height-auto" id="doctorReport" style={{display:"flex", justifyContent:"space-between", overflow:"hidden"}} >
        <div className="col-9-hover-primary" style={{width:"70%",height:"650px",overflow:"hidden"}}>
          <div className="row" style={{height:"100px"}}>
            <div className="row row-cols-sm-3" style={{overflowY:"auto",textAlign:"center",padding:"20px",height:"610px" ,backgroundColor:"#26a69a!important"}}>

        <div className="card border-info" id="grid1 " style={{borderRadius:"20px",height:"auto",width:"250px",backgroundColor:"#f9fbe7",margin:"30px"}}>
  <div className="card-body">
  <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 1</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>
<div className="card border-info"id="grid2 " style={{borderRadius:"20px",height:"auto",width:"250px",backgroundColor:"#f9fbe7",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 2</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>

<div className="card border-info"id="grid3 " style={{borderRadius:"20px",height:"auto",width:"250px",backgroundColor:"#f9fbe7",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 3</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>
<div className="card border-info"id="grid4 " style={{borderRadius:"20px",height:"auto",width:"250px",backgroundColor:"#f9fbe7",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 4</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>

<div className="card border-info"id="grid5 " style={{borderRadius:"20px",height:"auto",width:"250px",backgroundColor:"#f9fbe7",margin:"30px"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 5</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>
<div className="card border-info"id="grid6 " style={{borderRadius:"20px",height:"auto",width:"250px",backgroundColor:"#f9fbe7",margin:"30px"}}>
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
 <div className="container-fluid" style={{width:"36%",display:"inline-block",borderRadius:"20px",height:"86vh",overflow:"hidden",backgroundColor:"#e0f2f1"}} >
   <div className="heading" style={{display:"flex",flexDirection:"row",position:"relative",backgroundSize:"contain",textAlign:"center",marginLeft:"88px",padding:"10px"}}>
               <h2 style={{fontSize:"30px",textShadow:"2px 2px 5px #00c853"}}>ADD/Update Report</h2>
               </div>
         <div className="title " style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
         <p><AccountCircleIcon style={{fontSize:"50px",color:"#64b5f6"}} />User 1</p>
         <p><CalendarTodayIcon style={{fontSize:"30px",color:"#64b5f6",marginLeft:"160px"}}/><DatePicker
         
      dateFormat="yyyy/MM/dd"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
    </p>

         
         </div>
         <p style={{textAlign:"center",marginTop:"3px"}}><WatchLaterIcon style={{fontSize:"50px"}}/>10:00 AM</p>
         <input type="word" className="form-control border-dark" id="exampleFormControlInput1" placeholder="Enter the amount"/>
         <textarea className="form-control border-dark" placeholder="Enter the Bill details here....." id="exampleFormControlTextarea1" rows="3" style={{marginTop:"20px"}}></textarea>
        <div className="total" style={{display:"flex",flexDirection:"column",textAlign:"right",marginTop:"180px",padding:"30px"}}>
           <button className="btn btn-primary"  type="submit" id="submitButton" >Submit</button>
           
         </div>
</div>
</div>
        </>
    )
}

export default DoctorReport
