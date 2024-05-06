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

  // filtering upcoming and previous events
  const [activePrevious, setActivePrevious] = useState(true)
  const [activeUpcoming, setActiveUpcoming] = useState(false)

  const filteredPrevious = competitionData.filter(competition => competition.competitionType === 'previous')
  const filteredUpcoming = competitionData.filter(competition => competition.competitionType === 'upcoming')

    // console.log(ActiveUpcoming)
    // {console.log(filteredPrevious)}
    // {console.log(competitionData.title)}
  return (
        <div>
          <CompetitionHeader
            activeUpcoming={activeUpcoming}
            activePrevious={activePrevious}
            setActiveUpcoming = {setActiveUpcoming}
            setActivePrevious = {setActivePrevious}
            setVisibleCards = {setVisibleCards}
          />
          
          {
            activePrevious?
            filteredPrevious.slice(0,visibleCards).map((item) => (
              <CompetitionCard
              activeUpcoming={activeUpcoming}
              activePrevious={activePrevious}
              key={item.id} item={item}  />
            ))
          :
            activeUpcoming &&
            filteredUpcoming.slice(0,visibleCards).map((item) => (
              <CompetitionCard key={item.id}
              activeUpcoming = {activeUpcoming}
              activePrevious = {activePrevious}
               item={item}  />
            ))
          }
          {
            visibleCards < competitionData.length &&(
              <button className='btn_see_more text-white' onClick={() =>showMoreCards()}>Show More</button>
            )
          }
          {
            visibleCards > 3 &&(
              <button className='btn_see_more text-white' onClick={()=>showLessCards()}>Show Less</button>
            )
          }
          
        </div>
  )
}

export default Competition
