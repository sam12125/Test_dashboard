import React, { useState, useEffect } from "react";
import axios from "axios";

function Table() {
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  async function fetchData() {
    const apiUrl = "https://api.covidtracking.com/v1/states/info.json";

    // Fetch data using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        setItems(response.data);

        console.log(items);
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
      <div style={{ paddingLeft: "50px" }}>
        <div>
          <h1>List of Data</h1>

          <table
            style={{ width: "100%", overflow: "hidden" }}
            className="styled-table"
          >
            <tr>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>State</th>
              <th style={{ textAlign: "center" }}>Twitter</th>
              <th style={{ textAlign: "center" }}>Covid-19 Site</th>
            </tr>
            {items.map((el, index) => (
              <tr
                key={index}
                style={{ width: "100%", overflow: "hidden" }}
                className="hoverable"
              >
                <td style={{ textAlign: "center" }}>{el.name}</td>
                <td style={{ textAlign: "center" }}>{el.state}</td>
                <td style={{ textAlign: "center" }}>{el.twitter}</td>
                <td style={{ textAlign: "left", width: "40%" }}>
                  <a href={el.covid19Site}>{el.covid19Site}</a>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
