import { useState } from 'react'
import AllComponentsContainer from '../../components/AllComponents/AllComponentsContainer'
import AllComponentsHeader from '../../components/AllComponents/AllComponentsHeader'

const AllComponents = () => {
  const [activeNew, setActiveNew] = useState(true)
  const [activeOld, setActiveOld] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <AllComponentsHeader
        activeNew={activeNew}
        setActiveNew={setActiveNew}
        setActiveOld={setActiveOld}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <AllComponentsContainer
        activeNew={activeNew}
        activeOld={activeOld}
        searchTerm={searchTerm}
      />
    </>
  )
}

export default AllComponents
