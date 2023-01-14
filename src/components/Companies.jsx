import React from "react";
import { Box } from "@mui/system";
import CompanyCard from "./CompanyCard.jsx";
import { textContext } from "../database/Data";
import Title from "./Title.jsx";

export default function Companies() {
  return (
    <Box sx={{ mr: 20, ml: 20, width: "80%" }}>
      <Title title="الشركات" />
      <Box
        sx={{
          display: "grid",
          marginBottom: "50px",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "10px",
        }}
      >
        {textContext.companies.map((company) => (
          <CompanyCard
            image={company.imageUrl}
            alt={company.name}
            url={company.link}
          />
        ))}
      </Box>
    </Box>
  );
}
