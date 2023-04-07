import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{
        width: "100px",
        margin: "auto",
        display: "block",
        marginTop: "10rem",
      }}
    />
  );
}

export default Spinner;
