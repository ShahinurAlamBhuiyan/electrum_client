import './JobDetails.css'
import { useParams } from 'react-router-dom'
const huntingData = [
  {
    id: 1,
    companyLogo: 'https://i.ibb.co/vqV9YDm/tesla-logo.png',
    jobTitle: 'Senior Product Manager',
    company: 'Tesla',
    companyAddress: 'Palo Alto, CA',
    jobType: ['Full Time', 'Senior Level', 'Remote'],
    salary: '$120k - $150k',
    description: 'Lead and define product strategy and vision, delivering high impact products in a fast-paced environment.',
    companyDescription: 'Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California.',
    benefits: ['Stock options', 'Health insurance', 'Flexible working hours'],
    requirements: [
      '5+ years of product management experience',
      'Proven track record of managing all aspects of a successful product throughout its lifecycle',
      'Strong problem-solving skills and willingness to think outside the box',
      'Experience with product launches and maintaining requirements compliance',
      'Excellent written and verbal communication skills'
    ]
  },
  {
    id: 2,
    companyLogo: 'https://i.ibb.co/g998qkV/AT-T-logo.png',
    jobTitle: 'Data Scientist',
    company: 'AT&T',
    companyAddress: 'Dallas, TX',
    jobType: ['Full Time', 'Mid Level', 'On-site'],
    salary: '$95k - $115k',
    description: 'Analyze complex datasets to extract valuable insights and translate them into actionable business decisions.',
    companyDescription: 'AT&T is a modern media company whose mission is to inspire human progress through the power of communication and entertainment.',
    benefits: ['Healthcare benefits', '401(k) matching', 'Paid parental leave'],
    requirements: [
      'Advanced degree in Statistics, Mathematics, Computer Science, or a related field',
      '3+ years of experience in data analysis or computer science',
      'Proficiency with statistical analysis tools (e.g., R, SAS, SPSS)',
      'Experience with machine learning algorithms and statistical modeling techniques',
      'Excellent analytical and problem-solving abilities'
    ]
  },
  {
    id: 3,
    companyLogo: 'https://i.ibb.co/TPV1Zyj/ford-logo.png',
    jobTitle: 'UX/UI Designer',
    company: 'Ford',
    companyAddress: 'Dearborn, MI',
    jobType: ['Contract', 'Senior Level', 'Hybrid'],
    salary: '$85k - $110k',
    description: 'Design and deliver user interfaces using user-centered design methodologies.',
    companyDescription: 'Ford Motor Company is a global automotive industry leader based in Dearborn, Michigan, manufacturing and selling automobiles across six continents.',
    benefits: ['Product discounts', 'Education assistance', 'Wellness programs'],
    requirements: [
      'Bachelor’s degree in Design, Computer Science, or relevant field',
      '4+ years of design experience in a professional environment',
      'Strong portfolio of design projects',
      'Familiarity with interaction design and information architecture',
      'Proficient in design software (e.g., UXPin, Balsamiq)'
    ]
  },
  {
    id: 4,
    companyLogo: 'https://i.ibb.co/g998qkV/AT-T-logo.png',
    jobTitle: 'Senior Product Manager',
    company: 'AT&T',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senior Level', 'Remote'],
    salary: '$110k - $135k',
    description: 'Manage the development and strategy of key products within our telecommunications portfolio.',
    companyDescription: 'AT&T is committed to keeping you connected and providing personalized digital entertainment options.',
    benefits: ['Performance bonuses', 'Telecommuting options', 'Gym memberships'],
    requirements: [
      '5+ years of product management experience',
      'Proven track record of managing all aspects of a successful product throughout its lifecycle',
      'Strong problem-solving skills and willingness to think outside the box',
      'Experience with product launches and maintaining requirements compliance',
      'Excellent written and verbal communication skills'
    ]
  },
  {
    id: 5,
    companyLogo: 'https://i.ibb.co/vqV9YDm/tesla-logo.png',
    jobTitle: 'Software Engineer',
    company: 'Tesla',
    companyAddress: 'Fremont, CA',
    jobType: ['Full Time', 'Entry Level', 'Remote'],
    salary: '$100k - $130k',
    description: 'Develop cutting-edge software solutions to improve automotive manufacturing processes.',
    companyDescription: 'Tesla advances the transition to sustainable energy through increasingly affordable electric vehicles and renewable energy products.',
    benefits: ['Comprehensive health benefits', 'Employee discounts', 'Stock purchase plan'],
    requirements: [
      'Advanced degree in Statistics, Mathematics, Computer Science, or a related field',
      '3+ years of experience in data analysis or computer science',
      'Proficiency with statistical analysis tools (e.g., R, SAS, SPSS)',
      'Experience with machine learning algorithms and statistical modeling techniques',
      'Excellent analytical and problem-solving abilities'
    ]
  },
  {
    id: 7,
    companyLogo: 'https://i.ibb.co/g998qkV/AT-T-logo.png',
    jobTitle: 'Senior Product Manager',
    company: 'AT&T',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senior Level', 'Remote'],
    salary: '$110k - $135k',
    description: 'Manage the development and strategy of key products within our telecommunications portfolio.',
    companyDescription: 'AT&T is committed to keeping you connected and providing personalized digital entertainment options.',
    benefits: ['Performance bonuses', 'Telecommuting options', 'Gym memberships'],
    requirements: [
      'Bachelor’s degree in Design, Computer Science, or relevant field',
      '4+ years of design experience in a professional environment',
      'Strong portfolio of design projects',
      'Familiarity with interaction design and information architecture',
      'Proficient in design software (e.g., UXPin, Balsamiq)'
    ]
  },
  {
    id: 8,
    companyLogo: 'https://i.ibb.co/TPV1Zyj/ford-logo.png',
    jobTitle: 'UX/UI Designer',
    company: 'Ford',
    companyAddress: 'Dearborn, MI',
    jobType: ['Contract', 'Senior Level', 'Hybrid'],
    salary: '$85k - $110k',
    description: 'Design and deliver user interfaces using user-centered design methodologies.',
    companyDescription: 'Ford Motor Company is a global automotive industry leader based in Dearborn, Michigan, manufacturing and selling automobiles across six continents.',
    benefits: ['Product discounts', 'Education assistance', 'Wellness programs'],
    requirements: [
      '5+ years of product management experience',
      'Proven track record of managing all aspects of a successful product throughout its lifecycle',
      'Strong problem-solving skills and willingness to think outside the box',
      'Experience with product launches and maintaining requirements compliance',
      'Excellent written and verbal communication skills'
    ]
  }

  
  // You can continue adding more jobs following the same pattern.
];

