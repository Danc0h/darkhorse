import React, { useState, useEffect } from "react";

const ProgressEditPage = () => {
  const [progressData, setProgressData] = useState([]);
  const [newEntry, setNewEntry] = useState({
    date: "",
    betAResult: "",
    betBResult: "",
    totalWinnings: "",
    compoundingBalance: "",
  });

  // Mock fetch function to simulate getting data from an API
  useEffect(() => {
    const fetchData = async () => {
      // Replace with API call
      const mockData = [
        {
          id: 1,
          date: "2024-10-22",
          betAResult: "1.5",
          betBResult: "1.7",
          totalWinnings: "2000",
          compoundingBalance: "5000",
        },
        // Add more mock items here
      ];
      setProgressData(mockData);
    };

    fetchData();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  // Handle adding a new entry
  const addEntry = () => {
    const newId = progressData.length + 1;
    const newProgressData = [...progressData, { ...newEntry, id: newId }];
    setProgressData(newProgressData);
    setNewEntry({
      date: "",
      betAResult: "",
      betBResult: "",
      totalWinnings: "",
      compoundingBalance: "",
    });
  };

  // Handle editing an existing entry
  const editEntry = (id) => {
    const updatedEntries = progressData.map((entry) =>
      entry.id === id ? { ...entry, ...newEntry } : entry
    );
    setProgressData(updatedEntries);
  };

  // Handle deleting an entry
  const deleteEntry = (id) => {
    const updatedEntries = progressData.filter((entry) => entry.id !== id);
    setProgressData(updatedEntries);
  };

  return (
    <div>
      <h2>Progress Edit Page</h2>

      {/* Form to add/edit an entry */}
      <div>
        <h3>Add/Edit Entry</h3>
        <input
          type='text'
          name='date'
          placeholder='Date'
          value={newEntry.date}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='betAResult'
          placeholder='Bet A Result'
          value={newEntry.betAResult}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='betBResult'
          placeholder='Bet B Result'
          value={newEntry.betBResult}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='totalWinnings'
          placeholder='Total Winnings'
          value={newEntry.totalWinnings}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='compoundingBalance'
          placeholder='Compounding Balance'
          value={newEntry.compoundingBalance}
          onChange={handleInputChange}
        />
        <button onClick={addEntry}>Add Entry</button>
      </div>

      {/* List of progress entries with edit/delete options */}
      <div>
        <h3>Current Progress</h3>
        {progressData.map((entry) => (
          <div key={entry.id} className='progress-item'>
            <p>
              {entry.date} - Bet A: {entry.betAResult} - Bet B:{" "}
              {entry.betBResult} - Total Winnings: {entry.totalWinnings} -
              Compounding Balance: {entry.compoundingBalance}
            </p>
            <button onClick={() => editEntry(entry.id)}>Edit</button>
            <button onClick={() => deleteEntry(entry.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressEditPage;
