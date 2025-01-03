import React from "react";
import { Link } from "react-router-dom";
import {Box, Stack , Typography} from '@mui/material'
import "../App.css";

import Logo from "../assets/images/newlogo.jpg";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      className="nav-stack" width='100%'
      sx={{ gap: { sm: "122px", xs: "40px" } }}
    >
      <div id="logo">
      <Link to="/">
        <img id="logoimg" src={Logo}/>
      </Link>
      <Typography fontWeight='500' fontSize='30px' padding='0 20px'>vyayam</Typography>
      </div>
      
      
      <Stack
        padding="0 80px"
        direction="row"
        fontSize="25px"
        gap="40px"
        alignItems="center"
      >
        
        <Link to="/" className="nav-link">
          Home
        </Link>
        <a href="#exercises" className="nav-link">Exercise</a>
        
      </Stack>
    </Stack>
  );
};

export default Navbar;
