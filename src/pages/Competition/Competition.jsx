import React from 'react'
import CompetitionHeader from '../../components/Competition/CompetitionHeader'
import CompetitionCard from '../../components/Competition/CompetitionCard'

const Competition = () => {
  return (
    <div>
        <>
          <CompetitionHeader />
          <CompetitionCard
            title="Annual Tech Gala"
            winningTeamName="Future Innovators"
            institutionName="National Institute of Technology"
            images={[
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUOuI5PFOcyUviIBjbKoVeRx7Sm5HMsNzvGnXhivvYksLTtftXoS6-Ofqmy2l0X9HaJQ&usqp=CAU",
                "https://engineering.usu.edu/images/news/stories/2023/2023-ieee-ifec-team-web-2.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI04FGUlev7lXbEdHINfeQz7dmJBY64Y8WwYdjzxBYMx0aipa0vB5zK8NDL-9HQqodaI4&usqp=CAU"
    ]}
/>

        </>
    </div>
  )
}

export default Competition
