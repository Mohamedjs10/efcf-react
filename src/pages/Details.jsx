import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { DB } from "../database/DB";

export default function Details() {
  let { number } = useParams();
  return (
    <>
      {DB.filter((item) => item.number == number).map(
        ({ imgUrl, title, body }) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
              p: 20,
              pt: 5,
              pb: 5,
              textAlign: "right",
              lineHeight: "2",
            }}
            dir="rtl"
          >
            <Box
              sx={{
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img src={imgUrl[0]} width="100%"></img>
            </Box>
            <Box
              sx={{
                alignSelf: "flex-end",
                fontWeight: "bold",
                fontSize: "32px",
                color: "#2d3668",
              }}
            >
              {title}
            </Box>
            <Box sx={{ alignSelf: "flex-end", whiteSpace: "pre-line" }}>
              {body}
            </Box>
          </Box>
        )
      )}
    </>
  );
}
