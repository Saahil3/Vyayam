import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography, capitalize } from "@mui/material";
import { color } from "framer-motion";
import { exerciseOptions } from "../utilities/fetchData";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#000",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            fontStyle: "italic",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#000",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            fontStyle: "italic",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml={3}
        fontWeight={700}
        mt={5}
        pb={10}
        fontSize={18}
        textTransform="capitalize"
        color="#000"
      >
        {exercise.name}
      </Typography>

      
    </Link>
  );
};

export default ExerciseCard;
