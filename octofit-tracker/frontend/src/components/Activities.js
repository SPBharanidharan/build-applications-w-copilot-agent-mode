import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    console.log("Activities API URL:", apiUrl);

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log("Activities API Response:", data);
        setActivities(data.results || data);
      })
      .catch(error => console.error("Activities API Error:", error));
  }, []);

  return (
    <div>
      <h2>Activities</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((a, index) => (
            <tr key={index}>
              <td>{a.id}</td>
              <td>{a.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
