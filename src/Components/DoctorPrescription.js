import React,{useState} from 'react'
import Header from './Header'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import DatePicker from "react-datepicker";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
const DoctorPrescription = () => {
  const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            {window.localStorage.getItem("isLoggedIn") &&<Header user={window.localStorage.getItem("user")}/>}
            <div className="container-fluid height-auto" id="doctorPrescription" style={{display:"flex", justifyContent:"space-between", overflow:"hidden"}} >
        <div className="col-9" style={{width:"70%",height:"650px",overflow:"hidden"}}>
          <div className="row" style={{height:"100px"}}>
            <div className="row row-cols-sm-3" style={{overflowY:"auto",textAlign:"center",padding:"20px",height:"610px" ,backgroundColor:"#26a69a!important"}}>

        <div className="card border-dark"id="grid1 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px",backgroundColor:"#dcedc8"}}>
  <div className="card-body">
  <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 1</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>
<div className="card border-dark"id="grid2 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px",backgroundColor:"#dcedc8"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 2</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>

<div className="card border-dark"id="grid3 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px",backgroundColor:"#dcedc8"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 3</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>
<div className="card border-dark"id="grid4 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px",backgroundColor:"#dcedc8"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 4</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>

<div className="card border-dark"id="grid5 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px",backgroundColor:"#dcedc8"}}>
  <div className="card-body">
    <AccountCircleIcon style={{fontSize:"90px"}} />
    <h5 className="card-title">Patient 5</h5>
    <h6 className="card-subtitle mb-2 text-muted">18-02-2021</h6>
    <p className="card-text">03:30 PM</p>
  </div>
</div>
<div className="card border-dark"id="grid6 " style={{borderRadius:"20px",height:"auto",width:"250px",margin:"30px",backgroundColor:"#dcedc8"}}>
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
<div className="container-fluid" style={{width:"40%",display:"inline-block",borderRadius:"20px",height:"86vh",overflow:"hidden",backgroundColor:"#e0f2f1"}} >
<h3 style={{fontSize:"25px",textShadow:"2px 2px 5px #01579b",textAlign:"center"}}> ADD/Update Prescription <span className="badge bg-secondary"></span></h3>
<div className="title " style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"30px"}}>
         <p><AccountCircleIcon style={{fontSize:"50px",color:"#64b5f6"}} />User 1</p>
         <p><CalendarTodayIcon style={{fontSize:"30px",color:"#64b5f6",marginLeft:"160px"}}/><DatePicker
         dateFormat="yyyy/MM/dd"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
    </p>
    </div>
         <p style={{textAlign:"center",marginTop:"3px"}}><WatchLaterIcon style={{fontSize:"50px"}}/>10:00 AM</p>
         <div className="table" style={{overflow:"auto",margin:"10px",width:"auto"}} >
               <table className="table border-dark" style={{backgroundColor:"#f0f4c3",height:"20px"}}>
  <thead >
    <tr>
    <th scope="col">S.No.</th>
      <th scope="col">Medicine</th>
      <th scope="col">Dose</th>
      <th scope="col">Timing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row " >1</th>
      <td>Paracetamol</td>
      <td>5</td>
      <div className="col-sm-10"style={{fontSize:"10px"}}>
      <div className="form-check-sm">
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck1"  value="option1" required/>
        <label className="form-check-label" for="invalidCheck1">
          M
        </label>
      </div>
      <div className="form-check-sm" >
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck2" value="option2" required/>
        <label className="form-check-label" for="invalidCheck2">
          A
        </label>
      </div>
      <div className="form-check-sm">
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck3" value="option3" checked/>
        <label className="form-check-label" for="invalidCheck3">
          E
        </label>
      </div>
    </div>
    </tr>
    <tr>
    <th scope="row "></th>
      <td></td>
      <td></td>
      <div className="col-sm-10"style={{fontSize:"10px"}}>
      <div className="form-check-sm">
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck1"  value="option1" required/>
        <label className="form-check-label" for="invalidCheck1">
          M
        </label>
      </div>
      <div className="form-check-sm" >
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck2" value="option2" required/>
        <label className="form-check-label" for="invalidCheck2">
          A
        </label>
      </div>
      <div className="form-check-sm">
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck3" value="option3" required/>
        <label className="form-check-label" for="invalidCheck3">
          E
        </label>
      </div>
    </div>
      </tr>
      <tr>
    <th scope="row "></th>
      <td></td>
      <td></td>
      <div className="col-sm-10"style={{fontSize:"10px"}}>
      <div className="form-check-sm">
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck1"  value="option1" required/>
        <label className="form-check-label" for="invalidCheck1">
          M
        </label>
      </div>
      <div className="form-check-sm" >
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck2" value="option2" required/>
        <label className="form-check-label" for="invalidCheck2">
          A
        </label>
      </div>
      <div className="form-check-sm">
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck3" value="option3" required/>
        <label className="form-check-label" for="invalidCheck3">
          E
        </label>
      </div>
    </div>
      </tr>
  </tbody>
</table>
</div>
        <div className="total" style={{display:"flex",flexDirection:"column",textAlign:"right",padding:"30px"}}>
           <button type="button" className="btn btn-primary" id="submitButton" data-bs-toggle="tooltip" data-bs-placement="top" title="Submit">
  Submit
</button>
         </div>
</div>
</div>
        </>
    )
}

export default DoctorPrescription
