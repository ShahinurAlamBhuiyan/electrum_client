import { useParams } from 'react-router-dom'

const CourseDetails = () => {
  const { course_id } = useParams()
  return <div>CourseDetails : {course_id}</div>
}

export default CourseDetails
