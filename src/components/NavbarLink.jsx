import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { styles } from "./NavbarLinkStyle.js";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

export default function NavbarLink({
  text,
  index,
  clickedLink,
  selectedLink,
  down,
  navigation,
}) {
  const navigate = useNavigate();

  return (
    <Box
      sx={styles.link}
      style={{
        color: clickedLink === index && "green",
        borderBottom: clickedLink === index && "3px solid #bb2f2c",
        color: clickedLink === index && "#bb2f2c",
      }}
      to={navigation && `${navigation}`}
      component={Link}
      onClick={() => {
        selectedLink(index);
        // navigate("/members");
      }}
    >
      <Box sx={{ display: "flex" }}>
        {down && <ExpandMoreIcon></ExpandMoreIcon>}
        {text}
      </Box>
    </Box>
  );
}
