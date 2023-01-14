import React from "react";
import Paginator from "../components/Paginator.jsx";
import Companies from "../components/Companies.jsx";
import { Box } from "@mui/material";
import Services from "../components/Services.jsx";
import Title from "../components/Title.jsx";
import MemberCard from "../components/MemberCard.jsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      dir="rtl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255,255,255,0)",
          backgroundImage:
            "url(https://www.efcf.org.eg/wp-content/uploads/2022/01/Group-24.png)",
          bgPosition: "center",
          backgroundRepeat: "no-repeat",
          borderWidth: "0px",
          borderColor: "#e2e2e2",
          borderStyle: "solid",
          backgroundSize: "cover",
          color: "#fff",
          fontSize: { xs: "26px", lg: "54px" },

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "600px",
          width: "80%",
          mr: 10,
          ml: 10,
          mb: 10,
        }}
      >
        <Box>الاتحاد المصري</Box>
        <Box>للتمويل الاستهلاكي</Box>
      </Box>
      <Services></Services>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Title title="رسالة رئيس الاتحاد"></Title>

        {!matches ? (
          <Box
            sx={{
              color: "#fff",
              fontSize: "17px",
              whiteSpace: "pre-line",
              backgroundColor: "rgba(255,255,255,0)",
              backgroundImage:
                "url(https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/bg.png)",
              bgPosition: "center",
              backgroundRepeat: "no-repeat",
              borderWidth: "0px",
              borderColor: "#e2e2e2",
              borderStyle: "solid",
              backgroundSize: "cover",
              height: "650px",
              width: "75%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: "100px",
                left: "30px",
                width: "550px",
                lineHeight: "2",
              }}
            >
              اعتبر انتخابي كرئيس مجلس إدارة الاتحاد تكليف وجزء من مسئولية
              مجموعة كونتكت تجاه سوق التمويل الاستهلاكي المصري، وأسعى خلال
              الفترة القادمة بالتعاون مع أعضاء المجلس والهيئة العامة للرقابة
              المالية لتفعيل دور الاتحاد وعقد جلسات حوارية مع الشركات المقيدة
              لمناقشة احتياجات الشركات العاملة في مجال التمويل الاستهلاكي
              ومناقشة آليات تطور سوق التمويل الاستهلاكي المصري، إيماناً بأن
              الاتحاد سيجمع كل القائمين على نشاط التمويل الاستهلاكي، فبرغم
              المنافسة روح التعاون دائماً موجودة لأن هدفنا جميعاً في النهاية هو
              تطوير قطاع التمويل الاستهلاكي بشكل عام.. وقد تشرفت بالتعامل مع
              القائمين على شركات التمويل الاستهلاكي ومقدمي الخدمة خلال فترة عمل
              اللجنة التأسيسية، ونسعى جميعا لاستمرار التعاون من خلال الاتحاد.
            </Box>
          </Box>
        ) : (
          <MemberCard
            size="large"
            imgUrl="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/said-zaater.png"
            text1="اعتبر انتخابي كرئيس مجلس إدارة الاتحاد تكليف وجزء من مسئولية مجموعة كونتكت تجاه سوق التمويل الاستهلاكي المصري، وأسعى خلال الفترة القادمة بالتعاون مع أعضاء المجلس والهيئة العامة للرقابة المالية لتفعيل دور الاتحاد وعقد جلسات حوارية مع الشركات المقيدة لمناقشة احتياجات الشركات العاملة في مجال التمويل الاستهلاكي ومناقشة آليات تطور سوق التمويل الاستهلاكي المصري"
            text2="إيماناً بأن الاتحاد سيجمع كل القائمين على نشاط التمويل الاستهلاكي، فبرغم المنافسة روح التعاون دائماً موجودة لأن هدفنا جميعاً في النهاية هو تطوير قطاع التمويل الاستهلاكي بشكل عام.. وقد تشرفت بالتعامل مع القائمين على شركات التمويل الاستهلاكي ومقدمي الخدمة خلال فترة عمل اللجنة التأسيسية، ونسعى جميعا لاستمرار التعاون من خلال الاتحاد"
          ></MemberCard>
        )}
      </Box>
      <Companies></Companies>
      <Paginator></Paginator>
    </Box>
  );
}
