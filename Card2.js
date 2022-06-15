import {Link} from "react-router-dom";
function Card2(props) {
    return ( 
        
            <div id="card2" style={{display:"flex", flexDirection:"row"}}>
            <div className="container-fluid" style={{display:"flex", flexDirection:"row"}}>
                <div className="row" style={{backgroundColor:"#fefbf9",display:"flex", flexDirection:"row"}}>
                    <div className="col-md-12">
                    <div class="card" style={{width:"18rem"}}>
   <img src={props.img} class="card-img-top" alt=""/>
   <div class="card-body">
     <h5 class="card-title">{props.name}</h5>
     <p class="card-text">{props.price}</p>
    <Link to={props.links}> <a style={{backgroundColor:"black",border:"1px solid black"}} href="#" class="btn btn-primary">View Details</a></Link>
   </div>
 </div>
 
                    </div>
 
                </div>
 
                 
         </div>
         </div>
     );
}

export default Card2;
