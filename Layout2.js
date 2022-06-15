import Header1 from './Header1';
import Header2 from './Header2';
import Footer from './Footer';
import Page1 from './Page1';
import Prefooter from './Prefooter';
function Layout2() {
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
               <Page1/>
           </div>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <div className="row">
            <div className="col-md-12">
<Prefooter/>
            </div>
            </div>
    <div className="row">
            <div className="col-md-12">
<Footer/>
            </div>



    </div>

    </div>
     );
}

export default Layout2;