import React from "react";
import "../styles/footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <h2>Get in touch</h2>
      <section className="links-section">
        <Link style={{textDecoration:'none', color:'white'}} to="https://github.com/nicolasbauzascaffo">
          <Button variant="contained" endIcon={<GitHubIcon />}>
            GitHub
          </Button>
        </Link>
        <Link style={{textDecoration:'none', color:'white'}} to="https://www.linkedin.com/in/nicol%C3%A1s-bauz%C3%A1-48a8a0244/">
          <Button variant="contained" endIcon={<LinkedInIcon />}>
            LinkedIn
          </Button>
        </Link>
      </section>
      <section className="footer-contacts" >
        <p>+598 96 103 064 / nicolasbauza21@gmail.com</p>
        <p>©2023Copyright: Nicolás Bauzá</p>
      </section>
    </div>
  );
};

export default Footer;
