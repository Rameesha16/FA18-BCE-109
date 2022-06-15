import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruckFast} from '@fortawesome/free-solid-svg-icons';
import {faClockFour} from '@fortawesome/free-solid-svg-icons';
import {faLocation} from '@fortawesome/free-solid-svg-icons';
class Prefooter extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container-fluid">
                <div style={{display:"flex", flexDirection:"row", backgroundColor:"#f7e1dd", marginLeft:"-33px", width:"1350px"}} className="row">
                    <div style={{marinTop:"10px"}} className="col-md-4"  >
                    <FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon>
                    <p style={{fontWeight:"bold"}}>Shipping Charges</p>
                    <p style={{marginTop:"-20px"}}>Flat Rs. 149 on all orders</p>

                    </div>
                    <div style={{}} className="col-md-4">
                    <FontAwesomeIcon icon={faClockFour}></FontAwesomeIcon>
                    <p style={{fontWeight:"bold"}}>Support 24/7</p>
                    <p style={{marginTop:"-20px"}}>Contact Us 24 hours a day, 7 days a week</p>

                    </div>
                    <div style={{marinTop:"10px"}} className="col-md-4">
                    <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                    <p style={{fontWeight:"bold"}}>Track your orders</p>
                    <p style={{marginTop:"-20px"}}>Track your oders for quick update</p>
                    </div>

                </div>

            </div>

        );
    }
}
 
export default Prefooter;