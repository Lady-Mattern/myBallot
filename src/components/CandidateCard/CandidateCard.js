import React, { useContext, useEffect } from "react";
import "./CandidateCard.scss";
import { DataContext } from "../../App";

function CandidateCard({
  candidate,
  categoryName,
  position,
  handleChosenCandidate,
  addToBallot,
  chosenCandidate,
}) {
  const { ballot, setBallot } = useContext(DataContext);

  const handleAddClick = () => {
    handleChosenCandidate();
  };

  //  const position = cardData.BallotTitle;
  useEffect(() => {
    if (position !== undefined) {
      let cName = categoryName.split(" ").join("");
      ballot[cName] = [];
      chosenCandidate.forEach((candidate) =>
        ballot[cName].push({
          BallotName: candidate.BallotName,
          PartyName: candidate.PartyName,
          position: position,
        })
      );
      console.log("ballot[cName]", ballot[cName]);

      setBallot({
        ...ballot,
      });
    }
  }, [chosenCandidate]);

  console.log("addToBallot", addToBallot);

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
        <div className="buttonGroup">
          {addToBallot ? (
            <button
              className="addToBallotButton"
              onClick={() => handleAddClick()}
            >
              REMOVE FROM BALLOT
            </button>
          ) : (
            <button
              className="addToBallotButton"
              onClick={() => handleAddClick()}
            >
              ADD TO BALLOT
            </button>
          )}
          <button className="learnMoreButton">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}

export default CandidateCard;
