import { Route, Routes } from "react-router-dom";
import Explore from "./Components/Explore";
import Grid from "./Components/Grid";
import Privacy from "./Components/Privacy";
import Terms from "./Components/Terms";

function App() {
  return (
    <div className="App">
     
       <Grid/>
      <Routes>
 
  <Route path="/Explore" element={<Explore/>}/>
  
 
  <Route path="Privacy" element = {<Privacy/>}   > Privacy</Route>
  <Route path="Terms" element = {<Terms/>}>Terms</Route>


  

</Routes>






    


    </div>
  );
}

export default App;
