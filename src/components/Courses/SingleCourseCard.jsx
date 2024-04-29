import PropTypes from 'prop-types'
import './Style.css'
import { useNavigate } from 'react-router-dom'

const SingleCourseCard = ({ course }) => {
  const navigate = useNavigate()
  return (
    <div
      className='SingleCourse'
      onClick={() => navigate(`/courses/${course.id}`)}
    >
      <img className='SingleCourse-img' src={course.img} alt={course.title} />
      <div className=''>
        <h5 className='course-title text-white'>{course.title}</h5>
        <p className='course-details'>{course.text}</p>
      </div>
    </div>
  )
}

SingleCourseCard.propTypes = {
  course: PropTypes.func.isRequired
}

export default SingleCourseCard
