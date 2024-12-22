import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Progress.css";

const ProgressTable = ({ data, title }) => (
  <div className='table-responsive mb-5'>
    <h3 className='mt-4 text-center'>{title}</h3>
    <table className='table table-bordered table-striped table-hover'>
      <thead className='table-primary'>
        <tr>
          <th>Date</th>
          <th>Bet A Result</th>
          <th>Bet B Result</th>
          <th>Total Winnings</th>
          <th>Roll Over</th>
          <th>Compounding Balance</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index}>
            <td>{new Date(entry.date).toLocaleDateString()}</td>
            <td>{entry.betAResult}</td>
            <td>{entry.betBResult}</td>
            <td>{entry.totalWinnings}</td>
            <td>{entry.rollOver ? "Yes" : "No"}</td>
            <td>{entry.compoundingBalance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Progress = () => {
  const [dataByRange, setDataByRange] = useState([]);
  const dateRanges = [
    {
      start: "2024-10-22",
      end: "2024-10-31",
      title: "Progress (08-11-2024 to 14-11-2024)",
    },
    {
      start: "2024-11-01",
      end: "2024-11-07",
      title: "Progress (01-11-2024 to 07-11-2024)",
    },
    {
      start: "2024-11-08",
      end: "2024-11-14",
      title: "Progress (15-11-2024 to 21-11-2024)",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const allData = await Promise.all(
        dateRanges.map(async (range) => {
          const response = await axios.get(
            `http://localhost:9000/api/progress?startDate=${range.start}&endDate=${range.end}`
          );
          return { title: range.title, data: response.data.progressData };
        })
      );
      setDataByRange(allData);
    };

    fetchData();
  }, []);

  return (
    <div className='container mt-4'>
      <h2 className='text-center'>Betting Strategy Progress</h2>

      {dataByRange.map((table, index) => (
        <ProgressTable key={index} data={table.data} title={table.title} />
      ))}
    </div>
  );
};

export default Progress;
