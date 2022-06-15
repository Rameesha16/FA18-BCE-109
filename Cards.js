import React, { Component } from 'react';
import {useEffect, useState} from "react";
import Card2 from './Card2';
import { viewcardData } from "./Service/api";
// class Cards extends Component {
//     state = { 
  
//         product: [
//             {id:"001", name:"Noir Hues-Printed-3P",price:"PKR 2,401", img:require("../src/images/14.PNG"),links:"/Carddescription"},
//             {id:"002", name:"Flora Fantasia-Printed-2P",price:"PKR 1,502",img:require("../src/images/15.PNG"),links:"/" },
//             {id:"003",name:"Dusky Breeze-Printed-2P",price:"PKR 1,348",img:require("../src/images/16.PNG"),links:"/" },
//             {id:"004",name:"Fabrics 3 Piece Suit",price:"PKR 1,448",img:require("../src/images/17.PNG"),links:"/" },
           
           
          
//         ]
//      } 
//     render() { 
   

function Cards() {
    const [carddata,setdata]=useState([]);  
 
    useEffect(async ()=>{
        const response = await viewcardData();
        setdata(response.data)
     },[]);
    
     const fetch = () => {
         return carddata.map(carddata => <Card2 name={carddata.name} price={carddata.price} img={carddata.img} links={carddata.links}/>)
     }
        return (
            <div className="row">
                <div className="col-md-12">

            <div style={{display:"flex", flexDirection:"row", marginBottom:"100px"}}>
           { fetch()}
            
        </div>
        </div>
        </div>


        );
    }

 
export default Cards;