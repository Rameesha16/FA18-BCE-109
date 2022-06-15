import React, {Component} from "react";
import {Link} from "react-router-dom";
class Header3 extends Component {
    state = { 
        text1:"Home/Create Account",
        text2:"CREATE AN ACCOUNT"
     } 
    render() { 
        return (
            <div className="container-fluid">
            <div className="row" style={{height:"50px",width:"1350px", marginLeft:"-38px"}}> 
            <div className="col-md-6">
                <p style={{color:"GrayText", paddingRight:"460px", marginTop:"-10PX"}}>{this.state.text1}</p>
                <h1 style={{fontSize:"20px", paddingRight:"420px", paddingBottom:"100px", marginTop:"-20px"}}>{this.state.text2}</h1>
                
            </div>
            <div className="col-md-6" style={{paddingLeft:"500px"}}>
                 <Link style={{textDecorationLine:"none", color:"black"}} to="/viewbrandcenter"><p>View</p></Link> 

              </div>
            </div>
            <hr></hr>
        </div>
        );
    }
}
 
export default Header3;
