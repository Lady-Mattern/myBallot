import React, { useContext } from "react";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";
0

import "./EndBallotPage.scss";
import dklogo from "../../images/myBallotWA_Black.svg";
import printthis from "../../images/myballotWA_print.svg";
import email from "../../images/myballotWA_email.svg";

function EndBallotPage() {
  const { ballot, setBallot } = useContext(DataContext);

  return (
    <div className="EndBallotPage">
      <div className="nav-links">
        <Link className="start-over-button" to="/startform">
          Start Over
        </Link>
        {/* <div className="help-container">
          Help
          <i class="far fa-question-circle"></i>
        </div> */}
      </div>
      <img id="logo" src={dklogo} alt="Site logo. myBallotWA" />
      <p>ELECTION: November 3, 2020</p>
      <p>Below is your completed ballot</p>
      <div id="icon-container">
        <button id="print">
          <img src={printthis} alt="Click image to print ballot" />
        </button>
        <button id="email">
          <img src={email} alt="Click image to email ballot" />
        </button>
      </div>
      <div id="ballot-container">
        <div className="catCard">
          <h2>Federal Candidates</h2>
          {ballot.FederalCandidates.map((candidate) => (
            <div className="infoCard">
              <p className="position">{candidate.position}</p>
              <p className="name">{candidate.name}</p>
            </div>
          ))}
        </div>

        <div className="catCard">
          <h2>Statewide Candidates</h2>
          {ballot.StatewideCandidates.map((candidate) => (
            <div className="infoCard">
              <p className="position">{candidate.position}</p>
              <p className="name">{candidate.name}</p>
            </div>
          ))}
        </div>

        <div className="catCard">
          <h2>Judicial Candidates</h2>
          {ballot.JudicialCandidates.map((candidate) => (
            <div className="infoCard">
              <p className="position">{candidate.position}</p>
              <p className="name">{candidate.name}</p>
            </div>
          ))}
        </div>

        <div className="catCard">
          <h2>Legislative Candidates</h2>
          {ballot.LegislativeCandidates.map((candidate) => (
            <div className="infoCard">
              <p className="position">{candidate.position}</p>
              <p className="name">{candidate.name}</p>
            </div>
          ))}
        </div>

        <div className="catCard">
          <h2>Measures</h2>
          {ballot.Measures.map((measure) => (
            <div className="infoCard">
              <div className="infoCardBox">
                <p className="position">{measure.name}</p>
                <p className="name">
                  {measure.isApproved ? "Approved" : "Rejected"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EndBallotPage;
