import React, { useState, useEffect } from "react";
import axios from "axios";
import TipCard from "./TipCard.jsx";
import "./Running.css"; // Import the CSS file

const RunningTips = () => {
  const [tipsData, setTipsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tips data from API
  useEffect(() => {
    const fetchTipsData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/tips");

        // Group tips by date
        const groupedTips = response.data.reduce((acc, tip) => {
          const date = new Date(tip.date).toLocaleDateString(); // Format date
          if (!acc[date]) {
            acc[date] = []; // Create an empty array if the date doesn't exist
          }
          acc[date].push(tip); // Add the tip to the corresponding date
          return acc;
        }, {});

        setTipsData(groupedTips);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTipsData();
  }, []);

  if (loading) return <p>Loading tips...</p>;
  if (error) return <p>Error: {error}</p>;

  // Safely render tipsData by checking if it's not null or undefined
  const tipsKeys = tipsData && Object.keys(tipsData);

  return (
    <div className='container'>
      <h4>Daily Betting Tips</h4>
      {tipsKeys && tipsKeys.length > 0 ? (
        tipsKeys.map((date) => (
          <div key={date}>
            <h3 className='header'>{date}</h3>
            {tipsData[date].map((tip) => (
              <div key={tip._id} className='tip-item'>
                <div className='card-grid'>
                  <TipCard
                    league={tip.league}
                    time={tip.time}
                    match={`${tip.teams.home} vs ${tip.teams.away}`}
                    odds={tip.odds}
                    prediction={tip.suggestedBet}
                  />
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No tips available for today.</p>
      )}
    </div>
  );
};

export default RunningTips;
