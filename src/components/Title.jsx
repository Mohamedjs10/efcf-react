import React from "react";
import { Box } from "@mui/material";
import { styles } from "./Title.js";

export default function Title({ title }) {
  return <Box sx={styles.text}>{title}</Box>;
}
