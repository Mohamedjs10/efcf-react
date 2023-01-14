export const styles = {
  container: (theme) => ({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    p: 1,
  }),
  innerContainer: (theme) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
    p: 5,
  }),
  paragraphContainer: (theme) => ({
    display: "flex",
    flexDirection: "column",
    // flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  }),
  bgImageContainer: (theme) => ({
    pt: 5,
    backgroundColor: "rgba(255, 255, 255, 0)",
    backgroundImage:
      "url(https://www.efcf.org.eg/wp-content/uploads/2022/01/عن-الاتحاد.png)",
    bgPosition: "center",
    backgroundRepeat: "no-repeat",
    borderWidth: "0px",
    borderColor: "#e2e2e2",
    borderStyle: "solid",
    backgroundSize: "cover",
  }),
  cardsContainer: (theme) => ({
    maxWidth: "1200px",
    // minWidth: "300px",

    display: "flex",
    flexWrap: "wrap",
    gap: 3,
    margin: "0 auto",
    justifyContent: { xs: "center", lg: "flex-start" },
    alignItems: "center",
    pb: 20,
  }),
};
