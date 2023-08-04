import React, { useState } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const Admin = ({ question, answer }) => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className='divdiv'>
                <div className='main_heading'>
                
                    <p onClick={() => { setShow(!show) }}>{show ?<RemoveIcon/>:< AddIcon/>}</p>
                    <h3>{question}</h3>
                    <AddCircleOutlineIcon style={{margin:"9px",fontSize:"40px"}}/>
                </div>
                {show && <p className='answer'>{answer}</p>}
            </div>
        </>
    )
}

export default Admin