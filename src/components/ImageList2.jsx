import image7 from "../assets/images/image7.jpeg";
import image8 from "../assets/images/image8.jpeg";
import image9 from "../assets/images/image9.jpeg";
import image10 from "../assets/images/image10.jpeg";
import image11 from "../assets/images/image11.jpeg";
import image12 from "../assets/images/image12.jpeg";
import image13 from "../assets/images/image13.jpeg";
import image14 from "../assets/images/image14.jpeg";
import image15 from "../assets/images/image15.jpeg";
import image16 from "../assets/images/image16.jpeg";
import image17 from "../assets/images/image17.jpeg";
import image18 from "../assets/images/image18.jpeg";
import image19 from "../assets/images/image19.jpeg";
import image20 from "../assets/images/image20.jpeg";
import image21 from "../assets/images/image21.jpeg";
import image22 from "../assets/images/image22.jpeg";
import image23 from "../assets/images/image23.jpeg";
import image24 from "../assets/images/image24.jpeg";
import image25 from "../assets/images/image25.jpeg";
import image26 from "../assets/images/image26.jpeg";
import image27 from "../assets/images/image27.jpeg";
import image28 from "../assets/images/image28.jpeg";
import image29 from "../assets/images/image29.jpeg";
import image30 from "../assets/images/image30.jpeg";
import image31 from "../assets/images/image31.jpeg";
import image32 from "../assets/images/image32.jpeg";
import image33 from "../assets/images/image33.jpeg";
import image34 from "../assets/images/image34.jpeg";
import React from "react";
import { Box } from "@mui/material";

const list = [
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
];

export default function ImageList2() {
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
