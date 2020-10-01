import React from 'react'
import './CandidateCard.scss'


function CandidateCard({candidate}) {
    return (
        
        <div className='candidate-card'>
            <div className='card-img'>
                <i class="fas fa-user-circle"></i>
            </div>
            <div className='card-body'>
                <h1>{candidate.BallotName}</h1>
                <p>Prefers {candidate.PartyName}</p>
                <h2>I am about:</h2>
                <ol>
                    <li>1. Issue</li>
                    <li>2. Issue</li>
                    <li>3. Issue</li>
                </ol>
                <button>ADD TO BALLOT</button>
                <button>LEARN MORE</button>
            </div>
        </div>
    
    )
}

export default CandidateCard