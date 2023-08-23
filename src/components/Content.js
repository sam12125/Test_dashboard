import React from "react";
import image from "../assets/picture.png";
import Progresscircle from "./Progresscircle";
import BarGraph from "./Bargraph";
import Table from "./Table";

function Content() {
  const progressValue = 30;
  return (
    <>
      <div style={{ paddingLeft: "50px", display: "flex" }}>
        <div>
          <img src={image} />
        </div>
        <div>
          <BarGraph />
          <Progresscircle progress={progressValue} />
        </div>
      </div>
      <Table />
    </>
  );
}

export default Content;
