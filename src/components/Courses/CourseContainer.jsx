import React from "react";
import "./Style.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CourseBanner from "../../assets/CourseBanner.jpeg";
import Course1 from "../../assets/course1.jpeg";
import Course3 from "../../assets/course3.jpeg";
import Course4 from "../../assets/course4.jpg";
import SingleCourseCard from "./SingleCourseCard";

const courses = [
  {
    img: Course1,
    title: "Semiconductor",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    img: CourseBanner,
    title: "Chips",
    text: "This card has supporting text below as a natural lead-in to additional content.",
  },
  {
    img: Course3,
    title: "Capacitors",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  },
  {
    img: Course4,
    title: "Sensors",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  },
];

const CourseContainer = () => {
  return (
    <div className="course-container">
      <div className="course">
      <h2>Courses</h2>
      <button type="button" class="btn btn-outline-success">View All</button>
      </div>
      <div className="card-group">
        {courses.map((course, index) => (
          <SingleCourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseContainer;
