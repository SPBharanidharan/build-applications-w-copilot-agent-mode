import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    console.log("Workouts API URL:", apiUrl);

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log("Workouts API Response:", data);
        setWorkouts(data.results || data);
      })
      .catch(error => console.error("Workouts API Error:", error));
  }, []);

  return (
    <div>
      <h2>Workouts</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((w, index) => (
            <tr key={index}>
              <td>{w.id}</td>
              <td>{w.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
