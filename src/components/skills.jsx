import React from "react";
import "../styles/skills.css";
import html from "../img/icons8-html-5-150.png";
import css from "../img/icons8-css3-250.png";
import js from "../img/icons8-javascript-250.png";
import node from "../img/icons8-nodejs-256.png";
import react from "../img/icons8-reaccionar-nativo-250.png";
import sql from "../img/icons8-postgresql-250.png";
import mui from '../img/icons8-material-ui-240.png'
import ex from '../img/icons8-express-js-250.png'

const Skills = () => {
  return (
    <div id="technologies" className="skills">
      <h2>Technologies</h2>
      <section className="icons">
        <img src={html} />
        <img src={css} />
        <img src={js} />
        <img src={react} />
        <img src={node} />
        <img src={sql} />
        <img src={mui} />
        <img src={ex} />
      </section>
    </div>
  );
};

export default Skills;
