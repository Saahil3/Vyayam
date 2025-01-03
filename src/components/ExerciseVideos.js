import React from "react";
import { Typography, Box, Stack } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {

  console.log(exerciseVideos);

  if (!exerciseVideos.length)
    return (
      <Typography
        fontStyle={"italic"}
        fontWeight={400}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        fontSize={30}
        color={"lightseagreen"}
        mt={10}
      >
        Loading Exercise Videos...
      </Typography>
    );
  return (
    <Box
      sx={{flexDirection: { lg: "row" }, p: "50px",height:'900px', alignItems: "center" , justifyContent:'center', backgroundColor:'aquamarine', margin:'50px 100px', borderRadius:'30px', border:'1px solid #fcc275'}}
    >
      <Typography fontStyle={'italic'} display={'flex'} alignItems={'center'} justifyContent={'center'} gap='10px'  variant="h4" mb="43px">
        explore {" "}
        <span style={{fontStyle:"normal",fontSize:'40px', color: "#ff2625", textTransform: "capitalize"}}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>

      <Stack
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"space-around"}
        sx={{
          flexDirection: { lg: "row" },
          // gap: { lg: "80px", xs: "20px" },
          borderRadius: "4px",
          
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{borderRadius:'20px', border:'3px solid #fcc275'}} src={item.video.thumbnails[0].url} />
            <Box>
              <Typography variant="h5" color="lightseagreen" fontSize={20} fontWeight={600} >
                {item.video.title.slice(0,39)}
              </Typography>
              <Typography fontSize={15} fontStyle={'italic'}  color="#000" fontWeight={600} >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
