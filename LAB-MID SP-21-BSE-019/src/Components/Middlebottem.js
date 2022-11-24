import { useState } from "react";
import "../Csss/MiddleTop.css";


const Middlebottom = () => {
    const [menu, setMenu] = useState([





        {
          id: "1",
          image: (
            <img
              src={require("../flag/portugal.png")}
              alt="nolodead"
              style={{ height: "6vh", width: " 6vw",marginRight:"30px" }}
            />
          ),
          data: "1841.5",
        },
        {
          id: "2",
          image: (
            <img
              src={require("../flag/england.jpg")}
              alt="nolodead"
              style={{ height: "6vh", width: " 6vw" ,marginRight:"90px"}}
            />
          ),
          data: "1781.7",
        },
        {
          id: "3",
          image: (
            <img
              src={require("../flag/spain.png" )}
              alt="nolodead"
              style={{ height: "6vh", width: " 6vw",marginRight:"90px" }}
            />
          ),
          data: "1861.2",
        },
        

        {
          id: "4",
          image: (
            <img
              src={require("../flag/brazeel.png")}
              alt="nolodead"
              style={{ height: "6vh", width: " 6vw",marginRight:"30px" }}
            />
          ),
          data: "1841.5",
        },
        
        {
          id: "5",
          image: (
            <img
              src={require("../flag/amarica.jfif")}
              alt="nolodead"
              style={{ height: "6vh", width: " 6vw" ,marginRight:"90px"}}
            />
          ),
          data: "19875.5",
        },



        {
          id: "6",
          image: (
            <img
              src={require("../flag/R.png")}
              alt="nolodead"
              style={{ height: "6vh", width: " 6vw" ,marginRight:"90px"}}
            />
          ),
          data: "1841.5",
        },
        {
          id: "7",
          image: (
            <img
              src={require("../flag/france.png")}
              alt="nolodead"
              style={{ height: "6vh", width: " 6vw" ,marginRight:"90px"}}
            />
          ),
          data: "1781.7",
        },
        {
          id: "8",
          image: (
            <img
              src={require("../flag/germany.png")}
              alt="nolodead"
              style={{ height: "6vh", width: " 6vw",marginRight:"90px" }}
            />
          ),
          data: "1861.2",
        },
       



      ]);











      

      // const handledelete = () =>{

      // }

  return (
    


    <div id="midt">

        {menu.map((m) => (
          <div className="card" id="cards" style={{width:"300px",height:""}}>
            <div className="card-body">



            <table class="table table-bordered border-primary">
  <th>     <p> {m.image}{m.data} </p></th>
  

</table>



             
            </div>
          </div>
        ))}




        </div>
  );
};

export default Middlebottom;
