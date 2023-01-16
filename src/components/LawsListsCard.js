export const styles = {
  container: (theme) => ({
    height: "350px",
    width: "350px",
    boxShadow: "0px 10px 51px 3px rgb(0 0 0 / .15)",
    borderRadius: "10px",
    backgroundColor: "white",
    padding: "30px",
    display: "flex",
    gap: 3,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  }),
  title: (theme) => ({
    fontWeight: "bold",
    fontSize: "26px",
    textAlign: "center",
  }),
  paragraph: (theme) => ({
    fontSize: "16px",
    textAlign: "center",
    color: "#323232",
  }),
  btn: (theme) => ({
    curser: "pointer",
    backgroundColor: "#bb2f2c",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#bb2f2c",
      color: "white",
    },
  }),
};
