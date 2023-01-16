import React, { useState, useEffect } from "react";
import location from "../assets/images/location.png";
import phone from "../assets/images/phone.png";
import mail from "../assets/images/mail.png";
import { Box } from "@mui/material";
import { styles } from "./FooterStyle.js";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.paragraphsContainer}>
        <Box sx={styles.paragraph}>
          <Box>تواصل معنا</Box>
          <Box>
            <Box
              component="a"
              href="https://goo.gl/maps/sxfMi3FH497J7xen8"
              sx={styles.image_next_text}
            >
              <span>ميدان طلعت حرب - القاهرة</span>
              <img src={location} width={"40px"} height={"40px"}></img>
            </Box>
            <Box
              component="a"
              href="tel:+201158320993"
              sx={styles.image_next_text}
            >
              <span>01158320993</span>
              <img src={phone} width={"40px"} height={"40px"}></img>
            </Box>
            <Box
              component="a"
              href="mailto:support@efcf.org.eg?subject=Mail%20from%20Our%20Site"
              sx={styles.image_next_text}
            >
              <span>support@efcf.org.eg</span>
              <img src={mail} width={"40px"} height={"40px"}></img>
            </Box>
          </Box>
        </Box>{" "}
        <Box sx={styles.paragraph} style={{ width: "200px" }}>
          <Box>اخر الاخبار</Box>
          <Box
            component={Link}
            sx={{ textDecoration: "none", color: "#ffffff" }}
          >
            القوانين أعضاء
          </Box>{" "}
          <Box
            component={Link}
            sx={{
              textDecoration: "none",
              color: "#ffffff",
            }}
          >
            مجلس الادارة
          </Box>
        </Box>{" "}
        <Box sx={styles.paragraph}>
          <Box>عن الاتحاد</Box>
          <Box>
            تأسس الاتحاد المصري للجهات العاملة في مجال التمويل الاستهلاكي الخاضع
            لإشراف الهيئة العامة للرقابة المالية بموجب قانون تنظيم نشاط التمويل
            الاستهلاكي
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          color: "#8c8989",
          textAlign: "center",
          borderTop: "1px solid #8c8989",
          p: 10,
          pb: 3,
          pt: 3,
        }}
      >
        جميع الحقوق محفوظه2023 | للاتحاد التمويل الاستهلاكي©{" "}
      </Box>
    </Box>
  );
}
