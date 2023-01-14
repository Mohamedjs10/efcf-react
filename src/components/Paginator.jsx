import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";

import { styles } from "./Paginator";
import { DB_splitter, truncateString } from "../utils/utils";
import Carousel from "./Carousel.jsx";
import { Box } from "@mui/material";
import Title from "../components/Title.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export default function Navbar() {
  const [page, setPage] = React.useState(1);
  const paginatedPages = DB_splitter(page);

  const theme = createTheme({
    direction: "rtl", // Both here and <body dir="rtl">
  });
  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={styles.container} dir="rtl">
      {/* <div>Page: {page}</div> */}
      <Title title="اخر الاخبار"></Title>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {paginatedPages.map((item) => {
          return (
            <Carousel
              width={"350px"}
              images={item.imgUrl}
              title={truncateString(item.title, 80)}
              body={truncateString(item.body, 120)}
            ></Carousel>
          );
        })}
      </Box>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Box sx={styles.counter}>
            <Pagination
              count={6}
              variant="outlined"
              shape="rounded"
              page={page}
              onChange={handleChange}
            />
          </Box>
        </ThemeProvider>
      </CacheProvider>
    </Box>
  );
}
