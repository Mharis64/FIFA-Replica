import "../Csss/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (  

        <div id="Footer">
             <h1 id="f"> FIFA</h1>
            <logo ></logo>


<div  style={{marginLeft:"200px"}}>
<h1>EXPLORE</h1>

            <Link to = "/Explore">
                <ul>
            
            <li> <Link to="WomensFootball"id='bar'  style={{display:"inline " ,fontSize:"10px"}}>WOMEN FOOTBALL </Link> </li>
      <li> <Link to="AboutFifa"id='bar'  style={{display:"inline",fontSize:"10px"}}>ABOUT FIFA </Link> </li>
      <li> <Link to="SocialImpact"id='bar'  style={{display:"inline",fontSize:"10px"}}>SOCIAL IMPACT </Link> </li>
      <li> <Link to="FootballDev"id='bar'  style={{display:"inline",fontSize:"10px"}}>FOOTBALL DEVOLUPMENT </Link> </li>
      <li> <Link to="Technical"id='bar'  style={{display:"inline",fontSize:"10px"}}>TECHNICAL </Link> </li>
      <li> <Link to="Legal"id='bar'  style={{display:"inline",fontSize:"10px"}}>LEGAL </Link> </li>
      </ul>
     </Link>
     </div>

<div style={{marginLeft:"500px",marginTop:"-200px"}}>
    <h1>Also visit</h1>

    <ul>
            
            <li> <Link to="WomensFootball"id='bar'  style={{display:"inline " ,fontSize:"10px"}}>WOMEN FOOTBALL </Link> </li>
      <li> <Link to="AboutFifa"id='bar'  style={{display:"inline",fontSize:"10px"}}>ABOUT FIFA </Link> </li>
      <li> <Link to="SocialImpact"id='bar'  style={{display:"inline",fontSize:"10px"}}>SOCIAL IMPACT </Link> </li>
      <li> <Link to="FootballDev"id='bar'  style={{display:"inline",fontSize:"10px"}}>FOOTBALL DEVOLUPMENT </Link> </li>
      <li> <Link to="Technical"id='bar'  style={{display:"inline",fontSize:"10px"}}>TECHNICAL </Link> </li>
      <li> <Link to="Legal"id='bar'  style={{display:"inline",fontSize:"10px"}}>LEGAL </Link> </li>
      </ul>

</div>


                         </div>
        
    );
}
 
export default Footer;
