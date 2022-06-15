import React, {Component} from "react";
class Header1 extends Component {
    state = { 
        heading1:"UAN # +92-42-000-000-000 (MON-SAT:9 to 9)",
        heading2:"FREE SHIPPING WITHIN PAKISTAN ABOVE PKR 2000",
        headding3:"customercare@brandcenter.pk"

     } 
    render() { 
        return (
            <div className="container-fluid">
            <div className="row" style={{backgroundColor:"#f8edeb", height:"40px", display:"flex", flexDirection:"row", width:"1350px", marginLeft:"-36px"}}>
<div className="col-md-3">

    <p style={{fontSize:"12px", paddingLeft:"35px", marginTop:"7px"}}> {this.state.heading1} </p>
   
</div>
<div className="col-md-5" style={{ paddingLeft:"200px", paddingTop:"10px"}}>
    <p style={{fontSize:"12px"}}>
    {this.state.heading2}
    </p>

</div>
<div className="col-md-4" style={{ paddingLeft:"250px", paddingTop:"10px"}}>
<p style={{fontSize:"12px"}}>{this.state.headding3}</p>

</div>

            </div>
            
            <hr style={{width:"1350px", marginLeft:"-38px", marginTop:"-1.8px", color:"black"}}></hr>
        </div>
        

        );
    }
}
 
export default Header1;
