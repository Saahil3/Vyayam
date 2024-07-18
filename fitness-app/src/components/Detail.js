import React from "react";
import { Typography, Stack, Button, capitalize } from "@mui/material";

import bodypartimg from "../assets/icons/body-part.png";
import targetimg from "../assets/icons/target.png";
import equipmentimg from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    { icon: bodypartimg, name: bodyPart },
    { icon: targetimg, name: target },
    { icon: equipmentimg, name: equipment },
  ];

  return (
    <Stack
      
      sx={{flexDirection: { lg: "row" }, p: "50px", alignItems: "center" , justifyContent:'center', backgroundColor:'whitesmoke', margin:'0 100px', borderRadius:'30px', gap:'150px', border:'1px solid #fcc275'}}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h4" mb={-2} fontWeight="bold">
          {name}
        </Typography>

        <Typography variant="h6" width={500}>
          Get Moving! Regular exercise boosts your physical and mental health,
          enhancing energy and mood. Set clear goals, stay consistent, and enjoy
          the journey to a healthier you!{" "}
        </Typography>
        <Typography variant="h6" mb={-2} fontWeight="bold">
          Recommended For
        </Typography>

        {extraDetail.map((item) => (
          <Stack key={item.id} direction="row" gap="20px" alignItems="center" padding={1} borderRadius={20} width={250} border='2px solid lightgreen'>
            <Button sx={{backgroundColor:'#fcc757', borderRadius:'50%'}}>
              <img style={{width:'50px',height:'50px', padding:'5px'}} src={item.icon} alt={item.name} />
            </Button>
            <Typography mr={1} textTransform={'capitalize'} fontStyle={'italic'} variant="h6"fontWeight="bold">
              {item.name}
            </Typography>
          </Stack>
        ))}

        
      </Stack>
    </Stack>
  );
};

export default Detail;
