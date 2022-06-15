import React, { Component } from 'react';
import Unstichcard3 from './Unstichcard3';
class Unstiched3 extends Component {
    state = { 
        product: [
           
          
            {id:"009",name:"Fabrics 3 Piece Suit",price:"PKR 7,348",img:require("../src/images/22.PNG") },
            {id:"010",name:"Fabrics 3 Piece Suit",price:"PKR 1,258",img:require("../src/images/23.PNG") },
            {id:"011",name:"Fabrics 3 Piece Suit",price:"PKR 18,348",img:require("../src/images/24.PNG") },
            {id:"012",name:"Fabrics 3 Piece Suit",price:"PKR 3,555",img:require("../src/images/25.PNG") },
          
        ]
     } 
    render() { 
        return (
            <div className="row">
                <div className="col-md-12">

            <div style={{display:"flex", flexDirection:"row", marginBottom:"100px"}}>
            {this.state.product.map (product=>(
                 <Unstichcard3 id={product.id} name={product.name} price={product.price} img={product.img}/>
                 
            ))}
            
        </div>
        </div>
        </div>


        );
    }
}
 
export default Unstiched3;