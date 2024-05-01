import PropTypes from 'prop-types'

import './Hunting.css'
import locationLogo from '../../assets/location-logo.png'
import { useNavigate } from 'react-router-dom'

const SingleHuntingCard = ({ job }) => {
  const navigate = useNavigate()
  const {
    id,
    title,
    image,
    location,
    employmentType,
    salaryRange,
    company,
    datePosted
  } = job
  return (
    <div className='single_card' onClick={() => navigate(`/job-hunting/${id}`)}>
      <div className='transparent'>
        <div className='company_'>
          <img src={image} />
          <span>{company}</span>
        </div>
        <h3 className='job_title'>{title}</h3>
      </div>
      <div className='location_'>
        <img className='loc_img' src={locationLogo} />
        <span className=''>{location}</span>
      </div>
      <p className='job_type'>{employmentType}</p>
      <div className='card_footer transparent d-flex justify-center items-center flex-column'>
        <p className='transparent'>
          Salary:&nbsp;
          <span
            className='transparent'
            style={{ color: '#81FF9D', fontSize: '15px' }}
          >
            $ {salaryRange ? salaryRange : 'Negotiable'}
          </span>
        </p>
        <p className='transparent'>Published: {datePosted} </p>
      </div>
    </div>
  )
}

SingleHuntingCard.propTypes = {
  job: PropTypes.func.isRequired
}

export default SingleHuntingCard
