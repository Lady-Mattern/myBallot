import React, { useState, useContext, useEffect } from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import "./CandidateDeck.scss";
// import { DataContext } from "../../App";

function CandidateDeck({ cardData, categoryName }) {
  const [chosenCandidate, setChosenCandidate] = useState([]);
  const [foundMatch, setFoundMatch] = useState(false);

  // const { ballot, setBallot } = useContext(DataContext);

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

  const candidates = cardData.Candidates;

  const handleChosenCandidate = (person) => {
    const tempChosenCandidate = [...chosenCandidate];
    const personIndex = tempChosenCandidate.indexOf(person);
    if (personIndex !== -1) {
      tempChosenCandidate.splice(personIndex, 1);
      console.log(`Removing ${person} from faves...`);
    } else {
      tempChosenCandidate.push(person);
      console.log(`Pushing ${person} to faves...`);
    }
    setChosenCandidate(tempChosenCandidate);
  };

  useEffect(() => {
    if (candidates !== undefined) {
      let found = chosenCandidate.some(
        (chosen) => candidates.indexOf(chosen) !== -1
      );
      setFoundMatch(found);
    }
  }, [chosenCandidate]);

  let candidateMap = [];
  if (candidates !== undefined) {
    console.log("cardData.Candidates", candidates);
    console.log("chosen candidates", chosenCandidate);
    console.log("foundMatch", foundMatch);
    if (chosenCandidate.some((chosen) => candidates.indexOf(chosen) !== -1)) {
      let justChosen = [];
      for (let i = 0; i < candidates.length; i++) {
        if (
          chosenCandidate[chosenCandidate.indexOf(candidates[i])] !== undefined
        ) {
          justChosen.push(
            chosenCandidate[chosenCandidate.indexOf(candidates[i])]
          );
        }
      }
      console.log("justChosen", justChosen);
      candidateMap = justChosen.map((candidate) => {
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
    } else {
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
  }

  return <div className="candidate-card-container">{candidateMap}</div>;
  // return <div className="candidate-card-container">{result}</div>;
}

export default CandidateDeck;
