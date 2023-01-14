import React from "react";
import { styles } from "./BoardMembers.js";
import Title from "../components/Title.jsx";
import { Box } from "@mui/material";
import MemberCard from "../components/MemberCard";

export default function BoardMembers() {
  return (
    <Box dir="rtl" sx={{ m: 3 }}>
      <Title title="الادارة التنفيذية"> </Title>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
          m: 6,
        }}
      >
        <MemberCard
          size="large"
          imgUrl="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/ashraf-hasheesh.png"
          text1="الأستاذ/ أشرف عبدالحميد حشيش"
          text2="المدير التنفيذي"
        ></MemberCard>
        <MemberCard
          size="large"
          imgUrl="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/safia-mohamed.jpg"
          text1="الأستاذة/ صفية محمد علي برهان"
          text2="الأمين العام"
        ></MemberCard>
      </Box>
    </Box>
  );
}
