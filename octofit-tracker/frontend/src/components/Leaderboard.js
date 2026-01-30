import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    console.log("Leaderboard API URL:", apiUrl);

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log("Leaderboard API Response:", data);
        setLeaders(data.results || data);
      })
      .catch(error => console.error("Leaderboard API Error:", error));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((l, index) => (
            <tr key={index}>
              <td>{l.id}</td>
              <td>{l.user}</td>
              <td>{l.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
