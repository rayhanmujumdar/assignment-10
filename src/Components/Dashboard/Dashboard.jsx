import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  console.log(data);
  return (
    <div className="container mx-auto my-10 lg:flex">
      <div className="my-10 lg:w-2/4">
        <ResponsiveContainer width="95%" height={400}>
          <BarChart width={730} height={500} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sell" fill="#ED940A"/>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="my-10 lg:w-2/4">
        <ResponsiveContainer width={"95%"} height={400}>
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
              <ReferenceLine
                y={4000}
                label="Max"
                stroke="red"
                strokeDasharray="3 3"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#8884d8"
                fill="#717755"
              />
            </AreaChart>
          </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
