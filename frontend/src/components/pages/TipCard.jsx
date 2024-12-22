import React from "react";

const TipCard = ({ league, time, match, odds, prediction }) => {
  return (
    <div style={styles.card}>
      <div style={styles.league}>{league}</div>
      <div style={styles.match}>
        <span>{time}</span>
        <span>{match}</span>
        <span>{odds}</span>
      </div>
      <div style={styles.prediction}>{prediction}</div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#222",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #005f9e",
    textAlign: "center",
  },
  league: {
    fontSize: "0.9em",
    fontWeight: "bold",
    color: "#ccc",
    marginBottom: "5px",
  },
  match: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "3px",
    fontWeight: "bold",
  },
  prediction: {
    marginTop: "5px",
    fontSize: "0.9em",
    color: "#ddd",
  },
};

export default TipCard;
