import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utilities/fetchData";
import ExerciseCard from "./ExerciseCard";


const Exercise = ({ exercises, setExercises, bodyPart }) => {
  
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 5

  const indexofLastExercise=currentPage*exercisesPerPage;
  const indexofFirstExercise=indexofLastExercise-exercisesPerPage;
  const currentExercises = exercises.slice(indexofFirstExercise, indexofLastExercise)

  const paginate=(event,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1400 , behavior:"smooth"})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises",exerciseOptions);
        
      }
      else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }
      setExercises(exercisesData);
    }

    fetchExercisesData();
  }, [bodyPart])
  


  return (
    <Box id="exercises" sx={{ mt: { lg: "50px" } }} mt="50px" p="20px">
      <Typography  display='flex' alignItems='center' justifyContent='center' variant="h4" mb="60px" fontWeight='bold'>
        Most Popular Exercises
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard 
            key={index} 
            exercise={exercise}
            
          />
        ))}
      </Stack>

      <Stack mt={4} alignItems='center'>
          {exercises.length>5 && (
            <Pagination
              color="standard"
              // shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
      </Stack>
    </Box>
  );
}

export default Exercise