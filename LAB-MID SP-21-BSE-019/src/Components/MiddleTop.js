import "../Csss/MiddleTop.css";
import { useState } from "react";
const MiddleTop = () => {
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
      data: "MUHAMMAD SALAH",
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
      data: "MESSI",
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
      data: "MESSI",
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
      data: "KARIM BENZAMA",
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
      data: "PELE",
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
      data: "CRICTIANO RONALDO",
    },
    {
      id: "3",
      image: (
        <img
          src={require("../images/ronaldo.jfif")}
          alt="nolodead"
          style={{ height: "10vh", width: " 15vw" }}
        />
      ),
      data: "CRISTIANO NONALDO",
    },
    {
      id: "3",
      image: (
        <img
          src={require("../images/img3.jfif")}
          alt="nolodead"
          style={{ height: "10vh", width: " 15vw" }}
        />
      ),
      data: "SWARAIZ",
    },

    {
      id: "3",
      image: (
        <img
          src={require("../images/ronaldo2.jfif")}
          alt="nolodead"
          style={{ height: "10vh", width: " 15vw" }}
        />
      ),
      data: "CRISTIANO RONALDO",
    },
  ]);


  const handleDelete2 = ()=>{
    console.log("clicked 2");
  }

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

       

        {submenu.map((sb) => (
          <div className="card" id="cards">
            <div className="card-body">
              <p> {sb.image}</p>
              <h5 className="card-title">{sb.data}</h5>

                        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiddleTop;
