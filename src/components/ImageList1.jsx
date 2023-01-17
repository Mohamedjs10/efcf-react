import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";

import React from "react";
import { Box } from "@mui/material";

const list = [image1, image2, image3, image4, image5, image6];

export default function ImageList1() {
  return (
    <Box
      sx={{
        p: 15,
        pt: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        flexWrap: "wrap",
      }}
    >
      {list.map((imgSrc) => (
        <Box
          component="img"
          src={imgSrc}
          width="400px"
          height="300px"
          sx={{ borderRadius: "10px" }}
        ></Box>
      ))}
    </Box>
  );
}
