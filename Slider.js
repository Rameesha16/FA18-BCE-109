function Slider() {
    return ( 
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" style={{width:"1400px", marginLeft:"-38px", marginTop:"-17px"}}>
          <div class="carousel-item active">
            <img src={require("../src/images/1.PNG")} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={require("../src/images/2.PNG")} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={require("../src/images/10.PNG")} class="d-block w-100" alt="..."/>
          </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    
        
     );
}

export default Slider;