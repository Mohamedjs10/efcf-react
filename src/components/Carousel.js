export const styles = {
  container: (theme) => ({
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
    border: "1px solid #e5e5e5",
    borderRadius: "10px",
    justifyContent: "center",
    textDecoration: "none",
    color: "#000",

    transition: "transform .2s",
    "&:hover": { transform: "scale(1.1)", color: "#bb2f2c" },
  }),
  line: (theme) => ({
    height: "10px",
    width: "200px",
    borderTop: "1px solid #e5e5e5",
    borderBottom: "1px solid #e5e5e5",
    margin: "0 auto",
  }),
  text: (theme) => ({
    textAlign: "right",
    p: 1,
    whiteSpace: "pre-line",
    textAlign: "right",
  }),
};
