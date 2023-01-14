export const styles = {
  container: (theme) => ({
    color: "#ffffff",
    bgcolor: "#242d61",
    textAlign: "right",
  }),
  paragraphsContainer: (theme) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
    p: 2,
    justifyContent: { xs: "flex-end", lg: "center" },
  }),
  paragraph: (theme) => ({
    m: 5,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    alignItems: "flex-end",
    width: "400px",
  }),
  image_next_text: (theme) => ({
    display: "flex",
    justifyContent: "flex-end",
    mb: 2,
    gap: 1,
  }),
};
