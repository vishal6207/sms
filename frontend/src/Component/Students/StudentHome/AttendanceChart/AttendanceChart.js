import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./AttendanceChart.module.css";

const data = [
  { name: "Jan", Present: 30, Absent: 2 },
  { name: "Feb", Present: 20, Absent: 5 },
  { name: "Mar", Present: 27, Absent: 3 },
  { name: "Apr", Present: 35, Absent: 4 },
  { name: "May", Present: 40, Absent: 1 },
  { name: "Jun", Present: 25, Absent: 6 },
];

const AttendanceChart = () => {
  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.title}>Monthly Attendance Overview</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 40, right: 10, left: 10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" stroke="#333" />
          <YAxis stroke="#333" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
            }}
            labelStyle={{ color: "#fff" }}
            formatter={(value) => value}
          />
          <Legend />
          <Bar
            dataKey="Present"
            fill="url(#colorPresent)"
            name="Present"
            radius={[5, 5, 0, 0]}
            animationDuration={1000}
          />
          <Bar
            dataKey="Absent"
            fill="url(#colorAbsent)"
            name="Absent"
            radius={[5, 5, 0, 0]}
            animationDuration={1000}
          />
          <defs>
            <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8748d0" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8748d0" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorAbsent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#09060e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#09060e" stopOpacity={0} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
