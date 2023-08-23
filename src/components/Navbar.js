import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <h1 style={{ color: "black", paddingLeft: "50px" }}>Insights</h1>
        </div>
        <div
          style={{
            display: "flex",
            gap: "40px",
            paddingTop: "30px",
            paddingRight: "50px",
          }}
        >
          <AiFillPlusCircle style={{ fontSize: "26px" }} />
          <AiOutlineSearch style={{ fontSize: "26px" }} />
          <IoIosNotifications style={{ fontSize: "26px" }} />
          <BsFillPersonFill style={{ fontSize: "26px" }} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
