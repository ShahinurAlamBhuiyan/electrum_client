import React from 'react';

const JobDetails = ({ job }) => {
  return (
    <div className="job-details">
      <h2>{job.title} - {job.company}</h2>
      <div className="job-details-info">
        <p>Location: {job.location}</p>
        <p>Job Type: {job.type}</p>
        {job.salary && <p>Salary: {job.salary}</p>}
      </div>
      <div className="job-description">
        <h3>Job Description</h3>
        <p>{job.description}</p>
      </div>
      <div className="job-benefits">
        <h3>Benefits</h3>
        <ul>
          {job.benefits &&
            job.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
        </ul>
      </div>
      <div className="apply-now">
        <h3>How to Apply</h3>
        <p>{job.applyInstructions}</p>
      </div>
    </div>
  );
};

export default JobDetails;
