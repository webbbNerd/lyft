import React, { useEffect, useState } from "react";
import "./styles.css";

function WaitingList() {
  const [waitingList, setWaitingList] = useState([]);

  useEffect(() => {
    const storedWaitingList =
      JSON.parse(localStorage.getItem("waitingList")) || [];
    setWaitingList(storedWaitingList);
  }, []);

  const handleDelete = (index) => {
    const updatedList = [...waitingList];
    updatedList.splice(index, 1);
    setWaitingList(updatedList);
    localStorage.setItem("waitingList", JSON.stringify(updatedList));
  };

  return (
    <div className="card">
      <h1>Waiting List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Waiting Days</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {waitingList.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.name}</td>
              <td>{index + 1} day(s)</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WaitingList;
