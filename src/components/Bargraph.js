import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./styles.css";

const data = [
  { name: "Category 1", value1: 10, value2: 20 },
  { name: "Category 2", value1: 20, value2: 30 },
  { name: "Category 3", value1: 15, value2: 25 },
  // Add more data objects as needed
];

const BarGraph = () => {
  return (
    <div className="check">
      <h3 style={{ paddingLeft: "20px" }}>Membership</h3>
      <BarChart width={560} height={180} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{ dy: 0 }}
          label={{ value: "", position: "insideBottom", dy: 10 }}
        />
        <YAxis label={{ value: "Value", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="value1" fill="#ffcc6f">
          {data.map((entry, index) => (
            <text
              x={index * 80 + 20}
              y={entry.value1 < 10 ? -10 : -20}
              fill={entry.value1 < 10 ? "#8884d8" : "#f44336"}
              textAnchor="middle"
              key={`value1-label-${index}`}
            >
              {entry.value1}
            </text>
          ))}
        </Bar>
        <Bar dataKey="value2" fill="#ea7465">
          {data.map((entry, index) => (
            <text
              x={index * 80 + 60}
              y={entry.value2 < 10 ? -10 : -20}
              fill={entry.value2 < 10 ? "#82ca9d" : "#f44336"}
              textAnchor="middle"
              key={`value2-label-${index}`}
            >
              {entry.value2}
            </text>
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default BarGraph;
