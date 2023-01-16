import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
const styles = { bgcolor: "#e0e0e0", "&:hover": { bgcolor: "#e0e0e0" } };

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [isSectionOPen, setIsSectionOPen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState("main");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const navigate = useNavigate();

  const list = (anchor) => (
    <Box dir="rtl" sx={{ width: 300 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setState({ ...state, [anchor]: false });
              navigate("/");
              window.scrollTo(0, 0);
              setSelectedTab("main");
            }}
            sx={selectedTab === "main" && styles}
          >
            <ListItemIcon>
              <TurnedInIcon
                sx={{ color: selectedTab === "main" && "#CD0404" }}
              />
            </ListItemIcon>
            <ListItemText primary={"الرئيسية"} />
          </ListItemButton>
        </ListItem>
        <Divider sx={{ borderBottomWidth: "1px", borderColor: "black" }} />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setState({ ...state, [anchor]: false });
              navigate("/about");
              window.scrollTo(0, 0);

              setSelectedTab("about efcf");
            }}
            sx={selectedTab === "about efcf" && styles}
          >
            <ListItemIcon>
              <TurnedInIcon
                sx={{ color: selectedTab === "about efcf" && "#CD0404" }}
              />
            </ListItemIcon>
            <ListItemText primary={"عن الاتحاد"} />
          </ListItemButton>
        </ListItem>{" "}
        <Divider sx={{ borderBottomWidth: "1px", borderColor: "black" }} />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setIsSectionOPen((prevState) => !prevState);
            }}
          >
            <ListItemIcon>
              <KeyboardArrowDownIcon />
            </ListItemIcon>
            <ListItemText primary={"الاقسام"} />
          </ListItemButton>
        </ListItem>{" "}
        {isSectionOPen && (
          <>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setState({ ...state, [anchor]: false });
                  navigate("/laws");
                  window.scrollTo(0, 0);

                  setSelectedTab("laws");
                }}
                sx={selectedTab === "laws" && styles}
              >
                <ListItemIcon>
                  <TurnedInIcon
                    sx={{ color: selectedTab === "laws" && "#CD0404" }}
                  />
                </ListItemIcon>
                <ListItemText primary={"القوانين"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setState({ ...state, [anchor]: false });
                  navigate("/lists");
                  window.scrollTo(0, 0);

                  setSelectedTab("lists");
                }}
                sx={selectedTab === "lists" && styles}
              >
                <ListItemIcon>
                  <TurnedInIcon
                    sx={{ color: selectedTab === "lists" && "#CD0404" }}
                  />
                </ListItemIcon>
                <ListItemText primary={"القوائم"} />
              </ListItemButton>
            </ListItem>
          </>
        )}
        <Divider sx={{ borderBottomWidth: "1px", borderColor: "black" }} />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setState({ ...state, [anchor]: false });
              navigate("/mangers");
              window.scrollTo(0, 0);

              setSelectedTab("mangers");
            }}
            sx={selectedTab === "mangers" && styles}
          >
            <ListItemIcon>
              <TurnedInIcon
                sx={{ color: selectedTab === "mangers" && "#CD0404" }}
              />
            </ListItemIcon>
            <ListItemText primary={"الادارة التنفيذية"} />
          </ListItemButton>
        </ListItem>{" "}
        <Divider sx={{ borderBottomWidth: "1px", borderColor: "black" }} />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setState({ ...state, [anchor]: false });
              navigate("/members");
              window.scrollTo(0, 0);

              setSelectedTab("members");
            }}
            sx={selectedTab === "members" && styles}
          >
            <ListItemIcon>
              <TurnedInIcon
                sx={{ color: selectedTab === "members" && "#CD0404" }}
              />
            </ListItemIcon>
            <ListItemText primary={"أعضاء مجلس الادارة"} />
          </ListItemButton>
        </ListItem>{" "}
        <Divider sx={{ borderBottomWidth: "1px", borderColor: "black" }} />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setState({ ...state, [anchor]: false });
              navigate("/training");
              window.scrollTo(0, 0);

              setSelectedTab("training");
            }}
            sx={selectedTab === "training" && styles}
          >
            <ListItemIcon>
              <TurnedInIcon
                sx={{ color: selectedTab === "training" && "#CD0404" }}
              />
            </ListItemIcon>
            <ListItemText primary={"التدريب"} />
          </ListItemButton>
        </ListItem>
        <Divider sx={{ borderBottomWidth: "1px", borderColor: "black" }} />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setState({ ...state, [anchor]: false });
              navigate("/form");
              window.scrollTo(0, 0);

              setSelectedTab("contact us");
            }}
            sx={selectedTab === "contact us" && styles}
          >
            <ListItemIcon>
              <TurnedInIcon
                sx={{ color: selectedTab === "contact us" && "#CD0404" }}
              />
            </ListItemIcon>
            <ListItemText primary={"تواصل معنا"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon sx={{ fontSize: 40, color: "#242d61" }} />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </ThemeProvider>
    </CacheProvider>
  );
}
