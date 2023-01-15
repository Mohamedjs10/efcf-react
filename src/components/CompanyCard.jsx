import React from "react";
import { Box } from "@mui/system";
import { styles } from "./CompanyCard.js";

export default function CompanyCard(props) {
  return (
    <Box sx={styles.container} component="a" href={props.url} target="_blank">
      <Box
        sx={{
          transition: "transform .2s",
          "&:hover": { transform: "scale(1.3)", color: "#bb2f2c" },
        }}
        component="img"
        src={props.image}
        alt={props.name}
        title={props.name}
      ></Box>
    </Box>
  );
}
