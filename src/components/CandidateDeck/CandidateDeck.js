import React from 'react'
import CandidateCard from '../CandidateCard/CandidateCard'
import './CandidateDeck.scss'

function CandidateDeck({cardData}) {
    const candidates = cardData.Candidates

    let candidateMap =[];

    if(candidates !== undefined){
        candidateMap = candidates.map((candidate)=>(
            <CandidateCard candidate={candidate}/>
        ))
    }

    return (
        <div className='candidate-card-container'>
            {candidateMap}    
        </div>
       
    )
}

export default CandidateDeck
