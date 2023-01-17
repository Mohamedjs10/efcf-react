export const styles = {
  container: (theme) => ({
    bgcolor: "white",
    position: "sticky",
    top: 0,
    zIndex: "2",
    borderBottom: "1px solid #EDEDED",
    mb: 10,
  }),
  content: (theme) => ({
    display: "flex",
    gap: 1,
    justifyContent: "space-between",
    alignItems: "center",
  }),
  navbar_container: (theme) => ({
    display: "flex",
    alignItems: "center",
    gap: 2,
  }),
  logo_container: (theme) => ({
    width: "350px",
    height: "100px",
  }),
};
