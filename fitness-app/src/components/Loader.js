import React from "react";
import { Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      width="100%"
    >
        <InfinitySpin color="#00BFFF" height={80} width={80} />
    </Stack>
  );
};

export default Loader;
