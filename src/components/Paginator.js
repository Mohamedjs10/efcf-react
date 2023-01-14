export const styles = {
  container: (theme) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: { xs: "center", lg: "flex-end" },
    gap: 1,
    alignItems: "center",
  }),
  counter: (theme) => ({
    alignSelf: { xs: "center", lg: "flex-end" },
    pr: { xs: 0, lg: 5 },
    pt: 1,
    pb: 3,
  }),
};
