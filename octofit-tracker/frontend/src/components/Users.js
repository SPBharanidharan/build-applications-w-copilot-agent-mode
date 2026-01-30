import { useEffect, useState } from 'react';

function Users() {
  const [data, setData] = useState([]);
  const baseUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    console.log('Users API:', baseUrl);
    fetch(baseUrl)
      .then(res => res.json())
      .then(json => {
        console.log('Users Data:', json);
        setData(json.results || json);
      });
  }, []);

  return (
    <>
      <h2>Users</h2>
      <table className="table table-bordered">
        <thead><tr><th>ID</th><th>Name</th></tr></thead>
        <tbody>
          {data.map((u, i) => (
            <tr key={i}>
              <td>{u.id}</td>
              <td>{u.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;
