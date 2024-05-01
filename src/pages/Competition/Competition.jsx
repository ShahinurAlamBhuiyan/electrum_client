import React, { useState } from 'react'
import CompetitionHeader from '../../components/Competition/CompetitionHeader'
import CompetitionCard from '../../components/Competition/CompetitionCard'
import competitionData from '../../competitionData.json'

const Competition = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const showLessCards = () => {
    setVisibleCards(3)
  };
  const showMoreCards = () =>{
    setVisibleCards(competitionData.length)
  };
  return (
        <div>
          <CompetitionHeader />
          {competitionData.slice(0,visibleCards).map((item) => (
            <CompetitionCard key={item.id} item={item}  />
          ))}
          {
            visibleCards < competitionData.length &&(
              <button className='btn_see_more' onClick={() =>showMoreCards()}>Show More</button>
            )
          }
          {
            visibleCards > 3 &&(
              <button className='btn_see_more' onClick={()=>showLessCards()}>Show Less</button>
            )
          }
          
        </div>
  )
}

export default Competition
