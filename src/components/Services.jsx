import React from "react";
import { Box } from "@mui/system";
import ServiceCard from "./ServiceCard.jsx";
import { textContext } from "../database/Data";
import Title from "./Title.jsx";

export default function services() {
  return (
    <Box sx={{ pr: 2, pl: 2 }}>
      <Title title="الخدمات" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "100px",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "40px",
        }}
      >
        {textContext.services.map((service) => (
          <ServiceCard
            image={service.serviceImageUrl}
            text={service.serviceName}
            alt={service.imageAlt}
          />
        ))}
      </Box>
    </Box>
  );
}
