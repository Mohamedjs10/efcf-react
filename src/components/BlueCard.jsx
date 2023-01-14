import React from "react";
import { Box } from "@mui/material";

export default function BlueCard({ text, width, children }) {
  return (
    <Box
      sx={{
        width,
        borderRadius: "8px",
        color: "#fff",
        bgcolor: "#242d61",
        p: "30px",
      }}
    >
      {/* {text} */}
      {children}
    </Box>
  );
}
