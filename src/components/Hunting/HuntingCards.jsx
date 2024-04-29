import SingleHuntingCard from './SingleHuntingCard'
import React, { useState } from 'react';

const huntingData = [
  {
    id: 1,
    companyLogo: 'https://i.ibb.co/vqV9YDm/tesla-logo.png',
    jobTitle: 'Senior product manager in tesla',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senion Level', 'Remote'],
    salary: '$2k'
  },
  {
    id: 2,
    companyLogo: 'https://i.ibb.co/g998qkV/AT-T-logo.png',
    jobTitle: 'Senior product manager in AT&T',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senion Level', 'Remote'],
    salary: '$2.5k'
  },
  {
    id: 3,
    companyLogo: 'https://i.ibb.co/TPV1Zyj/ford-logo.png',
    jobTitle: 'Senior product manager in Ford',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senion Level', 'Remote'],
    salary: '$3k'
  },
  {
    id: 4,
    companyLogo: 'https://i.ibb.co/g998qkV/AT-T-logo.png',
    jobTitle: 'Senior product manager in AT&T',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senion Level', 'Remote'],
    salary: '$2.5k'
  },
  {
    id: 5,
    companyLogo: 'https://i.ibb.co/vqV9YDm/tesla-logo.png',
    jobTitle: 'Senior product manager in tesla',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senion Level', 'Remote'],
    salary: '$2k'
  },
  {
    id: 6,
    companyLogo: 'https://i.ibb.co/g998qkV/AT-T-logo.png',
    jobTitle: 'Senior product manager in AT&T',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senion Level', 'Remote'],
    salary: '$2.5k'
  },
  {
    id: 7,
    companyLogo: 'https://i.ibb.co/TPV1Zyj/ford-logo.png',
    jobTitle: 'Senior product manager in Ford',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senion Level', 'Remote'],
    salary: '$3k'
  }
]

const HuntingCards = () => {
  const [visibleJobs, setVisibleJobs] = useState(3);

  const showMoreJobs = () => {
    setVisibleJobs(huntingData.length);
  };
  const showLessJobs = () => {
    setVisibleJobs(3);
  };

  return (
    <div>
      <div className='card-container'>
        <div className='cards'>
          {huntingData.slice(0, visibleJobs).map((job, index) => (
            <SingleHuntingCard key={index} jobs={job} />
          ))}
        </div>
      </div>
      {/* Only show the button if there are more jobs to show */}
      {visibleJobs < huntingData.length && (
        <button className='btn_see_more' onClick={showMoreJobs}>Show More</button>
      )}
      {visibleJobs > 3 && (
        <button className='btn_see_more' onClick={showLessJobs}>Show Less</button>
      )}
    </div>
  );
};

export default HuntingCards
