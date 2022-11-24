
import { Link } from "react-router-dom";
import "../Csss/Navbar.css";

const Navbar = () => {
    return ( 
 

<nav class="nav-extended"  style={{backgroundColor:"white"}}>
    <div class="nav-wrapper">
    
        <div class="nav-wrapper">
         
          <ul id="nav-mobile" class="left hide-on-med-and-down">
          <title>
            : : : fifa : : :
          </title>
        <li>   <img src=""></img ></li>
          <li><Link to="sass.html"><i class="material-icons" style={{marginLeft:"50rem", color:"blue"}}>search</i></Link></li>
           <li> <Link to="Store"id='bar'  style={{display:"inline",color:"blue"}}>Store</Link></li>
           <li> <Link to="Ticket"id='bar'  style={{display:"inline", color:"blue"}}>Tickets </Link> </li>
           <li> <Link to="Login" id='bar' style={{display:"inline",color:"blue"}}>Log In </Link></li>
            
         


          </ul>


          
        </div>



    
      
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
      <li> <Link to="TournamentOnFifa"id='bar'  style={{display:"inline",fontSize:"10px",color:"blue"}}>TOURNAMENT ON FIFA 
      
      <ul class="tournament">

      <li style={{margin: "10px"}}>aaa</li>
      <li style={{margin: "10px"}}>aaa</li>
      <li style={{margin: "10px"}}>bbb</li>



      </ul>
      
      </Link> </li>
      <li> <Link to="WomensFootball"id='bar'  style={{display:"inline " ,fontSize:"10px"}}>WOMEN FOOTBALL </Link> </li>
      <li> <Link to="AboutFifa"id='bar'  style={{display:"inline",fontSize:"10px"}}>ABOUT FIFA </Link> </li>
      <li> <Link to="SocialImpact"id='bar'  style={{display:"inline",fontSize:"10px"}}>SOCIAL IMPACT </Link> </li>
      <li> <Link to="FootballDev"id='bar'  style={{display:"inline",fontSize:"10px"}}>FOOTBALL DEVOLUPMENT </Link> </li>
      <li> <Link to="Technical"id='bar'  style={{display:"inline",fontSize:"10px"}}>TECHNICAL </Link> </li>
      <li> <Link to="Legal"id='bar'  style={{display:"inline",fontSize:"10px"}}>LEGAL 

      <ul class="tournament11">

      <li> <Link to="Privacy"id='bar'  style={{display:"inline",fontSize:"10px"}}>Privacy</Link> </li>
      <li> <Link to="Terms"id='bar'  style={{display:"inline",fontSize:"10px"}}>Terms </Link> </li>


      </ul>
      
      
      
      </Link>
      
      
       </li>
      <li> <Link to="WorldRanking"id='bar'  style={{display:"inline",fontSize:"10px"}}>WORLD RANKING 
      
      <ul class="tournament1">

      <li style={{margin: "5px"}}>Men's ranking</li>
      <li style={{margin: "5px"}}>Women's ranking</li>
      <li style={{margin: "5px"}}>News</li>
      <li style={{margin: "5px"}}>Ranking procedures Men</li>
      <li style={{margin: "5px"}}>Ranking procedures Women</li>




      </ul>
      
      
      </Link> </li>

      
      </ul>
    </div>
  </nav>
         
     );
}
 
export default Navbar;