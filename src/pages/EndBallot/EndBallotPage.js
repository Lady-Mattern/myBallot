import React, { useContext } from "react";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";
import Printer, { print } from "react-pdf-print";
// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";
import MyPDF from "../PDF/myPDF";
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import MyDocument from "../PDF/myPDF";

import "./EndBallotPage.scss";
import dklogo from "../../images/myBallotWA_Black.svg";
import printthis from "../../images/myballotWA_print.svg";
import email from "../../images/myballotWA_email.svg";

const styles = StyleSheet.create({
  viewer: {
    width: "80%",
    height: "80vh",
    paddingTop: "10px",
  },
});

const printIds = ["print1"];

function EndBallotPage() {
  const { ballot, setBallot } = useContext(DataContext);

  // const handleDownloadClick = () => {
  //   const input = document.getElementById("pdfDoc");
  //   html2canvas(input).then((canvas) => {

  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF('p', 'px', 'a4');
  //     let width = pdf.internal.pageSize.getWidth();
  //     let height = pdf.internal.pageSize.getHeight();
  //     console.log(`height: ${height}, width: ${width}`)
  //     pdf.addImage(imgData, "PNG", 0, 0, width, height);
  //     pdf.save("myballot.pdf");
  //   });
  // };

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
        <Link to="/mypdf">
          <button id="print">
            <img src={printthis} alt="Click image to print ballot" />
          </button>
        </Link>
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
              <p className="position">{measure.name}</p>
              <p className="name">
                {measure.isApproved ? "Approved" : "Rejected"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EndBallotPage;
