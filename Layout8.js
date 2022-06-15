import Header1 from './Header1';
import Header2 from './Header2';
import Footer from './Footer';
import Lookbook from './Lookbook';
import Prefooter from './Prefooter';

function Layout8() {
    return ( 
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
<Header1/>
            </div>
            
        </div>
            <div className="row">
            <div className="col-md-12">
<Header2/>
            </div>
            </div>
            <div>
       <Lookbook/>

     </div>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     
       <div>
           <Prefooter/>
           </div>  
   
    <div className="row">
            <div className="col-md-12">
<Footer/>
            </div>



    </div>

    </div>
     );
}

export default Layout8;