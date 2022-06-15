import React, { Component } from 'react';
import Unstichcard from './Unstichcard';
class Unstiched extends Component {
    state = { 
        product: [
            {id:"001", name:"Fabrics 3 Piece Suit",price:"PKR 2,401", img:require("../src/images/14.PNG")},
            {id:"002", name:"Fabrics 3 Piece Suit",price:"PKR 1,502",img:require("../src/images/15.PNG") },
            {id:"003",name:"Fabrics 3 Piece Suit",price:"PKR 1,348",img:require("../src/images/16.PNG") },
            {id:"004",name:"Fabrics 3 Piece Suit",price:"PKR 1,448",img:require("../src/images/17.PNG") },
         
          
        ]
     } 
    render() { 
        
        return (
            <div className="row">
                <div className="col-md-12">
                    <img style={{marginTop:"-18px", marginLeft:"-14px"}} src={require("../src/images/13.PNG")}></img>
                    <p style={{marginLeft:"-1150px", marginTop:"10px", color:"GrayText"}}>Home/Unstiched/Fabrics</p>
                    <br></br>

            <div style={{display:"flex", flexDirection:"row", marginBottom:"100px"}}>
            {this.state.product.map (product=>(
                 <Unstichcard id={product.id} name={product.name} price={product.price} img={product.img}/>
                 
            ))}
            
        </div>
        </div>
        </div>


        );
    }
}
 
export default Unstiched;