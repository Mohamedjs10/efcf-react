import React from "react";
import Carousel from "../components/Carousel.jsx";
import { DB } from "../database/DB.js";
import { Box } from "@mui/system";
import { DB_splitter, truncateString } from "../utils/utils";

export default function Training() {
  return (
    <Box
      dir="rtl"
      sx={{
        pt: 10,
        pb: 10,
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1100px",
        }}
      >
        {DB.filter((item) => item.flag == true).map((item) => {
          return (
            <Carousel
              width={"350px"}
              images={item.imgUrl}
              title={truncateString(item.title, 90)}
              body={truncateString(item.body, 125)}
              number={item.number}
            ></Carousel>
          );
        })}
      </Box>
    </Box>
  );
}
