import Home from "./pages/home";
import "./App.css";
import Notfound from "./pages/notfound";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

function App() {
  return (
    <div id="app" className="App">
      <a href="#app">
        <Fab
          className="navigate"
          sx={{
            position: "fixed",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            height: "35px",
            width: "20px",
            backgroundColor:'pink'
          }}
          variant="extended"
        >
          <NavigationIcon sx={{
            width:'18px', color:'rgb(31, 31, 31)'
          }} />
        </Fab>
      </a>
      <Routes>
        <Route path="/" element={<Layout id="layout" />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
