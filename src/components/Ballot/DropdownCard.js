import React from 'react'
import './DropdownCard.scss'

function DropdownCard({races, handleDropCardClick}) {
    


    return(
        <div className='dropdown-card'>
            <div className='card-img'>
                <i class="fas fa-user-circle"></i>
                <p>No Position</p>
                <p>Selected</p>
            </div>
            <div className='card-body'>
                <h1 className="race-title">
                    {races.Name}
                </h1>
                <h1 className="selected">
                        Placeholder text
                </h1>
                <button
                    className="select-position-button"
                    onClick={()=> handleDropCardClick(races)}
                    >
                    Select Position
                    
                </button>
            </div>
        </div>
    )
}

export default DropdownCard