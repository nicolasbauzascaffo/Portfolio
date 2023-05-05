import React from "react";
import avatar from "../img/Imagen_de_WhatsApp_2023-04-21_a_las_08_48_32-transformed (1).png";
import git from "../img/icons8-github-40.png";
import ld from "../img/icons8-linkedin-40.png";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div id="main" className="header">
      <section className="first-section">
        <h1   lang="en"
              translate="no" >Nicolás Bauzá / Software Developer</h1>
        <h3>
          Hello, i ´m Nicolás, Software Developer; swipe and you can know more
          about me and my projects.
        </h3>
        <section className="social-section">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="https://github.com/nicolasbauzascaffo"
          >
            <img src={git} />
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="https://www.linkedin.com/in/nicol%C3%A1s-bauz%C3%A1-48a8a0244/"
          >
            <img src={ld} />
          </Link>
        </section>
      </section>
      <section className="second-section">
        <img src={avatar} />
      </section>
    </div>
  );
};

export default Header;
