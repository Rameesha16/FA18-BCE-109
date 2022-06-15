
import { getdata } from './Service/api';
import { useState,useEffect} from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Form109 from './Form109';
import View from './View';

function Update(props) {
    const{ id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    useEffect(()=>{
        async function getproduct(){
            const response =await getdata(id);
            setUser(response.data);
        }
        getproduct();
        
     },[]);

    return ( 
        <div>
            <View id={id}/>;
            <Form109 id={id} Name={user.Name} ContactNo={user.ContactNo} Email={user.Email} Password={user.Password} Country={user.Country} Languages={user.Languages} Gender={user.Gender}/>
        </div>
     );
}

export default Update;