import { useParams } from 'react-router-dom'

const JobDetails = () => {
  const { job_id } = useParams()
  return <div>JobDetails : {job_id}</div>
}

export default JobDetails
