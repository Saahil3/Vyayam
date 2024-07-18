import React from 'react'
import { Route,Routes } from "react-router-dom";//route btw home page and execersie pageBreakAfter: 
import { Box } from "@mui/material";//box is div with shading and colors
import { useScroll, motion } from "framer-motion";


import './App.css'
import Navbar from './components/Navbar';
import ExerciseDetail from './Pages/ExerciseDetail'
import Home from './Pages/Home'
import Footer from './components/Footer'

const App = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  return (
    <Box width="400px" sx={{width:{xl:'1763px'}}} m='auto' >
       <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer/>
    </Box>
    
  )
}

export default App;