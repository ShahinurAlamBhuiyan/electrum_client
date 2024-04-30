import  { useEffect, useState } from 'react';
import axios from 'axios';
import SingleHuntingCard from './SingleHuntingCard';
import All_JOB_REQUEST from '../../utils';

const HuntingCards = () => {
  const [visibleJobs, setVisibleJobs] = useState(3);
  const [allJobs, setAllJobs] = useState([]);

  const showMoreJobs = () => {
    setVisibleJobs(allJobs.length); 
  };
  const showLessJobs = () => {
    setVisibleJobs(3); 
  };

  const fetchJobData = async () => {
    try {
      const response = await axios.request(All_JOB_REQUEST);
      const jobsData = response.data.jobs;

      setAllJobs(jobsData); 
      localStorage.setItem('jobData', JSON.stringify(jobsData)); 
    } catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {
    const storedJobData = localStorage.getItem('jobData'); // Check for stored data
    if (storedJobData) {
      setAllJobs(JSON.parse(storedJobData)); 
    } else {
      
      fetchJobData(); // Fetch from API if no data in localStorage
    }
  }, []); 
  return (
    <div>
      <div className="card-container">
        <div className="cards">
          {allJobs.slice(0, visibleJobs).map((job, index) => (
            <SingleHuntingCard key={index} job={job} />
          ))}
        </div>
      </div>
      {visibleJobs < allJobs.length && (
        <button className="btn_see_more" onClick={showMoreJobs}>
          Show More
        </button>
      )}
      {visibleJobs > 3 && (
        <button className="btn_see_more" onClick={showLessJobs}>
          Show Less
        </button>
      )}
    </div>
  );
};

export default HuntingCards;
