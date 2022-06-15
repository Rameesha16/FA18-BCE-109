import {useEffect, useState} from 'react';
import { viewData } from './Service/api';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteproduct } from './Service/api';
import { getdata } from './Service/api';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

const View = (props) => {
    const [applicationData, setapplicationdata]=useState([]);
    useEffect( () => {
        getDetails();
        },[]);

    const getDetails = async () => {
        const result = await viewData(); 
        setapplicationdata(result.data);
 
    }
    const setReset = useState(false);
    const Ondelete = async(id) =>{
        await deleteproduct(id)
        setReset(false)
     }
    
     const [user, setUser]=useState([]);
     useEffect( () => {
         getproduct();
         },[]);
 
     const getproduct = async () => {
         const result = await getdata(); 
         setUser(result.data);
         console.log(result.data);
  
     }

    return ( 
        <div>
            <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">ContactNo</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Country</th>
      <th scope="col">Languages</th>
      <th scope="col">Gender</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
        applicationData.map ( details => (
            <tr>
      
      <td>{details.Name}</td>
      <td>{details.ContactNo}</td>
      <td>{details.Email}</td>
      <td>{details.Password}</td>
      <td>{details.Country}</td>
      <td>{details.Languages}</td>
      <td>{details.Gender}</td>
      
    <td> <button type="button" class="btn btn-outline-dark"> <Link style={{textDecorationLine:"none", color:"black"}} to="/viewbrandcenter/updateData"  >Edit</Link></button></td>
     <td><button style={{}} type="button" class="btn btn-outline-dark" onClick={() => Ondelete(applicationData.id)}>Delete</button></td>

      
    </tr>
    
        )

        )
    }
  </tbody>
</table>
        </div>
     );
}

export default View;

