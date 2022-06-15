import Header1 from './Header1';
import Header2 from './Header2';
import Footer from './Footer';
import Unstiched from './Unstiched';
import Unstiched2 from './Unstiched2';
import Unstiched3 from './Unstiched3';
import Prefooter from './Prefooter';


function Layout6() {

 
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
       <Unstiched/>

     </div>
     
     <div>
       <Unstiched2/>
       
     </div>
     <div>
       <Unstiched3/>
       
     </div>
    
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

export default Layout6;