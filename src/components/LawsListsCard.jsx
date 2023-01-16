import React from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { styles } from "./LawsListsCard.js";
import Pdf1 from "../assets/pdf/النظام-الأساسي-للاتحاد-المصري-للتمويل-الإستهلاكي.pdf";
import Pdf2 from "../assets/pdf/قانون-رقم-18-لسنة-2020.pdf";
export default function LawsListsCard(props) {
  return (
    <Box sx={styles.container}>
      <Box component="p" sx={styles.title}>
        {props.title}
      </Box>
      <Box component="p" sx={styles.paragraph}>
        {props.paragraph}
      </Box>
      <Button
        variant="contained"
        sx={styles.btn}
        component="a"
        href={Pdf1}
        target="_blank"
      >
        إقرأ المزيد
      </Button>
    </Box>
  );
}
