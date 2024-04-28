import './Style.css'
import SingleCourseCard from './SingleCourseCard'

const courses = [
  {
    id: 1,
    img: 'https://i.ibb.co/2drrWwV/course1.jpg',
    title: 'Semiconductor',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 2,
    img: 'https://i.ibb.co/zJT3LHz/course4.jpg',
    title: 'Chips',
    text: 'This card has supporting text below as a natural lead-in to additional content.'
  },
  {
    id: 3,
    img: 'https://i.ibb.co/98Xf614/course3.jpg',
    title: 'Capacitors',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'
  },
  {
    id: 4,
    img: 'https://i.ibb.co/wCh9G1r/Course-Banner.jpg',
    title: 'Sensors',
    text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'
  }
]

const CourseContainer = () => {
  return (
    <div className='course-container'>
      <div className='course'>
        <h2>Courses</h2>
        <button type='button' className='btn btn-outline-success'>
          View All
        </button>
      </div>
      <div className='card-group'>
        {courses.map((course, index) => (
          <SingleCourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  )
}

export default CourseContainer
