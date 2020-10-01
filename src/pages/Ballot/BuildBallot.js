import React, {useContext, useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import { DataContext } from '../../App'
import './BuildBallot.scss'
import CategoryContainers from '../../components/Categories/CategoryContainers'
import logo from '../../images/myBallotWA_Logo_small.svg'
import ReferendumModal from '../ReferendumModal/Referendum'
import CandidateModal from '../CandidateModal/Candidate'

function BallotMeasure(){
    const {data} = useContext(DataContext);
    const [ category, setCategory ] = useState([])
    const [ categoryName, setCategoryName ] = useState('')
    const [ isDropCardClicked, setIsDroCardClicked] = useState(false)
    const [ cardData, setCardData ] = useState({})
    
    

    const handleDropCardClick = (data)=>{
      console.log('dropCardClick')
      if(data !== undefined) setCardData(data)
      setIsDroCardClicked(!isDropCardClicked)
    }
   
    useEffect(()=>{
        if(data.Categories !== undefined){
            if(data.Categories[0] !== undefined){
                console.log('data', data.Categories[0])
                setCategory(data.Categories[0])
            }
        }
    }, [data])

    return(
        <div className="ballot-measure">
            <div className="nav-links">
              <Link 
                className="start-over-button"
                to='/startform' >
                    Start Over
              </Link>
              <div className="help-container">
                Help 
                <i class="far fa-question-circle"></i>
              </div>
            </div>
            <img 
              className="logo" 
              src={logo} 
              alt="logo" />
            <h3 className="election-date">ELECTION: November 3, 2020</h3>
            <p className="ballot-measure-instructions">Click to expand view and select the candidates and measures.</p>
            <div className="card-container">

              <CategoryContainers categoryName={categoryName} setCategoryName={setCategoryName}
              handleDropCardClick={handleDropCardClick}
              />
              <ReferendumModal isDropCardClicked={isDropCardClicked}
              handleDropCardClick={handleDropCardClick}
              categoryName={categoryName}
              cardData={cardData}
              />
              <CandidateModal isDropCardClicked={isDropCardClicked}
              handleDropCardClick={handleDropCardClick}
              categoryName={categoryName}
              cardData={cardData}
              />

              <div className="ballot-bottom-buttons">
                <Link to='/endballot'>
                  <button>Complete myBallot</button>
                </Link>
              </div>
            </div>
        </div>
    )
}

export default BallotMeasure