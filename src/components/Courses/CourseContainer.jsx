import React, { useState } from 'react';
import './Style.css';
import SingleCourseCard from './SingleCourseCard';

const courses = [
  {
    id: 1,
    img: 'https://i.ibb.co/2drrWwV/course1.jpg',
    title: 'Semiconductor',
    text: "A semiconductor is a material with electrical conductivity between a conductor and an insulator, commonly used in electronic devices.",
  },
  {
    id: 2,
    img: 'https://i.ibb.co/zJT3LHz/course4.jpg',
    title: 'Chips',
    text: "A chipset is a collection of integrated circuits on a motherboard or system board that manage the data flow between the processor, memory, storage, and peripheral devices.",
  },
  {
    id: 3,
    img: 'https://i.ibb.co/98Xf614/course3.jpg',
    title: 'Capacitors',
    text: 'A capacitor is an electronic component that stores electrical energy in an electric field, consisting of two conductive plates separated by an insulating material (dielectric).',
  },
  {
    id: 4,
    img: 'https://i.ibb.co/wCh9G1r/Course-Banner.jpg',
    title: 'Sensors',
    text: 'A sensor is a device that detects changes in physical or environmental conditions, such as temperature, pressure, light, or motion, and converts them into electrical signals.',
  },
  {
    id: 5,
    img: 'https://i.ibb.co/rpY4nZR/resistors.jpg',
    title: 'Resistors',
    text: 'A resistor is an electronic component that opposes the flow of electrical current, causing a drop in voltage as electricity passes through it.',
  },
  {
    id: 6,
    img: 'https://i.ibb.co/6tbfbWN/inductor.jpg',
    title: 'Inductors',
    text: 'An inductor is an electronic component that stores energy in a magnetic field when electrical current flows through it.',
  },
];

const CourseContainer = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAllClick = () => {
    setShowAll(true);
  };

  const coursesToDisplay = showAll ? courses : courses.slice(0, 4);

  return (
    <div className="course-container">
      <div className="course">
        <h2>Courses</h2>
        {!showAll && (
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={handleViewAllClick}
          >
            View All
          </button>
        )}
      </div>
      <div className="card-group">
        {coursesToDisplay.map((course, index) => (
          <SingleCourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseContainer;
