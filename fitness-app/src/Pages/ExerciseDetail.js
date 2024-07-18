import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData, ytoptions } from "../utilities/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const ytsearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

      

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${ytsearchUrl}/search?query=${exerciseDetailData.name}`,
        ytoptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetexerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetexerciseData);

      const equipmentexerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentexerciseData); 

    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
    </Box>
  );
};

export default ExerciseDetail;
