import Header from "../components/header";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Footer from "../components/footer";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <Header id="main" className="header" />
      <About id="about" className="about" />
      <Skills id="technologies" className="skills" />
      <Projects id="projects" className="projects" />
      <Footer id="contact" className="footer" />
    </div>
  );
};

export default Home;
