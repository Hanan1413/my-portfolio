import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="main">
      {/* Continer */}
      <div className="continer">
        <p className="name">Hi, my name is </p>
        <p className="second-name">Hanan Ibrahim </p>
        <h2 className="job">I'm a frontEnd developer</h2>
   
        <div>
              <Link to="/projects" className="button ">View Work
              <span className=" group duration" >
              <HiArrowNarrowRight className="arrow" />
            </span></Link>
          
         
          
        </div>
      </div>
    </div>
  );
}

export default Home;
