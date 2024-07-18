import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import "../App.css";
import { exerciseOptions, fetchData } from "../utilities/fetchData";

import HorizontalScrollBar from "./HorizontalScrollBar";

const Search = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(['all',  ...bodyPartsData]);
   

    }
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exerciseData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        mb="50px"
        textAlign="center"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      >
        💪 Chalo Thoda Exercise Karte Hai 🏋️‍♂️
      </Typography>

      {/* <Box position="relative" mb="70px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "50px" },
            width: { lg: "800px", xs: "300px" },
            backgroundColor: "whitesmoke",
          }}
          height="70px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search New Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2526",
            color: "black",
            border: "1px solid lightgrey",
            textTransform: "none",
            width: { lg: "100px", xs: "70px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box> */}

      <Box sx={{position:'relative',width:'100%',p:'20px'}}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  );
};

export default Search;
