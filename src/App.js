import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  const [items, setItems] = useState([]);

  async function fetchData() {
    const apiUrl = "https://api.covidtracking.com/v1/states/info.json";

    // Fetch data using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        setItems(response.data);

        console.log("ii", items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <Navbar style={{ width: "100%" }} />
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
