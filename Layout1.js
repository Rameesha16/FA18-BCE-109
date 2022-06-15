import Header1 from './Header1';
import Form109 from './Form109';
import Header2 from './Header2';
import Header3 from './Header3';
import Footer from './Footer';
import Prefooter from './Prefooter';


function Layout1() {
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
                <div className="row">
                <div className="col-md-12">
<Header3/>
                </div>



        </div>
        <div className="row">
                <div className="col-md-6">
<Form109/>
                </div>

<div className="col-md-6">

</div>

        </div>
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

export default Layout1;