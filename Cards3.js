import React, { Component } from 'react';
import Card4 from './Card4';
class Cards3 extends Component {
    state = { 
        product: [
            {id:"001", name:"Allure Flora-Printed-2P",price:"PKR 2,401", img:require("../src/images/27.PNG")},
            {id:"002", name:"Midnight Gray-Printed-2P",price:"PKR 1,502",img:require("../src/images/28.PNG") },
            {id:"003",name:"Classical Craft-Printed-2P",price:"PKR 1,348",img:require("../src/images/29.PNG") },
            {id:"004",name:"Fabrics 3 Piece Suit",price:"PKR 1,448",img:require("../src/images/30.PNG") },
       
           
          
        ]
     } 
    render() { 
        return (
            <div className="row">
                <div className="col-md-12">

            <div style={{display:"flex", flexDirection:"row", marginBottom:"100px"}}>
            {this.state.product.map (product=>(
                 <Card4 id={product.id} name={product.name} price={product.price} img={product.img}/>
                 
            ))}
            
        </div>
        </div>
        </div>


        );
    }
}
 
export default Cards3;