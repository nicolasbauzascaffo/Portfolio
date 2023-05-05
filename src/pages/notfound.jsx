import * as React from "react";
import "../styles/notfound.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Notfound = () => {
  return (
    <div className="notfound">
      <Link to='/' >
        <Button variant="outlined" startIcon={<ArrowBackIcon />} color="error">
        Not Found | Back Home
        </Button>
      </Link>
    </div>
  );
};

export default Notfound;
