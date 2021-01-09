import React from "react";
import main from "../img/Cartoon.png";
const About = () => {
  return (
    <div className="img-container">
      <div className="about-container">
        <h1>About us</h1>
        <p className="about-p">
          IN THE HEART OF THE GOWANUS CANAL, BOND ST. COFFEE AND GOODS EMERGES
          TO SERVE THE LOCAL PEOPLE THEIR DAILY DRIP WITH LOVE AND PASSION. WE
          STRIVE DAILY TO SERVE QUALITY GOOD.
        </p>
      </div>
      <div className="img">
        <img src={main} alt="burger" />
      </div>
    </div>
  );
};

export default About;
