import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../asset/pizza.jpeg";
import "../styles/Home.css";
function Home() {
  return (
    <div className="Home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Pizza FreeTime</h1>
        <p>Pizza to fit any taste</p>
        <Link to="/menu"></Link>
        <button>ORDER NOW</button>
      </div>
    </div>
  );
}

export default Home;
