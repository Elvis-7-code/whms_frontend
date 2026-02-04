const Loader = ({ text = "Loading..." }) => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>{text}</p>
    </div>
  );
};

const styles = {
  container: {
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    width: "45px",
    height: "45px",
    border: "5px solid #fdbb89",
    borderTop: "5px solid #f47e3b",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  text: {
    marginTop: "12px",
    color: "#000",
    fontWeight: "500",
  },
};

export default Loader;
