import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  Fragment,
} from "react";
import { Box } from "@mui/material";
import { styles } from "./ServiceCard.js";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ServiceCard(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box sx={styles.container}>
      <Box sx={styles.image} data-aos="fade-up" data-aos-duration="1100">
        <Box
          sx={styles.img}
          component="img"
          src={props.image}
          alt={props.text}
        ></Box>
      </Box>
      <Box
        sx={styles.text}
        component="span"
        data-aos="fade-up"
        data-aos-duration="1100"
      >
        {props.text}
      </Box>
    </Box>
  );
}
