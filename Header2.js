import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBatteryEmpty, faSadCry, faSadTear, faSearch, faSmile} from '@fortawesome/free-solid-svg-icons';
import {faTruckFast} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";


function Header2(props) {

    return ( 
        <div className="container-fluid">
            <div className="row" style={{display:"flex", flexDirection:"row", height:"75px", backgroundColor:"white",  width:"1350px", marginLeft:"-38px"}}>
                <div className="col-md-2">
                    <img style={{height:"70px", width:"120px", marginLeft:"85px"}} src={require("../src/images/logo.png")}></img>

                </div>
                <div className="col-md-6" style={{justifyContent:"center", textAlign:"center", paddingLeft:"120px"}}>
          
  <div class="container-fluid" style={{justifyContent:"center", textAlign:"center", marginLeft:"135px"}}>

      <ul class="navbar-nav" style={{display:"flex", flexDirection:"row"}}>
        <li class="nav-item" style={{paddingTop:"9px", color:"black"}}>
          <a style={{color:"black"}} class="nav-link active" aria-current="page" href=""><Link style={{color:"black",textDecorationLine:"none"}} to="/">HOME</Link></a>
        </li>
        <li class="nav-item" style={{paddingTop:"9px", paddingLeft:"20px", color:"black"}}>
          <a style={{color:"black"}} class="nav-link" href=""><Link style={{color:"black",textDecorationLine:"none" }} to="/New">NEW ARRIVALS</Link></a>
        </li>
        <li class="nav-item" style={{paddingTop:"9px", paddingLeft:"20px", color:"black"}}>
          <a style={{color:"black"}} class="nav-link" href=""><Link style={{color:"black",textDecorationLine:"none"}} to="/Unstich">UNSTITCHED</Link></a>
        </li>
        <li class="nav-item" style={{paddingTop:"9px",paddingLeft:"20px", color:"black"}}>
          <a style={{color:"black"}} class="nav-link" href=""><Link style={{color:"black",textDecorationLine:"none"}} to="/Look">LOOK BOOK</Link></a>
        </li>
      </ul>
    </div>
 


                </div>

  
<div className="col-md-4" style={{paddingTop:"8px", paddingLeft:"180px"}}>
<div class="container-fluid">

<ul class="navbar-nav" style={{display:"flex", flexDirection:"row"}}>
  <li class="nav-item" style={{paddingTop:"14px", color:"black"}}>
    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
  </li>
  <li class="nav-item" style={{paddingTop:"13px", paddingLeft:"10px", color:"black", marginBottom:"1px"}}>
    <p>|</p>
  </li>
  <li class="nav-item" style={{paddingTop:"9px", paddingLeft:"10px", color:"black"}}>
    <div style={{display:"flex", flexDirection:"row", marginTop:"5px"}}>
   <Link style={{color:"black",textDecorationLine:"none"}} to="track"> <FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon></Link>
    <p style={{marginTop:"4px", fontSize:"12px", marginLeft:"5px"}}>Track Order</p>
    </div>
  </li>
  <li class="nav-item" style={{paddingTop:"12px",paddingLeft:"10px", color:"black"}}>
 <Link style={{color:"black",textDecorationLine:"none"}} to="Signup"> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Link>
  </li>
  
         
   <li class="nav-item" style={{paddingTop:"13px",paddingLeft:"10px", color:"black"}}>
 <Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{color:"black",textDecorationLine:"none"}} to="/cart"><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon><span style={{height:"18px", width:"22px"}} class="position-absolute  translate-middle badge rounded-pill bg-dark">
    0
    </span></Link>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Add To Cart</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <h1>CART IS EMPTY...</h1>
  <FontAwesomeIcon style={{width:"100px", height:"100px", marginTop:"100px"}} icon={faSmile}></FontAwesomeIcon>
  </div>
</div>

 
  </li> 
</ul>
  </div>
  
  
            </div>
        </div>
       <hr style={{width:"1350px", marginLeft:"-38px", marginTop:"-1.8px", color:"black"}}></hr>
        </div>
     );
}

export default Header2;