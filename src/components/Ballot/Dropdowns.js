import React from 'react'
import './Dropdowns.scss'
import DropdownCard from './DropdownCard'


function Dropdowns({category, name, clickedName, handleDropCardClick}){
    
    let style = name === clickedName ? 'open-dropdown' : 'closed-dropdown';

    console.log(category);
    console.log("category.Races[0]", category.Races[0]);

    return(
        <> 
            <div className={style}>
                {category.Races.map((races, index) => 
                    <>
                        <DropdownCard
                            clickedName={clickedName}
                            key={index}
                            races={races} 
                            handleDropCardClick={handleDropCardClick}
                            />
                    </>
                )}
            </div>
        </>
    )
}

export default Dropdowns