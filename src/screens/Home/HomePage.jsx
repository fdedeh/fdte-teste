import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/pokemonLogo.png";

const HomePage = () => (
  <div className="home">
    <div>
      <img src={logo} />
      <div className="start">
        <Link className="btn" to="/map">
          START
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
