import "./styles.css";

const Progresscircle = ({ value }) => {
  const progress = value > 100 ? 100 : value;
  const circleStyles = {
    transform: `rotate(${(progress / 100) * 360}deg)`,
  };

  return (
    <>
      <div className="check2">
        <h3
          style={{
            paddingLeft: "20px",
            marginBottom: "-10px",
          }}
        >
          Audience
        </h3>
        <div className="progress-circle">
          <div className="circle" style={circleStyles}></div>
        </div>
      </div>
    </>
  );
};

export default Progresscircle;
