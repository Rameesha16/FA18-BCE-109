import Header1 from './Header1';
import Header2 from './Header2';
import Slider from './Slider';
import Footer from './Footer';
import Layout4 from './Layout4';
import Prefooter from './Prefooter';
import Aboutus from './Aboutus';



function Layout3() {
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
                    <Slider/>

                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <Layout4 />

                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <Aboutus/>

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

export default Layout3;