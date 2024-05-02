import SearchBar from '../../components/Hunting/SearchBar'
import HuntingCards from '../../components/Hunting/HuntingCards'
import { useEffect, useState } from 'react'

const Hunting = () => {
  const [allJobs, setAllJobs] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const storedData = localStorage.getItem('jobData')
    setAllJobs(JSON.parse(storedData))
  }, [])

  const searchedData = allJobs.filter(job =>
    job?.title?.toLowerCase().includes(query.toLowerCase()) ||
    job?.description?.toLowerCase().includes(query.toLowerCase()) ||
    job?.location?.toLowerCase().includes(query.toLowerCase())
  )

  console.log(searchedData)
  return (
    <div className='hunting_container'>
      <SearchBar setQuery={setQuery} />
      <HuntingCards searchedData={searchedData} query={query} />
    </div>
  )
}

export default Hunting
