import React, { useState, useEffect, createContext } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import axios from "axios";

import dataImport from './Data'

import LandingPage from "./pages/LandingPage/Landing";
import OnboardingOne from "./pages/Onboarding/Onboarding1";
import OnboardingTwo from "./pages/Onboarding/Onboarding2";
import OnboardingThree from "./pages/Onboarding/Onboarding3";
import OnboardingFour from "./pages/Onboarding/Onboarding4";
import StartForm from "./pages/StartForm/StartForm";
import BuildBallot from "./pages/Ballot/BuildBallot";
import ReferendumModal from "./pages/ReferendumModal/Referendum";
import CandidateModal from "./pages/CandidateModal/Candidate";
import VoterInfo from "./pages/VoterInfo/VoterInfo";
import EndBallotPage from "./pages/EndBallot/EndBallotPage";

export const DataContext = createContext();

function App() {
  const [ data, setData ] = useState({})
  const [ address, setAddress ] = useState({})
  const [ ballot, setBallot ] = useState({
    Measures: [],
    FederalCandidates: [],
    StatewideCandidates: [],
    LegislativeCandidates: [],
    JudicialCandidates: []
  })

  console.log('address', address)
  console.log('ballot', ballot)


  useEffect(()=>{
    setData(dataImport)
  }, [])

  // const getData = () => {
  //   axios
  //     .get(
  //       `https://cors-anywhere.herokuapp.com/https://voter.votewa.gov/elections/voterguide.ashx?e=866&la=&c=99&p=XX`
  //     )
  //     .then((res) => {
  //       console.log('res.data', res.data)
  //       setData(res.data)
  //     })
  // };

  return (
    <div className="App">
      <DataContext.Provider value={{data, setData, address, setAddress, ballot, setBallot}}>
        <Route exact path="/" component={LandingPage} />
        <Route path="/onboarding1" component={OnboardingOne} />
        <Route path="/onboarding2" component={OnboardingTwo} />
        <Route path="/onboarding3" component={OnboardingThree} />
        <Route path="/onboarding4" component={OnboardingFour} />
        <Route path="/startform" component={StartForm} />
        <Route path="/voterinfo" component={VoterInfo} />
        <Route path="/buildballot" component={BuildBallot} />
        <Route path="/referendum" component={ReferendumModal} />
        <Route path="/candidate" component={CandidateModal} />
        <Route path="/endballot" component={EndBallotPage} />
      </DataContext.Provider>
    </div>
  );
}

export default App;
