import "../Csss/MiddleTop.css";
import { useState } from "react";
const Aside = () => {
  const [menu, setMenu] = useState([
    {
      id: "1",
      image: (
        <img
          src={require("../images/download.jpg")}
          alt="nolodead"
          style={{ height: "30vh", width: " 15vw" }}
        />
      ),
      data: "LIONAL MESSI",
    },
    {
      id: "2",
      image: (
        <img
          src={require("../images/messi.jpg")}
          alt="nolodead"
          style={{ height: "30vh", width: " 15vw" }}
        />
      ),
      data: "MUHAMMAD SALAH",
    },
    {
      id: "3",
      image: (
        <img
          src={require("../images/messi1.jpg")}
          alt="nolodead"
          style={{ height: "30vh", width: " 15vw" }}
        />
      ),
      data: "LIONAL MESSI",
    },

    

  ]);


  const handledelete= (ID) =>{
console.log("clicked");
  
  }

  // end of menu

  const [submenu, setSubmenu] = useState([
    {
      id: "1",
      image: (
        <img
          src={require("../images/benzama.jpg")}
          alt="nolodead"
          style={{ height: "10vh", width: " 15vw" }}
        />
      ),
      data: "Fifa World Cup 2021",
    },
    {
      id: "2",
      image: (
        <img
          src={require("../images/pele.jpg")}
          alt="nolodead"
          style={{ height: "10vh", width: " 15vw" }}
        />
      ),
      data: "Fifa World Cup 2020",
    },
    {
      id: "3",
      image: (
        <img
          src={require("../images/ronaldo.jfif")}
          alt="nolodead"
          style={{ height: "6vh", width: " 7vw", display:"inline" }}
        />
      ),
      data: "Fifa World Cup 2022",
    },
   
    

    
  ]);

 

  return (
    <div>
      <div id="midt">
        {menu.map((m) => (
          <div className="card" id="cards">
            <div className="card-body">
              <p> {m.image}</p>
              <h5 className="card-title">{m.data}</h5>

                         </div>
          </div>
        ))}

        

        
      </div>
    </div>
  );
};

export default Aside;
