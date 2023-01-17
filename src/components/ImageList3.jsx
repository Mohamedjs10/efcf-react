import image35 from "../assets/images/image35.jpg";
import image36 from "../assets/images/image36.jpg";
import image37 from "../assets/images/image37.jpg";
import image38 from "../assets/images/image38.jpg";
import image39 from "../assets/images/image39.jpg";
import image40 from "../assets/images/image40.jpg";
import image41 from "../assets/images/image41.jpg";
import image42 from "../assets/images/image42.jpg";
import image43 from "../assets/images/image43.jpg";
import image44 from "../assets/images/image44.jpg";
import image45 from "../assets/images/image45.jpg";
import image46 from "../assets/images/image46.jpg";
import image47 from "../assets/images/image47.jpg";
import image48 from "../assets/images/image48.jpg";
import image49 from "../assets/images/image49.jpg";
import image50 from "../assets/images/image50.jpg";
import image51 from "../assets/images/image51.jpg";
import image52 from "../assets/images/image51.jpg";
import image53 from "../assets/images/image53.jpg";
import image54 from "../assets/images/image54.jpg";
import image55 from "../assets/images/image55.jpg";
import image56 from "../assets/images/image56.jpg";
import image57 from "../assets/images/image57.jpg";
import image58 from "../assets/images/image58.jpg";
import image59 from "../assets/images/image59.jpg";
import image60 from "../assets/images/image60.jpg";
import image61 from "../assets/images/image61.jpg";

import React from "react";
import { Box } from "@mui/material";

const list1 = [
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44,
  image45,
  image46,
  image47,
  image48,
  image49,
  image50,
  image51,
  image52,
  image53,
  image54,
  image55,
  image56,
  image57,
  image58,
  image59,
  image60,
  image61,
];

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
      {list1.map((imgSrc) => (
        <Box
          component="img"
          src={imgSrc}
          width="400px"
          height="300px"
          sx={{
            borderRadius: "10px",
            // width: { xs: "200", lg: "400px" },
            // height: { xs: "150", lg: "300px" },
          }}
        ></Box>
      ))}
    </Box>
  );
}
