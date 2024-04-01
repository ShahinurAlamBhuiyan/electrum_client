import './Hunting.css';
import React from 'react'
import locationLogo from "../../assets/location-logo.png"

export default function HuntingCard({job}) {
  const jobTypes = job.jobType
  return (
    <div className="single_card">
      <div className='transparent'>
        <img className='transparent' src={job.companyLogo} />
        <h3 className='transparent job_title'>{job.jobTitle}</h3>
      </div>
      <div className='transparent flex_item'>
        <img className='transparent loc_img' style={{width: '7%', height:'2%'}} src={locationLogo} />
        <p className='transparent'>{job.companyAddress}</p>
      </div>
      <div className='transparent flex_item job_type'>
        {
        jobTypes.map((type) => (
          <div className="transparent">
            <p className="transparent extra_info">{type}</p>
          </div>
        ))
        }
      </div>
      <div className='card_footer transparent flex_item'>
        <p className='transparent'><span className='transparent' style={{color: '#81FF9D', fontSize: '30px'}}>{job.salary}</span>/month</p>
        {/* <p>Details</p> */}
        <button onClick={()=>{}} className='btn_details'>Details</button>
      </div>
    </div>
  )
}
