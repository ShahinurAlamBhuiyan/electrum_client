import { useEffect, useState } from 'react';
import './JobDetails.css';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { job_id } = useParams();
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('jobData');
    setAllJobs(storedData ? JSON.parse(storedData) : []);
  }, []);

  const job = allJobs.find(j => j.id === job_id);
  if (!job) {
    return <div>Job not found</div>;
  }

  const destructureJobDescription = rawDescription => {
    const jobData = {};

    // Extract key sections with default values to avoid undefined errors
    const requisitionRegex = /Requisition ID # (\d+).*Job Category: (.*)/;
    const requisitionMatch = rawDescription.match(requisitionRegex);
    if (requisitionMatch) {
      jobData.requisitionID = requisitionMatch[1];
      jobData.jobCategory = requisitionMatch[2].trim();
    }

    const departmentOverviewRegex = /Department Overview(.*?)Position Summary/s;
    const departmentOverviewMatch = rawDescription.match(departmentOverviewRegex);
    jobData.departmentOverview = departmentOverviewMatch ? departmentOverviewMatch[1].trim() : '';

    const positionSummaryRegex = /Position Summary(.*?)Job Responsibilities/s;
    const positionSummaryMatch = rawDescription.match(positionSummaryRegex);
    jobData.positionSummary = positionSummaryMatch ? positionSummaryMatch[1].trim() : '';

    const jobResponsibilitiesRegex = /Job Responsibilities(.*?)Qualifications/s;
    const jobResponsibilitiesMatch = rawDescription.match(jobResponsibilitiesRegex);
    jobData.jobResponsibilities = jobResponsibilitiesMatch
      ? jobResponsibilitiesMatch[1].split('•').filter(Boolean).map(r => r.trim())
      : [];

    const qualificationsRegex = /Qualifications(.*?)Additional Information/s;
    const qualificationsMatch = rawDescription.match(qualificationsRegex);
    jobData.qualifications = qualificationsMatch
      ? qualificationsMatch[1].split('•').filter(Boolean).map(q => q.trim())
      : [];

    const additionalInfoRegex = /Additional Information(.*?)Pre-Employment Testing/s;
    const additionalInfoMatch = rawDescription.match(additionalInfoRegex);
    jobData.additionalInfo = additionalInfoMatch ? additionalInfoMatch[1].trim() : '';

    const preEmploymentRegex = /Pre-Employment Testing(.*?)$/s;
    const preEmploymentMatch = rawDescription.match(preEmploymentRegex);
    jobData.preEmploymentTesting = preEmploymentMatch
      ? preEmploymentMatch[1].split('•').filter(Boolean).map(t => t.trim())
      : [];

    return jobData;
  };

  const structuredData = destructureJobDescription(job.description);

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
        <button className='apply-btn'>Apply Now</button>
      </div>

      <div className='job_description_Container'>
        <div className='align job_description'>
          <h3>Department Overview</h3>
          <p>{structuredData.departmentOverview}</p>

          <h3>Position Summary</h3>
          <p>{structuredData.positionSummary}</p>

          <h3>Job Responsibilities</h3>
          <ul>
            {structuredData.jobResponsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Qualifications</h3>
          <ul>
            {structuredData.qualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Additional Information</h3>
          <p>{structuredData.additionalInfo}</p>

          <h3>Pre-Employment Testing</h3>
          <ul>
            {structuredData.preEmploymentTesting.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
