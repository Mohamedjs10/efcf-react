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
    transition: "transform .5s",
    "&:hover": { transform: "scale(1.05)", color: "#bb2f2c" },
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
  link: (theme) => ({
    textDecoration: "none",
    color: "#000",
    "&:hover": { color: "#bb2f2c" },
  }),
};
