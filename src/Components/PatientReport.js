import React from 'react'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Header from './Header';

const PatientReport = () => {
  const user=window.localStorage.getItem("user")
    return (
        <>
        {window.localStorage.getItem("isLoggedIn") &&<Header  user={user}/>}
        <div className="container-fluid" id="userReport" style={{display:"flex", justifyContent:"space-between", overflow:"hidden"}} >
        <div className="col-9" style={{width:"65%",overflow:"hidden"}}>
        <div className="table" style={{overflow:"auto",height:"572px",margin:"10px"}} >
        <table className="table" style={{backgroundColor:"#f0f4c3",}}>
        <thead>
            <tr>
              <th scope="col">Booking ID</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">@123abc</th>
              <td>Mark</td>
              <td>12-09-2021</td>
            </tr>
              <tr>
                <th scope="row">@456def</th>
                  <td>Jacob</td>
                    <td>20-10-2021</td>
                    </tr>
                    <tr>
              <th scope="row">@789ghk</th>
              <td>Larry</td>
              <td>02-03-2021</td> 
            </tr>
          </tbody>
        </table>
        </div>
        </div>
        <div className="col-3" style={{width:"33%",display:"inline-block",borderRadius:"20px",height:"86vh",overflow:"hidden",backgroundColor:"#e8eaf6"}}>
         
          <div className="heading" style={{display:"flex",flexDirection:"row",position:"relative",backgroundSize:"contain",textAlign:"center",marginLeft:"88px",padding:"10px"}}>
               <h2 >ABC Hospital Report</h2>
        <CloudDownloadIcon style={{fontSize:"70px",marginRight:"8px",padding:"5px"}} />
         </div>
         <div className="title " style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"10px",wordSpacing:"90px"}}>
         <p>Mr.XYZ</p>
         <p>28</p>
         <p>12-10-2021</p>
         </div>
         <div className="bill"style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"150px",backgroundColor:"ActiveBorder"}}>
           <p> Bill Details gose here......</p>
           </div>
         <div className="total" style={{display:"flex",flexDirection:"column",textAlign:"right",marginTop:"180px",padding:"30px"}}>
           <p>Total: 1200</p>
           <h4>Signature</h4>
           <h5>Digitally verified</h5>
         </div>
          </div>

        </div>
        
  
        </>
    )
}

export default PatientReport
