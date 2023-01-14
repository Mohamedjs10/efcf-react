import React from "react";
import { Box } from "@mui/system";
import LawsListsCard from "../components/LawsListsCard.jsx";
import { textContext } from "../database/Data";
import Title from "../components/Title.jsx";

export default function Laws() {
  return (
    <Box>
      <Title title="القوانين" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {textContext.laws.map((law) => (
          <LawsListsCard title={law.title} paragraph={law.paragraph} />
        ))}
      </Box>
    </Box>
  );
}
