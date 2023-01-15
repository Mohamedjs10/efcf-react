import React from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./AboutEFCF";
import Title from "../components/Title.jsx";
import BlueCard from "../components/BlueCard.jsx";
export default function AboutEFCF() {
  return (
    <Box dir="rtl">
      <Box sx={styles.innerContainer}>
        <Box sx={styles.paragraphContainer}>
          <Title title="عن الاتحاد"></Title>
          <Box
            sx={{
              width: { xs: "300px", lg: "600px" },
              lineHeight: "2",
              textAlign: "justify",
            }}
          >
            تأسس الاتحاد المصري للجهات العاملة في مجال التمويل الاستهلاكي الخاضع
            لإشراف الهيئة العامة للرقابة المالية بموجب قانون تنظيم نشاط التمويل
            الاستهلاكي رقم 18 لسنة 2020 والنظام الأساسي الصادر بقرار الهيئة
            العامة للرقابة المالية رقم 47 لسنة 2021 ويعتبر الاتحاد هو قناة
            التواصل والمحرك الرئيسي للتنظيم والتنسيق بين كافة المؤسسات العاملة
            في مجال التمويل الاستهلاكي في جمهورية مصر العربية.
          </Box>
        </Box>
        <Box sx={{ borderRadius: "20px", overflow: "hidden", mb: 5 }}>
          <img
            src="https://image-solution-no-scale.s3.us-east-2.amazonaws.com/upload/about-efcf.png"
            width="100%"
          ></img>
        </Box>{" "}
      </Box>
      <Title title="دور ومهام الاتحاد"></Title>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          p: 5,
          gap: 5,
          mt: 10,
          pt: 5,
          pb: 5,
          color: "#fff",
          bgcolor: "#242d61",
        }}
      >
        <ul
          style={{
            listStyleType: "disc",
            lineHeight: "2.2",

            width: "600px",
          }}
        >
          <li>الدفاع عن مصالح الجهات العاملة في نشاط التمويل الاستهلاكي.</li>
          <li>السعي نحو تسوية المنازعات وزيادة الترابط بين الأعضاء.</li>
          <li>
            توثيق التعاون بين الاتحاد والهيئة والجهات ذات الصلة بما يحقق صالح
            سوق التمويل الاستهلاكي.
          </li>
          <li>
            دعم وتشجيع الأبحاث والدراسات التي تهدف لتطوير منظومة التمويل
            الاستهلاكي في مصر وزيادة كفاءتها وتوسيع شريحة المستفيدين منها.
          </li>
          <li>
            العمل علي حماية حقوق الأعضاء وازالة العقبات التي قد تعترض اداء
            عملهم.
          </li>
          <li>
            التعرف علي افضل التجارب والممارسات في مجال التمويل الاستهلاكي وتنظيم
            تبادل المعارف والخبرات مع الجهات ذات العلاقة داخل وخارج البلاد.
          </li>
        </ul>{" "}
        <ul
          style={{
            listStyleType: "disc",
            lineHeight: "2.2",
            width: "600px",
          }}
        >
          <li>وضع القواعد المنظمة لحقوق والتزامات اعضاء الاتحاد.</li>
          <li>وضع ميثاق شرف المهنة للعاملين في مجال التمويل الاستهلاكي.</li>
          <li>
            وضع دليل عمل استرشادي للجهات العاملة في مجال التمويل الاستهلاكي
            الخاضعة لأحكام قانون تنظيم نشاط التمويل الاستهلاكي وذلك بما لا
            يتعارض مع القوانين السارية والقرارات الصادرة تنفيذاً لها.
          </li>
          <li>
            عقد جلسات حواريه مع الشركات المقيدة لمناقشة احتياجات الشركات العاملة
            في مجال التمويل الاستهلاكي ومناقشة اليات تطور سوق التمويل
            الاستهلاكي.
          </li>
          <li>
            وضع المقترحات وتقديم التوصيات لتنمية نشاط التمويل الاستهلاكي بما في
            ذلك ابداء الرأي في مشروعات القوانين واقتراح تعديل التشريعات القائمة
            التي تتعلق بمزاولة النشاط او تؤثر فيه.
          </li>
        </ul>
      </Box>
      <Box sx={styles.bgImageContainer}>
        <Title title="اهداف الاتحاد"></Title>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            // p: 5,
            mr: 5,
            ml: 5,
            gap: 5,
            mb: 5,
          }}
        >
          <ul
            style={{
              listStyleType: "disc",
              lineHeight: "2.5",
              // listStylePosition: "inside",
            }}
          >
            <li>
              الإسهام في تنمية نشاط التمويل الاستهلاكي وترسيخ مفاهيم واعراف
              ممارسته.
            </li>
            <li>
              زيادة الوعي بنشاط التمويل الاستهلاكي وتبني المبادرات الداعمة له.
            </li>
            <li>
              التأكد من تطبيق اعضاء الاتحاد لميثاق شرف المهنة والقواعد المنظمة
              لحقوق والتزامات الاعضاء.
            </li>
            <li>
              تنمية مهارات العاملين في نشاط التمويل الاستهلاكي من خلال التدريب
              والعمل على رفع كفاءة الجهات التي تزاول هذا النشاط.
            </li>
            <li>التنسيق بين اعضاء الاتحاد بما لا يخل بأحكام القانون</li>
            <li>السعي نحو تسوية المنازعات وزيادة الترابط بين الأعضاء.</li>
            <li>
              توثيق التعاون بين الاتحاد والهيئة والجهات ذات الصلة بما يحقق صالح
              سوق التمويل الاستهلاكي.
            </li>
            <li>
              دعم وتشجيع الأبحاث والدراسات التي تهدف لتطوير منظومة التمويل
              الاستهلاكي في مصر وزيادة كفاءتها وتوسيع شريحة المستفيدين منها.
            </li>
            <li>
              العمل علي حماية حقوق الأعضاء وازالة العقبات التي قد تعترض اداء
              عملهم.
            </li>
            <li>
              التعرف علي افضل التجارب والممارسات في مجال التمويل الاستهلاكي
              وتنظيم تبادل المعارف والخبرات مع الجهات ذات العلاقة داخل وخارج
              البلاد.
            </li>
          </ul>
        </Box>
        <Box sx={styles.cardsContainer}>
          <BlueCard width="280px">
            إعداد اللوائح المالية للاتحاد والنظم المتعلقة بشئون العاملين
            بالاتحاد.
          </BlueCard>
          <BlueCard width="280px">
            إعداد اللائحة الداخلية لعمل الاتحاد وكذلك الأعضاء.
          </BlueCard>
          <BlueCard width="280px">
            رسم السياسة اللازمة لتحقيق أغراض الاتحاد وإدارة الشئون.
          </BlueCard>
          <BlueCard width="280px">
            إعداد سياسة استثمار أموال الاتحاد وقنوات الاستثمار.
          </BlueCard>
          <BlueCard width="280px">
            تبادل الخبرات والمعلومات مع الأجهزة الحكومية وغير الحكومية.
          </BlueCard>
          <BlueCard width="280px">
            تشكيل لجان منبثقة لدراسة موضوعات أو متابعة مشروعات.
          </BlueCard>
        </Box>
      </Box>
    </Box>
  );
}
