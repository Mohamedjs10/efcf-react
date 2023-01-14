import { Box } from "@mui/system";
import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styles } from "./NavbarLinkStyle";
import { useNavigate } from "react-router-dom";

export default function DropdownWrapper({ children }) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id="basic-button"
        onClick={handleClick}
        // sx={styles.link}
        style={{ textDecoration: "none" }}
      >
        {children}
      </Button>
      <Menu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        dir="rtl"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            navigate("/laws");
            handleClose();
          }}
          sx={{ width: "100px", m: 1 }}
        >
          القوانين
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/lists");
            handleClose();
          }}
          sx={{ width: "100px", m: 1 }}
        >
          القوائم
        </MenuItem>
      </Menu>
    </>
  );
}
