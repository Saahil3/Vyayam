import React from "react";
import { Box, Button, Typography } from "@mui/material";

import HeroBannerImg from "../assets/images/herobanner.jpg";

const Herobanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "1px" } }}
      position="relative"
      p="20px 10px"
    >
      <img src={HeroBannerImg} className="hero-banner-img" />
      <Typography
        position="absolute"
        top="-150px"
        left="620px"
        color="aqua"
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Workout - Sweat - Repeat
      </Typography>
      <Typography
        position="absolute"
        left="710px"
        bottom="30px"
        color="gold"
        fontWeight="600"
        fontSize="22px"
        lineHeight="55px"
        mb={3}
      >
        Check out the most effective workouts
      </Typography>

      <Button
        style={{
          position: "absolute",
          bottom: "100px",
          left: "800px",
          width: "200px",
          color: "goldenrod",
          fontWeight: "600",
          backgroundColor: "aqua",
          borderRadius: "50px",
        }}
        href="#exercises"
      >
        explore
      </Button>
    </Box>
  );
};

export default Herobanner;
