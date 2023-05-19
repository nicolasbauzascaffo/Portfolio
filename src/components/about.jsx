import * as React from "react";
import Button from "@mui/material/Button";
import "../styles/about.css";
import photo from "../img/img.png";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import cv from "../data/Nicolás Bauzá - Software Developer.pdf";

const About = () => {
  return (
    <div id="about" className="about">
      <section className="section1">
        <h2>Who I am?</h2>
        <p>
          My name is Nicolás Bauzá Scaffo. I am from Montevideo Uruguay. Since I
          was a child, I always felt a great attraction for technology; which
          encouraged me to take this path. During my life I not only dedicated
          myself to this, but I was also in the Army for more than 11 years;
          where I learned a fundamental pillar for working life: Discipline. I
          had the opportunity to work for the United Nations in Democratic
          Republic of Congo (Africa) where I gained a lot of experience in
          leading human groups and teamwork. If you slide you can see some of
          the projects i have worked on.
        </p>
        <Button
          style={{ textDecoration: "none", color: "white" }}
          variant="contained"
          endIcon={<FileDownloadIcon />}
        >
          <a
            style={{ textDecoration: "none", color: "white" }}
            href={cv}
            download
          >
            Download CV
          </a>
        </Button>
      </section>
      <section className="section2">
        <img src={photo} />
      </section>
    </div>
  );
};

export default About;
