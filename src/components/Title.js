export const styles = {
  text: (theme) => ({
    color: "#242d61",
    borderRadius: "14px",
    fontSize: "40px",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "8px",
    // marginTop: "50px",
    marginBottom: "30px",
    textAlign: "center",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "110%",
      left: "50%",
      transform: "translateX(-50%)",
      borderRadius: "4px",
      width: "70px",
      height: "8px",
      backgroundColor: "#bb2f2c",
    },
    [theme.breakpoints.down("md")]: {
      "&::after": {
        display: "none",
      },
    },
  }),
};
