import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';

const Questions = [
    {
        id: 1,
        question: 'Doctor',
        answer: <table class="table table-hover border-dark">
        <thead >
    <tr>
    <th scope="col">S.No.</th>
      <th scope="col">Name</th>
      <th scope="col">Moblie</th>
      <th scope="col">Fee</th>
      <th scope="col">Specialization</th>
      <th scope="col">Delete</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row " >1</th>
      <td>Dr. ABC</td>
      <td>8423568740</td>
      <td>400</td>
      <td>LUNG</td>
      <td><RestoreFromTrashIcon/></td>
      </tr>
      </tbody>
      </table>
    },
    {
        id: 2,
        question: 'Patient',
        answer: <table class="table table-hover border-dark">
        <thead >
    <tr>
    <th scope="col">S.No.</th>
      <th scope="col">Name</th>
      <th scope="col">Moblie</th>
      <th scope="col">Email</th>
      <th scope="col">Medical History</th>
      <th scope="col">Delete</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row " >1</th>
      <td>Vishal</td>
      <td>7054254565</td>
      <td>kv1112@gmail.com</td>
      <td>LUNG,EYE</td>
      <td><RestoreFromTrashIcon/></td>
      </tr>
      </tbody>
      </table>
    },
    {
        id: 3,
        question: 'Appoinment',
        answer: <table class="table table-hover border-dark">
        <thead >
    <tr>
    <th scope="col">S.No.</th>
      <th scope="col">Patient</th>
      <th scope="col">Doctor</th>
      <th scope="col">Specialization</th>
      <th scope="col">Fee</th>
      <th scope="col">Time</th>
      <th scope="col">Date</th>
      <th scope="col">Delete</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row " >1</th>
      <td>Vishal</td>
      <td>Dr.abc</td>
      <td>LUNG</td>
      <td>400</td>
      <td>10:00 AM</td>
      <td>12-03-21</td>
      <td><RestoreFromTrashIcon/></td>
      </tr>
      </tbody>
      </table>
    },
    {
        id: 4,
        question: 'Report',
        answer: <table class="table table-hover border-dark">
        <thead >
    <tr>
    <th scope="col">S.No.</th>
      <th scope="col">Name</th>
      <th scope="col">Moblie</th>
      <th scope="col">Fee</th>
      <th scope="col">Specialization</th>
      <th scope="col">Delete</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row " >1</th>
      <td>Dr. ABC</td>
      <td>8423568740</td>
      <td>400</td>
      <td>LUNG</td>
      <td><RestoreFromTrashIcon/></td>
      </tr>
      </tbody>
      </table>
    },
    {
        id: 5,
        question: 'Payment',
        answer: <table class="table table-hover border-dark">
        <thead >
    <tr>
    <th scope="col">S.No.</th>
      <th scope="col">Name</th>
      <th scope="col">Moblie</th>
      <th scope="col">Fee</th>
      <th scope="col">Specialization</th>
      <th scope="col">Delete</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row " >1</th>
      <td>Dr. ABC</td>
      <td>8423568740</td>
      <td>400</td>
      <td>LUNG</td>
      <td><RestoreFromTrashIcon/></td>
      </tr>
      </tbody>
      </table>
    }
]

export default Questions