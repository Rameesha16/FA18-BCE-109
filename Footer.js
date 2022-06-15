function Footer() {
    return (  
    <div className="container-fluid">
        <div className="row" style={{backgroundColor:"#f8edeb",width:"1350px", marginLeft:"-38px", paddingTop:"30px"}}>
            <div className="col-md-4">
                <ul style={{listStyle:"none"}}> 
                <a> <li style={{fontWeight:"bold"}}>INFORMATION </li></a>
                <a><li> ABOUT US </li></a>
                <a><li> CONTACT US </li></a>
                <a><li> STORE LOCATER </li></a>
                <a><li> BLOG </li></a>
                    
                </ul>

            </div>
            <div className="col-md-4">
                <ul style={{listStyle:"none"}}> 
                <a> <li style={{fontWeight:"bold"}}>HELP </li></a>
                <a><li> PRIVACY POLICY </li></a>
                <a><li> FAQS </li></a>
                <a><li> EXCHANGE POLICY </li></a>
           
                    
                </ul>

            </div>
            <div className="col-md-4">
                <ul style={{listStyle:"none"}}> 
                <a> <li style={{fontWeight:"bold"}}>FOLLOW US </li></a>
                <a><li> FACEBOOK </li></a>
                <a><li> INSTAGRAM </li></a>
                
                    
                </ul>

            </div>

        </div>

        <div className="row" style={{backgroundColor:"#f7e1dd",width:"1350px", marginLeft:"-38px"}}>
        <p>© BRANDCENTER BY HKB RETAIL (SMC-Pvt) Limited 2021. <code>Developed by Alchemative</code></p>
    </div>
</div>
    
    );
}

export default Footer;