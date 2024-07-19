import React from "react";
import "./Hero.css";
import heroArt from "../../assests/art1.svg";
import art1 from "../../assests/Git.svg";
import art2 from "../../assests/Instagram.svg";
import art3 from "../../assests/Linkedin.svg";

const Hero = () => {
  return (
    <div className="parent">
      <div className="paraChild">
        <div>
          <h4>Olá pessoas, </h4>

          <p>EU SOU UM 
          PROGRAMADOR</p>

          <h4>Seja bem-vindo ao meu portifólio website</h4>
        </div>
        <button>Click-Me</button>
        <div className="arts">
          <img src={art1} alt="" />
          <img src={art2} alt="" />
          <img src={art3} alt="" />
        </div>
      </div>
      <div className="imagechild">
        <img src={heroArt} alt="" />
      </div>
    </div>
  );
};

export default Hero;
