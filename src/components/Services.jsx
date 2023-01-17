import React from "react";
import { Box } from "@mui/system";
import ServiceCard from "./ServiceCard.jsx";
import { textContext } from "../database/Data";
import Title from "./Title.jsx";

export default function services() {
  return (
    <Box sx={{}} className="container">
      <Title title="الخدمات" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "100px",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "40px",
          pt: 5,
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
