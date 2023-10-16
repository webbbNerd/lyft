import React, { useEffect, useState } from "react";
import "./styles.css";

function FormPage() {
  const [userData, setUserData] = useState({ name: "", inviteCode: "" });
  const eligibleCodes = process.env.REACT_APP_ELIGIBLE_CODES.split(",");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (userData.name.toString().length <= 0) return;
    const waitingList = JSON.parse(localStorage.getItem("waitingList")) || [];

    let validCandidates = [];
    let invalidCandidates = [];

    waitingList.forEach((candidate) => {
      if (eligibleCodes.includes(candidate.inviteCode)) {
        validCandidates.push(candidate);
      } else {
        invalidCandidates.push(candidate);
      }
    });

    if (eligibleCodes.includes(userData.inviteCode)) {
      validCandidates.push({
        name: userData.name,
        inviteCode: userData.inviteCode,
      });
      setSubmitted(true);
    } else {
      setSubmitted(true);
      invalidCandidates.push({ name: userData.name, inviteCode: null });
    }

    const updatedWaitingList = [...validCandidates, ...invalidCandidates];

    localStorage.setItem("waitingList", JSON.stringify(updatedWaitingList));
    setUserData({ name: "", inviteCode: "" });
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="card">
      <h1>Welcome to the Waiting List App</h1>
      <label>
        Your Name:
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </label>
      <label>
        Invite Code:
        <input
          type="text"
          value={userData.inviteCode}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, inviteCode: e.target.value }))
          }
        />
      </label>
      <button onClick={handleSubmit}>Join the Waiting List</button>
      {submitted && (
        <div className="success-message">
          You have successfully joined the waiting list!
        </div>
      )}
    </div>
  );
}

export default FormPage;
