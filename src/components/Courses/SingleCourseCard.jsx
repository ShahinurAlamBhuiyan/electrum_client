import React from 'react'
import './Style.css'

const SingleCourseCard = ({course}) => {

  return (
    <div className="card">
            <div>
              <img
                className="card-img-top"
                src={course.img}
                alt={course.title}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-white">{course.title}</h5>
              <p className="card-text">{course.text}</p>
            </div>
        </div>
  )
}

export default SingleCourseCard
