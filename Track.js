function Track() {
    return ( 
        
             <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <p style={{color:"GrayText", paddingRight:"500px"}}>Home / Track </p>
                        <p style={{fontWeight:"bold", paddingRight:"515px", paddingTop:"-2px"}}>Track Order</p>

                    </div>
                    
                        <div className="col-md-2">
                        <img style={{width:"80px"}} src={require("../src/images/3.PNG")}></img>
                        </div>
                        
                            <div className="col-md-4">
                            <div className="row">
                            <div className="col-md-12" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        
                            
      <h1 style={{color:"GrayText",marginTop:"20px"}}>Track Your Order</h1>
      <br></br>
      <br></br>
     
      <form style={{display:"flex",flexDirection:"column"}}>
        <label>
          <p style={{marginLeft:"-250px",fontWeight:"bold"}}>Email</p>
         
        <input type="text" style={{width:"300px"}}/>
        </label>
        <label>
           
          <p style={{marginLeft:"-220px",marginTop:"10px",fontWeight:"bold"}}>Tracking ID</p>
          <input type="number" style={{width:"300px"}} />
        </label>
        <br></br>
        
        <div>
          <button  style={{marginLeft:"",backgroundColor:"black",color:"white",width:"300px",marginTop:"5px"}}>submit</button>
        </div>
      </form>
     
       
      </div>         
          
                        
                        
                        {/* <p style={{fontWeight:"bold", color:"GrayText", justifyContent:"center", textAlign:"center", paddingLeft:"180px", paddingTop:"40px", fontSize:"25px", marginLeft:"-260px"}}>Sign in manualy</p>
                        
                            <div className="col-md-12" style={{paddingTop:"150px", paddingRight:"15px",justifyContent:"center", textAlign:"center", paddingLeft:"-200px"}}>
                         <div class="d-grid gap-2" style={{paddingRight:"200px",justifyContent:"center", textAlign:"center", marginLeft:"180px", marginTop:"-100px"}}>
  <button style={{width:"400px", borderRadius:"10px", paddingRight:"300px"}} class="btn btn-light" type="button">Username</button>
  <button style={{width:"400px", borderRadius:"10px",paddingRight:"300px"}} class="btn btn-light" type="button">Password</button>
  <br></br>
  <button type="button" class="btn btn-danger">Login</button>
  <br></br>
  </div>
  </div>  */}
                      
                        

                        </div>
                        </div>
          
  
</div>

                    </div>

               
        
        
     );
}

export default Track;