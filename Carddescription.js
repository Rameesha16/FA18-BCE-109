import {Link} from "react-router-dom";
function Carddescription(props) {
  const { product,onAdd } = props;
  return ( 
    <div className="fluid container">
    <div className="row">
        <div className="col-md-6">
            <p style={{marginLeft:"-450px", fontSize:"14px"}}>Home    /   Sale   /   Allure Flora-Printed-2P</p>
            <div style={{display:"flex", flexDirection:"row"}}>
            <img style={{marginLeft:"-100px", marginTop:"20px", height:"350px"}} src={require("../src/images/72.PNG")}></img>
            <img style={{ marginTop:"20px", marginLeft:"40px", width:"400px"}} src={require("../src/images/73.jpeg")}></img>
            </div>
        </div>
        <div style={{marginLeft:"-60px", marginTop:"50px"}} className="col-md-6">
            <div className="row">
                <div className="col-md-12">
            <h1 style={{fontSize:"25px", fontFamily:"sans-serif"}}>Allure Flora-Printed-2P</h1>
            <p style={{ color:"GrayText", marginLeft:"62px",FontSize:"3px"}}>SKU: MB2S22U15-MULTI-2000000193343-2P</p>
            <div  className="row" style={{display:"flex", flexDirection:"row", paddingLeft:"172px" }}>
                <div className="col-md-6">
            <img style={{marginTop:"8px",marginLeft:"-30px"}} src={require("../src/images/11.PNG")}></img>
            </div>
            <div style={{display:"flex", flexDirection:"row", paddingTop:"11px", fontSize:"12px", paddingLeft:"20px"}} className="col-md-6">
            <p style={{fontWeight:"bold", maarginTop:"10px", marginLeft:"110px", color:"black"}}>Availability:</p>
            <p style={{fontWeight:"bold", maarginTop:"10px", marginLeft:"2px", color:"green"}}>In</p>
            <p style={{fontWeight:"bold", maarginTop:"10px", marginLeft:"2px", color:"green"}}> Stock</p>


            </div>
            <hr></hr>
            <div style={{display:"flex", flexDirection:"row", marginLeft:"-30px", marginTop:"10px"}}>
           <p style={{color:"GrayText"}}>Size:</p>
           <img style={{height:"30px", paddingLeft:"10px"}} src={require("../src/images/45.PNG")}></img>
           </div>
           <div style={{display:"flex", flexDirection:"row", marginLeft:"-30px", marginTop:"10px"}}>
           <p style={{color:"GrayText"}}>Qty:</p> 
           <input style={{width:"70px", marginLeft:"10px", height:"30px", paddingLeft:"27px", marginBottom:"30px"}} type="number"  className="number-spinner" ></input>
           </div>
           <hr></hr>
           <div style={{display:"flex", flexDirection:"row", marginLeft:"75px", marginBottom:"30px", marginTop:"20px"}}>
       <Link to="/cart"><button onClick={() => onAdd(product)} style={{marginLeft:"-100px", backgroundColor:"white", color:"black",border:"1px solid black", width:"300px"}} type="button" class="btn btn-primary btn-lg">ADD TO CART</button></Link>
<button style={{backgroundColor:"black",border:"1px solid white", width:"300px", marginLeft:"10px"}} type="button" class="btn btn-secondary btn-lg">BUY IT NOW</button>
           </div>
           <hr style={{width:"2000px", marginTop:"-1.8px", color:"black"}}></hr>
<div>
<div class="accordion accordion-flush" id="accordionFlushExample">
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingOne">
<button style={{fontWeight:"bold", backgroundColor:"white"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
Description
</button>
</h2>
<div style={{marginleft:"-100px"}} id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
<div  class="accordion-body">

  <p style={{color:"GrayText", marginLeft:"-100px"}}><code>*</code> 1.75 Mtrs Printed Lawn Shirt</p>
  <p style={{color:"GrayText",marginLeft:"-140px"}}><code>*</code> 1.65 Mtrs Dyed Pants</p>

</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingTwo">
<button style={{fontWeight:"bold",backgroundColor:"white"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
Delivery Details
</button>
</h2>
<div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
<div class="accordion-body">
<p style={{color:"GrayText", marginLeft:"-10px"}}><code> * </code>Please note that your order dispatch can take longer than usual due to ongoing "MID SEASON SALE"</p>
<p></p>
</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="flush-headingThree">
<button style={{fontWeight:"bold",backgroundColor:"white"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
Note
</button>
</h2>
<div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
<div class="accordion-body">
<p style={{color:"GrayText"}}><code>*</code> Actual product color may vary slightly from the image</p>
</div>
</div>
</div>
</div>
</div>
            </div>
            </div>
            </div>

        </div>

    </div>

</div>
   );
}


 
export default Carddescription;