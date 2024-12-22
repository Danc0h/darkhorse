import React, { useState, useEffect } from "react";
import axios from "axios";

const RunningEditPage = () => {
  // State to store tips data
  const [tipsData, setTipsData] = useState([]);
  const [newTip, setNewTip] = useState({
    date: "",
    league: "",
    time: "",
    match: "",
    odds: "",
    prediction: "",
  });

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/tips");
        setTipsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    setNewTip({ ...newTip, [e.target.name]: e.target.value });
  };

  // Handle adding a new tip
  const addTip = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/tips",
        newTip
      );
      setTipsData([...tipsData, response.data]);
      setNewTip({
        date: "",
        league: "",
        time: "",
        match: "",
        odds: "",
        prediction: "",
      });
    } catch (error) {
      console.error("Error adding tip:", error);
    }
  };

  // Handle editing an existing tip
  const editTip = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:9000/api/tips/${id}`,
        newTip
      );
      const updatedTips = tipsData.map((tip) =>
        tip._id === id ? response.data : tip
      );
      setTipsData(updatedTips);
    } catch (error) {
      console.error("Error editing tip:", error);
    }
  };

  // Handle deleting a tip
  const deleteTip = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/tips/${id}`);
      setTipsData(tipsData.filter((tip) => tip._id !== id));
    } catch (error) {
      console.error("Error deleting tip:", error);
    }
  };

  return (
    <div>
      <h2>Running Tips Edit Page</h2>

      {/* Form to add/edit a tip */}
      <div>
        <h3>Add/Edit Tip</h3>
        <input
          type='text'
          name='date'
          placeholder='Date'
          value={newTip.date}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='league'
          placeholder='League'
          value={newTip.league}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='time'
          placeholder='Time'
          value={newTip.time}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='match'
          placeholder='Match'
          value={newTip.match}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='odds'
          placeholder='Odds'
          value={newTip.odds}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='prediction'
          placeholder='Prediction'
          value={newTip.prediction}
          onChange={handleInputChange}
        />
        <button onClick={addTip}>Add Tip</button>
      </div>

      {/* List of tips with edit/delete options */}
      <div>
        <h3>Current Tips</h3>
        {tipsData.map((tip) => (
          <div key={tip._id} className='tip-item'>
            <p>
              {tip.date} - {tip.league} - {tip.time} - {tip.match} - {tip.odds}{" "}
              - {tip.prediction}
            </p>
            <button onClick={() => editTip(tip._id)}>Edit</button>
            <button onClick={() => deleteTip(tip._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningEditPage;
