import { useState } from "react";
import { addData } from "./Service/api";
import { useNavigate } from "react-router-dom";
      const Form109 = () => {
        const navigate = useNavigate();
          const [applicationData, setdata]=useState({
              Name:"",
              ContactNo:"",
              Email:"",
              Password:"",
              Country:"",
              Gender: "",
              Languages: "",
          
          })
          const { Name, ContactNo, Email, Password, Country,Languages,Gender}=applicationData;
          const handleChannge = (e) =>{
              setdata({...applicationData, [e.target.name]: [e.target.value]})
             
          }
          const addDetails = async (e) =>{
              e.preventDefault();
              await addData(applicationData);
              navigate("/viewbrandcenter");
              
            }
          return(
              <div className="container-fluid" style={{}}>
                  <br></br>
      <p style={{marginLeft:"-330px", color:"GrayText"}}>Sign up for a free account at Brand Center.</p>
      <br></br>
          <form>
              <label className="col-md-12" style={{marginLeft:"-590px",fontWeight:"bold", marginBottom:"10px"}} > Name<code>*</code> </label>
              <input style={{marginLeft:"-20px", marginBottom:"10px"}} type="text" className="form-control " name="Name" onChange={(e) => handleChannge(e)}/>
              <label className="col-md-12" style={{marginLeft:"-558px",fontWeight:"bold", marginBottom:"10px"}}> Contact No<code>*</code> </label>
              <input style={{marginLeft:"-20px"}} type="numeric" className="form-control mb-3" name="Contactno" onChange={(e) => handleChannge(e)}/>   
              <label className="col-md-12" style={{marginLeft:"-595px",fontWeight:"bold", marginBottom:"10px"}}> Email<code>*</code> </label>
              <input style={{marginLeft:"-20px"}} type="text" className="form-control mb-3" name="Email" onChange={(e) => handleChannge(e)}/>
              <label className="col-md-12" style={{marginLeft:"-580px",fontWeight:"bold", marginBottom:"10px"}}> Password<code>*</code> </label>
              <input style={{marginLeft:"-20px"}} type="password" className="form-control mb-3" name="Password" onChange={(e) => handleChannge(e)}/>
              <label className="col-md-12" style={{marginLeft:"-590px",fontWeight:"bold", marginBottom:"10px"}}> Country<code>*</code> </label>
              <select style={{marginLeft:"-20px", marginBottom:"10px"}} className="form-select" 
              name="Country"
               onChange={(e) => handleChannge(e)}>
                <option selected>Country</option>
                <option>Pakistan</option>
                <option>China</option>
              </select>
              <div id="radio" className="col-md-6" style={{marginLeft:"-33px", marginTop:"20px"}}>
              <p style={{marginLeft:"-220px"}}><strong>Gender<code>*</code></strong></p>
              <input type="radio" id="Male" name="Gender" value="Male" onChange={(e) => handleChannge(e)}></input>
              <label style={{margin:"10px"}} for="Male">Male</label>
              <input type="radio" id="Female" name="Gender" value="Female" onChange={(e) => handleChannge(e)}></input>
              <label style={{margin:"10px"}} for="Female">Female</label>
              <input type="radio" id="Other" name="Gender" value="Other" onChange={(e) => handleChannge(e)}></input>
              <label style={{margin:"10px"}} for="Other">Other</label>
            </div>
            <div className="col-md-6" style={{marginLeft:"-33px", marginTop:"20px"}}>
              <p style={{marginLeft:"-200px"}}><strong>Languages<code>*</code> </strong></p>
              <input type="checkbox" name="Languages" onChange={(e) => handleChannge(e)}></input>
              <label style={{margin:"15px"}}> English </label>
              <input type="checkbox" name="Languages" onChange={(e) => handleChannge(e)}></input>
              <label style={{margin:"15px"}}> Urdu </label>
              <input type="checkbox" name="Languages" onChange={(e) => handleChannge(e)}></input>
              <label style={{margin:"15px"}}> Punjabi</label>
            </div>
            <br></br>
            
            <div className="col-md-12">
            <button style={{marginLeft:"-460px"}} type="button" type="submit" class="btn btn-dark" onClick={(e)=>addDetails(e)}> CREATE AN ACCOUNT</button>
            </div>
            
          </form>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
      </div>
          );
      }
      export default Form109;
