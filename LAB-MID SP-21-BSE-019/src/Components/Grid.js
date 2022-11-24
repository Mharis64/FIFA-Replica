import "../Csss/Grid.css";

import Navbar from "../Components/Navbar"
import MiddleTop from "./MiddleTop";
import LeftBar from "./LeftBar";
import Middlebottom from "./Middlebottem";
import Footer from "./Footer";
const Grid = () => {
    return ( 

        <div>

        
        <div id="navbar">

            <section id="top">
              <Navbar />
            </section>

            {/* <section id="btm">
                <Navbar2 />
            </section> */}
            </div> 
 {/* end of navbar  */}

            <div id = "middle" className="row">

                    <div id="Aside" className="col-3">
                       
                        <LeftBar />
                    </div> 
 {/* // end of Aside */}




                    <div id="rightside" className="col-9">
  
                        <section id="righttop" >
                           
                            
                            <MiddleTop / >

                        </section> 

                        <section id="rightbtm" >
                        <h1 style={{marginLeft:"250px"}}>men</h1>
                           <Middlebottom />
                        

                        </section> 




                        

                    </div> 

                    

            </div> 
 

        
        <div className="row" id="footer">
            <Footer />
        </div>

        </div>

     );
}
 
export default Grid;