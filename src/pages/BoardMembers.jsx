import React from "react";
import { styles } from "./BoardMembers.js";
import Title from "../components/Title.jsx";
import { Box } from "@mui/material";
import MemberCard from "../components/MemberCard";

export default function BoardMembers() {
  return (
    <Box
      dir="rtl"
      sx={{
        m: 3,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title title="اعضاء مجلس الادارة"> </Title>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
          m: 6,
        }}
      >
        <MemberCard
          size="large"
          imgUrl="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/said-zaater.png"
          text1="الأستاذ/ سعيد علي علي زعتر"
          text2="رئيس مجلس الإدارة"
        ></MemberCard>
        <MemberCard
          size="large"
          imgUrl="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/default.png"
          text1="الأستاذ/ هشام محمد عزالدين أبوالدهب"
          text2="نائب رئيس مجلس الإدارة"
        ></MemberCard>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          {" "}
          <MemberCard
            size="small"
            imgUrl="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/osama-fareed.jpeg"
            text1="الأستاذ/ أسامه فريد طاهر فريد"
            text2="عضو مجلس الإدارة"
          ></MemberCard>
          <MemberCard
            size="small"
            imgUrl="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/yasmine-helal.jpeg"
            text1="الأستاذة/ ياسمين هلال حامد محمد"
            text2="عضو مجلس الإدارة"
          ></MemberCard>{" "}
          <MemberCard
            size="small"
            imgUrl="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/ayman-mohamaden.jpeg"
            text1="الأستاذ/ أيمن محمدين محمد صالح"
            text2="عضو مجلس الإدارة"
          ></MemberCard>{" "}
          <MemberCard
            size="small"
            imgUrl="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/default.png"
            text1="الأستاذ/ أحمد أسامه محمود فوزي"
            text2="عضو مجلس الإدارة"
          ></MemberCard>{" "}
          <MemberCard
            size="small"
            imgUrl="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/default.png"
            text1="الأستاذ/ علاء محمد محمد مرسي"
            text2="عضو مجلس الإدارة"
          ></MemberCard>
        </Box>
      </Box>
    </Box>
  );
}
