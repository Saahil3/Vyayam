import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "none",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={()=>{
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth"});
      }}
    >
      <img src={Icon} style={{ width: "50px", height: "50px" }} />
      


      <Typography
        fontSize="18px"
        fontWeight="550"
        color="#3A1212"
        fontStyle="italic"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
