import PropTypes from 'prop-types'

import './Hunting.css'
import locationLogo from '../../assets/location-logo.png'

const SingleHuntingCard = ({ jobs }) => {
  const { companyAddress, companyLogo, jobTitle, salary, jobType } = jobs
  return (
    <div className='single_card'>
      <div className='transparent'>
        <img className='transparent' src={companyLogo} />
        <h3 className='transparent job_title'>{jobTitle}</h3>
      </div>
      <div className='transparent flex_item'>
        <img
          className='transparent loc_img'
          style={{ width: '7%', height: '2%' }}
          src={locationLogo}
        />
        <p className='transparent'>{companyAddress}</p>
      </div>
      <div className='transparent flex_item job_type'>
        {jobType.map((type, index) => (
          <div className='transparent' key={index}>
            <p className='transparent extra_info'>{type}</p>
          </div>
        ))}
      </div>
      <div className='card_footer transparent flex_item'>
        <p className='transparent'>
          <span
            className='transparent'
            style={{ color: '#81FF9D', fontSize: '30px' }}
          >
            {salary}
          </span>
          /month
        </p>
      </div>
    </div>
  )
}

SingleHuntingCard.propTypes = {
  jobs: PropTypes.func.isRequired
}

export default SingleHuntingCard
