import React from "react";
import { styles } from "./MemberCardStyle";
import { Box } from "@mui/material";
import pic from "../assets/images/yasmine-helal.jpeg";
import "../assets/fonts/cairo.ttf";

export default function MemberCard({ size, imgUrl, text1, text2 }) {
  return (
    <Box
      sx={{
        ...styles.container,
        width: size === "small" ? "200px" : "300px",
        // maxWidth: size === "small" ? "400px" : "600px",
      }}
    >
      <Box
        component="img"
        sx={styles.img}
        alt="yasmine-helal"
        src={imgUrl}
        width="100%"
      />
      <Box sx={styles.text}>{text1}</Box>
      <Box sx={styles.text}>{text2}</Box>
    </Box>
  );
}
