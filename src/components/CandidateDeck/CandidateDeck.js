import React, { useState, useContext } from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import "./CandidateDeck.scss";
import { DataContext } from "../../App";

function CandidateDeck({ cardData, categoryName }) {
  const [addToBallot, setAddToBallot] = useState(false);

  const { ballot } = useContext(DataContext);
  let category = categoryName.split(" ").join("");
  let candidates = [];

  if (ballot[category] !== undefined) {
    const selectedCandidate = ballot[category].filter(
      (candidate) => candidate.position === cardData.BallotTitle
    );
    candidates =
      selectedCandidate.length === 1 ? selectedCandidate : cardData.Candidates;
  } else {
    candidates = cardData.Candidates;
  }

  let candidateMap = [];
  if (candidates !== undefined) {
    candidateMap = candidates.map((candidate) => {
      return (
        <CandidateCard
          candidate={candidate}
          categoryName={categoryName}
          position={cardData.BallotTitle}
          key={candidate.BallotID}
          addToBallot={addToBallot}
        />
      );
    });
  }

  return <div className="candidate-card-container">{candidateMap}</div>;
}

export default CandidateDeck;
