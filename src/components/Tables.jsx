import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Tables() {
  const [tables, setTables] = useState();

  const getData = async () => {
    const { data } = await axios.get("https://morning-ocean-72775.herokuapp.com/api/tables");
    console.log(data);
    setTables(data);
  };

  useEffect(() => {}, []);

  function fetchTables() {
    getData();
  }

  return (
    <div className="center">
      {tables && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Roll No</th>
              <th scope="col">Subject</th>
              <th scope="col">Semester</th>
            </tr>
          </thead>
          <tbody>
            {tables.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.rollNo}</td>
                <td>{row.subject}</td>
                <td>{row.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={fetchTables} className="btn btn-primary btn-lg">
        Fetch Table
      </button>
    </div>
  );
}
