import React, { Component } from 'react';
import Unstichcard2 from './Unstichcard';
class Unstiched2 extends Component {
    state = { 
        product: [
           
            {id:"005",name:"Fabrics 3 Piece Suit",price:"PKR 2,348",img:require("../src/images/8.PNG") },
            {id:"006",name:"Fabrics 3 Piece Suit",price:"PKR 4,348",img:require("../src/images/19.PNG") },
            {id:"007",name:"Fabrics 3 Piece Suit",price:"PKR 5,348",img:require("../src/images/20.PNG") },
            {id:"008",name:"Fabrics 3 Piece Suit",price:"PKR 1,308",img:require("../src/images/21.PNG") },
          
          
        ]
     } 
    render() { 
        return (
            <div className="row">
                <div className="col-md-12">

            <div style={{display:"flex", flexDirection:"row", marginBottom:"100px"}}>
            {this.state.product.map (product=>(
                 <Unstichcard2 id={product.id} name={product.name} price={product.price} img={product.img}/>
                 
            ))}
            
        </div>
        </div>
        </div>


        );
    }
}
 
export default Unstiched2;