import { useEffect, useState } from 'react'
import './JobDetails.css'
import { useParams } from 'react-router-dom'

const JobDetails = () => {
  const { job_id } = useParams()
  const [allJobs, setAllJobs] = useState([])

  useEffect(() => {
    const storedData = localStorage.getItem('jobData')
    setAllJobs(storedData ? JSON.parse(storedData) : [])
  }, [])

  const job = allJobs.find(j => j.id === job_id)
  if (!job) {
    return <div>Job not found</div>
  }

  const formatJobDescription = description => {
    const lines = description.split('\n')
    return lines.map((line, index) => <p key={index}>{line}</p>)
  }

  const formattedDescription = formatJobDescription(job.description)

  return (
    <div className='job-details-container transparent'>
      <div className='header transparent'>
        <img
          src={job.image}
          alt={`${job.company} Logo`}
          className='company-logo'
        />
        <h1>
          {job.title} at {job.company}
        </h1>
        <a className='apply-btn' href={job?.jobProviders[0]?.url} target='_blank'>Apply now</a>
      </div>

      <div className='job_description_Container align '>
        <div className='location_container'>
          <div className='single_loc '>
            <h3 className='title-color'>Location</h3>
            <p>{job.location}</p>
          </div>
          <div className='single_loc '>
            <h3 className='title-color'>Job Type</h3>
            <p>{job.employmentType}</p>
          </div>
          <div className='single_loc '>
            <h3 className='title-color'>Salary</h3>
            <p>{job.salaryRange ? job.salaryRange : 'Negotiable.'}</p>
          </div>
        </div>
        <div className='job_description'>
          <h3>Description</h3>
          <span>{formattedDescription}</span>
        </div>
      </div>
    </div>
  )
}

export default JobDetails