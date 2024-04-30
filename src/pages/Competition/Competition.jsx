import React from 'react'
import CompetitionHeader from '../../components/Competition/CompetitionHeader'
import CompetitionCard from '../../components/Competition/CompetitionCard'
import competitionData from '../../competitionData.json'

const Competition = () => {
  return (
        <>
          <CompetitionHeader />
          {competitionData.map((item) => (
            <CompetitionCard key={item.id} item={item}  />
          ))}
        </>
  )
}

export default Competition
