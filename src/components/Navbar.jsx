import React, { useState, useEffect } from "react";
import NavbarLink from "./NavbarLink";
import logo from "../assets/images/logo.png";
import { Box } from "@mui/material";
import { styles } from "./NavbarStyle.js";
import DropdownWrapper from "../components/DropdownWrapper.jsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import BurgerMenu from "../components/BurgerMenu.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [clickedLink, selectedLink] = useState("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const navigate = useNavigate();

  return (
    <Box sx={styles.container}>
      {matches ? (
        <BurgerMenu></BurgerMenu>
      ) : (
        <Box sx={styles.navbar_container}>
          <NavbarLink
            text="تواصل معنا"
            index="1"
            clickedLink={clickedLink}
            selectedLink={selectedLink}
            navigation="/form"
          ></NavbarLink>
          <NavbarLink
            text="التدريب"
            index="2"
            clickedLink={clickedLink}
            selectedLink={selectedLink}
            navigation="/training"
          ></NavbarLink>
          <NavbarLink
            text="أعضاء مجلس الادارة"
            index="3"
            clickedLink={clickedLink}
            selectedLink={selectedLink}
            navigation="/members"
          ></NavbarLink>
          <NavbarLink
            text="الادارة التنفيذية"
            index="4"
            clickedLink={clickedLink}
            selectedLink={selectedLink}
            navigation="/mangers"
          ></NavbarLink>

          <DropdownWrapper>
            <NavbarLink
              down={true}
              text="الاقسام"
              index="5"
              clickedLink={clickedLink}
              selectedLink={selectedLink}
            ></NavbarLink>
          </DropdownWrapper>
          <NavbarLink
            text="عن الاتحاد"
            index="6"
            clickedLink={clickedLink}
            selectedLink={selectedLink}
            navigation="/about"
          ></NavbarLink>
          <NavbarLink
            text="الرئيسية"
            index="7"
            clickedLink={clickedLink}
            selectedLink={selectedLink}
            navigation="/"
          ></NavbarLink>
        </Box>
      )}
      <Box sx={styles.logo_container}>
        <Link to="/">
          <Box
            component="img"
            alt="yasmine-helal"
            src={logo}
            width="100%"
            // onClick={() => {
            //   navigate("/");
            // }}
          />
        </Link>
      </Box>
    </Box>
  );
}
