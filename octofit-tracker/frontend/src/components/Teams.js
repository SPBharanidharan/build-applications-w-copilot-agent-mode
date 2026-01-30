import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    console.log("Teams API URL:", apiUrl);

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log("Teams API Response:", data);
        setTeams(data.results || data);
      });
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <table className="table table-bordered">
        <tbody>
          {teams.map((t, i) => (
            <tr key={i}>
              <td>{t.id}</td>
              <td>{t.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