const JobDetails = () => {
  const { job_id } = useParams();

  // Find the job in the array using the job_id
  const job = huntingData.find(j => j.id === parseInt(job_id));

  // Check if job exists
  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="job-details-container transparent">
      <div className="header transparent">
        <img src={job.companyLogo} alt={`${job.company} Logo`} className="company-logo" />
        <h1><u>{job.jobTitle} at {job.company}</u></h1>
        <button className="apply-btn">Apply Now</button>
      </div>
  
      <div className="content">
        <div className="column bgc align">
          <h3 className='transparent title-color'>Location</h3>
          <p className='transparent'>{job.companyAddress}</p> <br></br>
          <h3 className='transparent title-color'>Job Type</h3>
          <p className='transparent'>{job.jobType.join(', ')}</p><br></br>
          <h3 className='transparent title-color'>Salary</h3>
          <p className='transparent'>{job.salary}</p>
        </div>
        <div className="column bgc align">
          <h3 className='transparent title-color'>Requirements</h3>
          <ul className='transparent'>
            {job.requirements.map((requirement, index) => (
              <li className='transparent' key={index}>{requirement}</li>
            ))}
      </ul>
        </div>
        <div className="column bgc align">
          <h3 className='transparent title-color'>Company Profile</h3>
          <p className='transparent'>{job.companyDescription}</p>
          <h3 className='transparent title-color'>Benefits & Perks</h3>
          <ul className='transparent'>
            {job.benefits.map((benefit, index) => (
              <li className='transparent' key={index}>{benefit}</li>
            ))}
          </ul>
          <h3 className='transparent title-color'>About the Role</h3>
          <p className='transparent'>{job.description}</p>
        </div>
      </div>
    </div>
  );
  
};

export default JobDetails;