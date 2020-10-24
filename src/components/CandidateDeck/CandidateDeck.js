import React, { useState, useContext } from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import "./CandidateDeck.scss";
// import { DataContext } from "../../App";

function CandidateDeck({ cardData, categoryName }) {
  // const [addToBallot, setAddToBallot] = useState(false);
  const [chosenCandidate, setChosenCandidate] = useState([]);

  // const { ballot } = useContext(DataContext);
  // let category = categoryName.split(" ").join("");
  // let candidates = [];

  // if (ballot[category] !== undefined) {
  //   const selectedCandidate = ballot[category].filter(
  //     (candidate) => candidate.position === cardData.BallotTitle
  //   );
  //   candidates =
  //     selectedCandidate.length === 1 ? selectedCandidate : cardData.Candidates;
  // } else {
  //   candidates = cardData.Candidates;
  // }

  const handleChosenCandidate = (person) => {
    const tempChosenCandidate = [...chosenCandidate];
    const personIndex = tempChosenCandidate.indexOf(person);
    if (personIndex !== -1) {
      //https://www.w3schools.com/js/js_array_methods.asp
      //remove a specific item in an array
      tempChosenCandidate.splice(personIndex, 1);
      console.log(`Removing ${person} from faves...`);
    } else {
      tempChosenCandidate.push(person);
      console.log(`Pushing ${person} to faves...`);
    }
    setChosenCandidate(tempChosenCandidate);
  };

  const candidates = cardData.Candidates;
  let candidateMap = [];
  if (candidates !== undefined) {
    console.log("candidates", candidates);
    candidateMap = candidates.map((candidate) => {
      return (
        <CandidateCard
          candidate={candidate}
          categoryName={categoryName}
          position={cardData.BallotTitle}
          key={candidate.BallotID}
          handleChosenCandidate={() => handleChosenCandidate(candidate)}
          addToBallot={chosenCandidate.includes(candidate)}
        />
      );
    });
  }

  let chosenCandidateMap = [];
  if (chosenCandidate !== undefined) {
    console.log("chosen candidate", chosenCandidate);
    chosenCandidateMap = chosenCandidate.map((candidate) => {
      return (
        <CandidateCard
          candidate={candidate}
          categoryName={categoryName}
          position={cardData.BallotTitle}
          key={candidate.BallotID}
          handleChosenCandidate={() => handleChosenCandidate(candidate)}
          addToBallot={chosenCandidate.includes(candidate)}
        />
      );
    });
  }
  let result = chosenCandidate.length === 0 ? candidateMap : chosenCandidateMap;
  // return <div className="candidate-card-container">{candidateMap}</div>;
  return <div className="candidate-card-container">{result}</div>;
}

export default CandidateDeck;
