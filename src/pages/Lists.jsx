import React from "react";
import { Box } from "@mui/system";
import LawsListsCard from "../components/LawsListsCard.jsx";
import { textContext } from "../database/Data";
import Title from "../components/Title.jsx";

export default function Lists() {
  return (
    <Box>
      <Title title="القوائم السلبية" />
      <Box
        sx={{
          display: "flex",
          marginBottom: "50px",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          p: 4,
        }}
      >
        {textContext.lists.map((list) => (
          <LawsListsCard title={list.title} paragraph={list.paragraph} />
        ))}
      </Box>
    </Box>
  );
}
