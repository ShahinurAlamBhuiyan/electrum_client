import { useState } from 'react'
import AllComponentsContainer from '../../components/AllComponents/AllComponentsContainer'
import AllComponentsHeader from '../../components/AllComponents/AllComponentsHeader'

const AllComponents = () => {
  const [activeNew, setActiveNew] = useState(true)
  const [activeOld, setActiveOld] = useState(false)
  return (
    <>
      <AllComponentsHeader activeNew={activeNew} activeOld={activeOld} setActiveNew={setActiveNew} setActiveOld={setActiveOld} />
      <AllComponentsContainer activeNew={activeNew} activeOld={activeOld} />
    </>
  )
}

export default AllComponents
