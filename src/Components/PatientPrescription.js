import React from 'react'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Header from './Header';

const PatientPrescription = () => {

  // const clickHandler=()=>{

  // }
    return (
             <>
             {window.localStorage.getItem("isLoggedIn") &&<Header user={window.localStorage.getItem("user")}/>}
             <div className="container-fluid" id="userPrescription" style={{display:"flex", justifyContent:"space-between", overflow:"hidden"}} >
             <div className="col-9" style={{width:"65%",overflow:"hidden"}}>
             <div className="table" style={{overflow:"auto",height:"572px",margin:"10px"}} >
               <table className="table" style={{backgroundColor:"#f0f4c3",}}>
  <thead >
    <tr>
      <th scope="col">Booking ID</th>
      <th scope="col">Doctor Name</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" >@123abc</th>
      <td>Mark</td>
      <td>12-09-2021</td>
      
    </tr>
    <tr>
      <th scope="row">@456def</th>
      <td>Jacob</td>
      <td>20-10-2021</td>
      </tr>
      <tr>
      <th scope="row">@456def</th>
      <td>Job</td>
      <td>20-10-2021</td>
      </tr><tr>
      <th scope="row">@454der</th>
      <td>Jacob</td>
      <td>20-10-2021</td>
      </tr><tr>
      <th scope="row">@456def</th>
      <td>layer</td>
      <td>20-10-2021</td>
      </tr>
  </tbody>
</table>
</div>
</div>
<div className="col-3"style={{width:"33%",borderRadius:"20px",height:"86vh",overflow:"hidden",backgroundColor:"#ffe0b2"}}>
<div className="heading" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"10px"}}>
               <h2 >ABC Hospital</h2>
        <CloudDownloadIcon style={{fontSize:"70px",margin:"1px"}} />
         </div>
         <div className="title" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"10px",wordSpacing:"90px"}}>
         <p>Mr.XYZ</p>
         <p>28</p>
         <p>12-10-2021</p>
         </div>
         <div className="table" style={{overflow:"auto",margin:"10px",width:"auto"}} >
               <table className="table border-dark" style={{backgroundColor:"#b9f6ca",height:"20px"}}>
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
        <label className="form-check-label">
          M
        </label>
      </div>
      <div className="form-check-sm" >
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck2" value="option2" required/>
        <label className="form-check-label">
          A
        </label>
      </div>
      <div className="form-check-sm">
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck3" value="option3" defaultChecked/>
        <label className="form-check-label">
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
        <label className="form-check-label">
          M
        </label>
      </div>
      <div className="form-check-sm" >
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck2" value="option2" required/>
        <label className="form-check-label">
          A
        </label>
      </div>
      <div className="form-check-sm">
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck3" value="option3" required/>
        <label className="form-check-label">
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
        <label className="form-check-label">
          M
        </label>
      </div>
      <div className="form-check-sm" >
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck2" value="option2" required/>
        <label className="form-check-label">
          A
        </label>
      </div>
      <div className="form-check-sm">
        <input className="form-check-input-sm" type="checkbox"  id="invalidCheck3" value="option3" required/>
        <label className="form-check-label">
          E
        </label>
      </div>
    </div>
      </tr>
  </tbody>
</table>
</div>
         <div className="signature" style={{textAlign:"end",marginTop:"70px",marginRight:"15px",padding:"20px"}}>
           <h3>Signature</h3>
           <h5>Digitally verified</h5>
           </div>
           <div className="valid" style={{marginTop:"30px",textAlign:"center"}}>
             <p>
               Valid for 30 days from the Date
             </p>
             </div>
</div>
</div>

            
        </>
        
    )
}

export default PatientPrescription
