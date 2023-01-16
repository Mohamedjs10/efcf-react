import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  Fragment,
} from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Title from "../components/Title.jsx";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BlueCard from "../components/BlueCard";
import { styles } from "./Form.js";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import location from "../assets/images/location.png";
import phone from "../assets/images/phone.png";
import mail from "../assets/images/mail.png";
import ReCapcha from "../components/ReCapcha";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function Direction() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Title
          title="تواصل معنا
"
        ></Title>
        <Box
          dir="rtl"
          sx={{
            pt: 10,
            pb: 10,
            flexWrap: "wrap",
            display: "flex",
            justifyContent: "center",
            gap: 4,
            alignItems: "flex-start",
          }}
        >
          <Box
            dir="rtl"
            sx={{
              flexWrap: "wrap",
              maxWidth: 700,
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexWrap: "wrap",
              gap: 5,
            }}
          >
            <TextField
              required
              label="الاسم"
              variant="outlined"
              sx={styles.input}
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
            />
            <TextField
              required
              label="البريد الالكتروني"
              variant="outlined"
              sx={styles.input}
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
            />
            <TextField
              label="رقم الهاتف"
              variant="outlined"
              sx={styles.input}
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => {
                  return { ...prev, phone: e.target.value };
                })
              }
            />
            <TextField
              label="الشركة"
              variant="outlined"
              sx={styles.input}
              value={userData.company}
              onChange={(e) =>
                setUserData((prev) => {
                  return { ...prev, company: e.target.value };
                })
              }
            />
            <TextField
              label="الرسالة"
              variant="outlined"
              sx={{
                width: { xs: "300px", md: "640px" },
              }}
              rows={4}
              required
              multiline
              value={userData.message}
              onChange={(e) =>
                setUserData((prev) => {
                  return { ...prev, message: e.target.value };
                })
              }
            />
            <ReCapcha></ReCapcha>

            <Button
              variant="contained"
              sx={{
                width: { xs: "200px", md: "640px" },
                height: "60px",
                bgcolor: "#bb2f2c",
                ":hover": {
                  bgcolor: "#bb2f2c",
                },
              }}
              onClick={() => {
                console.log(userData);
                setUserData({
                  name: "",
                  email: "",
                  phone: "",
                  company: "",
                  message: "",
                });
              }}
            >
              ارسال
            </Button>
          </Box>
          <BlueCard width="350px">
            <Box sx={{ fontSize: "32px", textAlign: "center", pb: 2 }}>
              تواصل معنا
            </Box>
            <Box sx={styles.image_next_text}>
              <img src={location} width={"40px"} height={"40px"}></img>
              <span>1 ميدان طلعت حرب-القاهره</span>
            </Box>
            <Box sx={styles.image_next_text}>
              <img src={phone} width={"40px"} height={"40px"}></img>
              <span>01158320993</span>
            </Box>
            <Box sx={styles.image_next_text}>
              <img src={phone} width={"40px"} height={"40px"}></img>
              <span>01022077936</span>
            </Box>
            <Box sx={styles.image_next_text}>
              <img src={mail} width={"40px"} height={"40px"}></img>
              <span>support@efcf.org.eg</span>
            </Box>
          </BlueCard>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
