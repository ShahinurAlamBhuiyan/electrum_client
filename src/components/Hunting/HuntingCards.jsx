import SingleHuntingCard from './SingleHuntingCard'

const huntingData = [
  {
    companyLogo: 'https://i.ibb.co/vqV9YDm/tesla-logo.png',
    jobTitle: 'Senior product manager in tesla',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senion Level', 'Remote'],
    salary: '$2k'
  },
  {
    companyLogo: 'https://i.ibb.co/g998qkV/AT-T-logo.png',
    jobTitle: 'Senior product manager in AT&T',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senion Level', 'Remote'],
    salary: '$2.5k'
  },
  {
    companyLogo: 'https://i.ibb.co/TPV1Zyj/ford-logo.png',
    jobTitle: 'Senior product manager in Ford',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senion Level', 'Remote'],
    salary: '$3k'
  },
  {
    companyLogo: 'https://i.ibb.co/g998qkV/AT-T-logo.png',
    jobTitle: 'Senior product manager in AT&T',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senion Level', 'Remote'],
    salary: '$2.5k'
  },
  {
    companyLogo: 'https://i.ibb.co/vqV9YDm/tesla-logo.png',
    jobTitle: 'Senior product manager in tesla',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senion Level', 'Remote'],
    salary: '$2k'
  },
  {
    companyLogo: 'https://i.ibb.co/g998qkV/AT-T-logo.png',
    jobTitle: 'Senior product manager in AT&T',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senion Level', 'Remote'],
    salary: '$2.5k'
  },
  {
    companyLogo: 'https://i.ibb.co/TPV1Zyj/ford-logo.png',
    jobTitle: 'Senior product manager in Ford',
    companyAddress: 'California, CA',
    jobType: ['Full Time', 'Senion Level', 'Remote'],
    salary: '$3k'
  }
]

const HuntingCards = () => {
  return (
    <div>
      <div className='card-container'>
        <div className='cards'>
          {huntingData?.map((jobs, index) => (
            <SingleHuntingCard key={index} jobs={jobs} />
          ))}
        </div>
      </div>
      <button className='btn_see_more'>See More</button>
    </div>
  )
}

export default HuntingCards
