import React from 'react'
import "./bigChartBox.scss";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    name: "Sun",
    zep: 4000,
    persil: 2400,
    fendona: 2400,
  },
  {
    name: "Mon",
    zep: 3000,
    persil: 1398,
    fendona: 2210,
  },
  {
    name: "Tue",
    zep: 2000,
    persil: 9800,
    fendona: 2290,
  },
  {
    name: "Wed",
    zep: 2780,
    persil: 3908,
    fendona: 2000,
  },
  {
    name: "Thu",
    zep: 1890,
    persil: 4800,
    fendona: 2181,
  },
  {
    name: "Fri",
    zep: 2390,
    persil: 3800,
    fendona: 2500,
  },
  {
    name: "Sat",
    zep: 3490,
    persil: 4300,
    fendona: 2100,
  },
  {
    name: "SUN",
    zep: 2480,
    persil: 5500,
    fendona: 1000,
  },
];
const RevenueChat = () => {
  return (
    <div className="bigChartBox">
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="zep"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="persil"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="fendona"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RevenueChat