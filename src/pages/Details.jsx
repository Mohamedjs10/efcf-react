import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Pdf1 from "../assets/pdf/pdf1.pdf";
import Pdf2 from "../assets/pdf/pdf2.pdf";
import Pdf3 from "../assets/pdf/pdf3.pdf";
import a from "../assets/pdf/a.pdf";
import b from "../assets/pdf/b.docx";
import c from "../assets/pdf/c.docx";
import d from "../assets/pdf/d.pptx";
import e from "../assets/pdf/e.xlsx";
import f from "../assets/pdf/f.pptx";

import { DB } from "../database/DB";

export default function Details() {
  let { number } = useParams();
  return (
    <>
      {DB.filter((item) => item.number == number).map(
        ({
          imgUrl,
          title,
          body,
          extra1,
          extra2,
          extra3,
          extra4,
          extra5,
          extra6,
          extra7,
          extra8,
          flag,
        }) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,

              pl: { xs: 5, lg: 20 },
              pr: { xs: 5, lg: 20 },
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
                fontSize: { xs: "16px", lg: "32px" },
                color: "#2d3668",
              }}
            >
              {title}
            </Box>
            <Box sx={{ alignSelf: "flex-end", whiteSpace: "pre-line" }}>
              {body}
            </Box>
            <Box
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              component={Link}
              to={
                flag == 1
                  ? "/img-list1"
                  : flag == 2
                  ? "/img-list2"
                  : "/img-list3"
              }
              sx={{
                textDecoration: "none",
                color: "#000",
                fontSize: "28px",
                alignSelf: "flex-start",
                whiteSpace: "pre-line",
                fontWeight: "bold",
                "&:hover": {
                  color: "#bb2f2c",
                },
              }}
            >
              {extra1}
            </Box>{" "}
            <Button
              href={flag == 1 ? Pdf1 : flag == 2 ? Pdf2 : Pdf3}
              sx={{
                textDecoration: "none",
                color: "#000",
                fontSize: "28px",
                alignSelf: "flex-start",
                whiteSpace: "pre-line",
                fontWeight: "bold",
                "&:hover": {
                  color: "#bb2f2c",
                },
              }}
            >
              {extra2}
            </Button>
            <Button
              href={a}
              sx={{
                textDecoration: "none",
                color: "#000",
                fontSize: "28px",
                alignSelf: "flex-start",
                whiteSpace: "pre-line",
                fontWeight: "bold",
                "&:hover": {
                  color: "#bb2f2c",
                },
              }}
            >
              {extra3}
            </Button>{" "}
            <Button
              href={b}
              sx={{
                textDecoration: "none",
                color: "#000",
                fontSize: "28px",
                alignSelf: "flex-start",
                whiteSpace: "pre-line",
                fontWeight: "bold",
                "&:hover": {
                  color: "#bb2f2c",
                },
              }}
            >
              {extra4}
            </Button>{" "}
            <Button
              href={c}
              sx={{
                textDecoration: "none",
                color: "#000",
                fontSize: "28px",
                alignSelf: "flex-start",
                whiteSpace: "pre-line",
                fontWeight: "bold",
                "&:hover": {
                  color: "#bb2f2c",
                },
              }}
            >
              {extra5}
            </Button>{" "}
            <Button
              href={d}
              sx={{
                textDecoration: "none",
                color: "#000",
                fontSize: "28px",
                alignSelf: "flex-start",
                whiteSpace: "pre-line",
                fontWeight: "bold",
                "&:hover": {
                  color: "#bb2f2c",
                },
              }}
            >
              {extra6}
            </Button>
            <Button
              href={e}
              sx={{
                textDecoration: "none",
                color: "#000",
                fontSize: "28px",
                alignSelf: "flex-start",
                whiteSpace: "pre-line",
                fontWeight: "bold",
                "&:hover": {
                  color: "#bb2f2c",
                },
              }}
            >
              {extra7}
            </Button>
            <Button
              href={f}
              sx={{
                textDecoration: "none",
                color: "#000",
                fontSize: "28px",
                alignSelf: "flex-start",
                whiteSpace: "pre-line",
                fontWeight: "bold",
                "&:hover": {
                  color: "#bb2f2c",
                },
              }}
            >
              {extra8}
            </Button>
          </Box>
        )
      )}
    </>
  );
}
