import React, {useState, useEffect} from 'react'
import Ballot from '../Ballot/BuildBallot'
import './Referendum.scss'

function Referendum({isDropCardClicked, handleDropCardClick, categoryName, cardData}) {
    const [ approved, setApproved ] = useState(false)
    const [ rejected, setRejected ] = useState(false)
    const [ isDisplay, setIsDisplay ] = useState(false)

    useEffect(()=>{
        if(isDropCardClicked && categoryName === 'Measures'){
            setIsDisplay(true)
        }
    }, [isDropCardClicked])


    const handleDisplayClick = () =>{
        setIsDisplay(false)
        handleDropCardClick()
    }

    const handleApproveClick = ()=> {
        setApproved(!approved)
        if( approved !== rejected) {
            setRejected(false)
        }
    }

    const handleRejectClick = ()=>{
        setRejected(!rejected)
        if( rejected !== approved){
            setApproved(false)
        }
    }

    const handleCancelClick = () =>{
        setApproved(false)
        setRejected(false)
    }

    let display = isDisplay ? '' : 'slide-down'

    return (
       
            <div className={`modalBottom ${display}`}>
                <div className='exit-icon-container' onClick={handleDisplayClick}>
                    <i class="far fa-times-circle"></i>
                </div>
                <h1>{cardData.Name}</h1>
                <p>{cardData.ShortDescription}</p>
                <div  className='choice-container'>
                    <p>Should this bill be:</p>
                    <div className='choice-toggle'>
                        {approved? <i onClick={handleApproveClick} class="far fa-dot-circle"></i> : <i onClick={handleApproveClick} class="far fa-circle"></i>}
                        <p>Approved</p>
                    </div>
                    <div className='choice-toggle'>
                        {rejected ? <i onClick={handleRejectClick} class="far fa-dot-circle"></i> : <i onClick={handleRejectClick} class="far fa-circle"></i>}
                        <p>Rejected</p>
                    </div>
                    <div className='confirm-button-container'>
                        <button>Confirm My Choice</button>
                    </div>
                </div>
                <p>Campaign Contributions</p>
                <p>Full Text</p>
            </div>
        
    )
}

export default Referendum
