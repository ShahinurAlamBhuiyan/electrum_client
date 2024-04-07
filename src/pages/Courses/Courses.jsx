import CourseBanner from "../../components/Courses/CourseBanner"
import CourseContainer from  "../../components/Courses/CourseContainer"
import VideosContainer from "../../components/Courses/VideosContainer"

const Courses = () => {
  return (
    <div>
      <CourseBanner/>
      <CourseContainer/>
      <VideosContainer/>
    </div>
  )
}

export default Courses