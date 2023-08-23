import React from "react";
import { useState } from "react";
import "./styles.css";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { BsStopwatchFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";

function Sidebar() {
  const [isActivated, setIsActivated] = useState(false);

  const handleClick = () => {
    if (isActivated == false) {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  };
  return (
    <>
      <div className={`${isActivated ? "activated" : "deactivated"}`}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            paddingTop: "30px",
            maxHeight: "100%",
          }}
        >
          <div
            style={{ display: "flex", cursor: "pointer", gap: "10px" }}
            onClick={handleClick}
          >
            <AiFillAppstore
              style={{
                color: isActivated ? "#ffcc6f" : "#0094ff",
                fontSize: "32px",
                margin: "auto",
              }}
            />
            {isActivated && (
              <h3
                style={{
                  color: isActivated ? "#ffcc6f" : "#0094ff",
                  paddingRight: "60px",
                  marginLeft: "-40px",
                }}
              >
                Menu
              </h3>
            )}
          </div>
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              gap: "10px",
              marginTop: isActivated ? "-30px" : "0px",
            }}
            onClick={handleClick}
          >
            <AiFillHome
              style={{ color: "white", fontSize: "32px", margin: "auto" }}
            />
            {isActivated && (
              <h3
                style={{
                  color: "white",
                  paddingRight: "60px",
                  marginLeft: "-40px",
                }}
              >
                Home
              </h3>
            )}
          </div>
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              gap: "10px",
              marginTop: isActivated ? "-30px" : "0px",
            }}
            onClick={handleClick}
          >
            <AiFillShopping
              style={{ color: "white", fontSize: "32px", margin: "auto" }}
            />
            {isActivated && (
              <h3
                style={{
                  color: "white",
                  paddingRight: "70px",
                  marginLeft: "-40px",
                }}
              >
                Cart
              </h3>
            )}
          </div>
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              gap: "10px",
              marginTop: isActivated ? "-30px" : "0px",
            }}
            onClick={handleClick}
          >
            <BsStopwatchFill
              style={{ color: "white", fontSize: "32px", margin: "auto" }}
            />
            {isActivated && (
              <h3
                style={{
                  color: "white",
                  paddingRight: "60px",
                  marginLeft: "-40px",
                }}
              >
                Clock
              </h3>
            )}
          </div>
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              gap: "10px",
              marginTop: isActivated ? "-30px" : "0px",
            }}
            onClick={handleClick}
          >
            <CiSettings
              style={{ color: "white", fontSize: "32px", margin: "auto" }}
            />
            {isActivated && (
              <h3
                style={{
                  color: "white",
                  paddingRight: "50px",
                  marginLeft: "-40px",
                }}
              >
                Setting
              </h3>
            )}
          </div>
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              gap: "10px",
              marginTop: isActivated ? "-30px" : "0px",
            }}
            onClick={handleClick}
          >
            <BiCategory
              style={{ color: "white", fontSize: "32px", margin: "auto" }}
            />
            {isActivated && (
              <h3
                style={{
                  color: "white",
                  paddingRight: "60px",
                  marginLeft: "-40px",
                }}
              >
                Apps
              </h3>
            )}
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Sidebar;
