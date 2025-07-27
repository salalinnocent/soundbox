import MainPlayer from "../components/MainPlayer";
import TopBar from "../components/TopBar"
import React from "react";
//Hero.jsx
const Hero = () => {
  
return(
<section id="hero" className="max-container">
  <div>
  <TopBar/>
  <MainPlayer/>
  </div>
 </section>
)
}
export default Hero;
