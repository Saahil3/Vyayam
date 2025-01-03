import React from 'react'
import { useState } from 'react'
import { Box } from "@mui/material";
import Herobanner from '../components/Herobanner';
import Search from '../components/Search';
import Exercise from '../components/Exercise';


const Home = () => {
  
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all')

  

  return (
    <Box>
      <Herobanner/>
      <Search setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercise  exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}  />
    </Box>
  )
}

export default Home