import React, { Component } from 'react';
class Newin1 extends Component {
    state = {} 
    render() { 
        return (
            <div id="card2" style={{display:"flex", flexDirection:"row"}}>
           <div className="container-fluid" style={{display:"flex", flexDirection:"row"}}>
               <div className="row" style={{backgroundColor:"#fefbf9",display:"flex", flexDirection:"row"}}>
                   <div className="col-md-12">
                   <div class="card" style={{width:"18rem"}}>
  <img src={this.props.img} class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">{this.props.name}</h5>
    <p class="card-text">{this.props.price}</p>
    <a style={{backgroundColor:"black",border:"1px solid black"}} href="#" class="btn btn-primary">View Details</a>
  </div>
</div>

                   </div>

               </div>

                
        </div>
        </div>
        );
    }
} 
export default Newin1;