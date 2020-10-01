import React, { useContext } from "react";
import "./CandidateCard.scss";
import { DataContext } from "../../App";

function CandidateCard({ candidate, categoryName, position }) {
  const { ballot, setBallot } = useContext(DataContext);

  const handleAddClick = () => {
    let cName = categoryName.split(" ").join("");
    let b = ballot[cName];

    b.push({
      name: candidate.BallotName,
      party: candidate.PartyName,
      position: position,
    });

    setBallot({
      ...ballot,
      cName: b,
    });
  };

  return (
    <div className="candidate-card">
      <div className="card-img">
        <i class="fas fa-user-circle"></i>
      </div>
      <div className="card-body">
        <h1>{candidate.BallotName}</h1>
        <p>Prefers {candidate.PartyName}</p>
        <h2>I am about:</h2>
        <ol>
          <li>1. Issue</li>
          <li>2. Issue</li>
          <li>3. Issue</li>
        </ol>
        <button className="addToBallotButton" onClick={() => handleAddClick()}>
          ADD TO BALLOT
        </button>
        <button className="learnMoreButton">LEARN MORE</button>
      </div>
    </div>
  );
}

export default CandidateCard;
