const JobDetails = ({ job }) => {
  const { title, company, location, type, salary, description, benefits } = job
  return (
    <div className='job-details'>
      <h2>
        {title} - {company}
      </h2>
      <div className='job-details-info'>
        <p>Location: {location}</p>
        <p>Job Type: {type}</p>
        {salary && <p>Salary: {salary}</p>}
      </div>
      <div className='job-description'>
        <h3>Job Description</h3>
        <p>{description}</p>
      </div>
      <div className='job-benefits'>
        <h3>Benefits</h3>
        <ul>
          {benefits.map(benefit => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div className='apply-now'>
        <h3>How to Apply</h3>
        {/* <p>{applyInstructions}</p> */}
      </div>
    </div>
  )
}

export default JobDetails
