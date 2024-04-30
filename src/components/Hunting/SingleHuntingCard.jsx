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
        <div className='transparent d-flex justify-center gap-4'>
          <img className='transparent' src={image} />
          <span>{company}</span>
        </div>
        <h3 className='transparent job_title'>{title}</h3>
      </div>
      <div className='transparent flex_item'>
        <img
          className='transparent loc_img'
          style={{ width: '7%', height: '2%' }}
          src={locationLogo}
        />
        <p className='transparent'>{location}</p>
      </div>
      <div className='transparent flex_item job_type'>
        <p className='transparent extra_info'>{employmentType}</p>
      </div>
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
