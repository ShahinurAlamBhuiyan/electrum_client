import React from "react";
import { useParams } from "react-router-dom";
import "./CourseDetails.css";

const courses = [
  {
    id: 1,
    img: "https://i.ibb.co/2drrWwV/course1.jpg",
    title: "Semiconductor",
    text: "This is a wider card with supporting text below...",
    youtubeId: "gUmDVe6C-BU",
    description:"Semiconductors are materials with electrical properties that fall between those of conductors (like metals) and insulators (like rubber). They are crucial to modern electronics, forming the backbone of integrated circuits, transistors, and other electronic components. Here's a brief overview: Materials- Common semiconductor materials include silicon and germanium. Silicon is the most widely used due to its abundance and favorable properties.Doping- Semiconductors can be modified by adding impurities, a process known as doping. This allows control over their electrical properties, creating n-type (excess electrons) and p-type (excess holes) materials.Applications: Semiconductors are used in a variety of applications, from simple diodes to complex computer processors. They are essential for microchips, transistors, solar cells, LEDs, and many other devices.Integrated Circuits (ICs): Semiconductors are used to create ICs, where multiple electronic components are embedded on a single chip. ICs are central to modern electronics, powering computers, smartphones, and more.Transistors: Semiconductors are used to make transistors, the basic building blocks of electronic circuits. Transistors can amplify or switch electronic signals, enabling complex functions in electronic devices.Industry: The semiconductor industry is a major sector, involving design, manufacturing, and testing of semiconductor devices. Companies in this industry play a crucial role in technology development and innovation.Overall, semiconductors are foundational to modern technology and continue to drive advancements in electronics, computing, and telecommunications.",
  },
  {
    id: 2,
    img: "https://i.ibb.co/zJT3LHz/course4.jpg",
    title: "Chips",
    text: "This card has supporting text below...",
    youtubeId: "eJn-qPHtfzI",
    description:"Semiconductors are materials with electrical properties that fall between those of conductors (like metals) and insulators (like rubber). They are crucial to modern electronics, forming the backbone of integrated circuits, transistors, and other electronic components. Here's a brief overview: Materials- Common semiconductor materials include silicon and germanium. Silicon is the most widely used due to its abundance and favorable properties.Doping- Semiconductors can be modified by adding impurities, a process known as doping. This allows control over their electrical properties, creating n-type (excess electrons) and p-type (excess holes) materials.Applications: Semiconductors are used in a variety of applications, from simple diodes to complex computer processors. They are essential for microchips, transistors, solar cells, LEDs, and many other devices.Integrated Circuits (ICs): Semiconductors are used to create ICs, where multiple electronic components are embedded on a single chip. ICs are central to modern electronics, powering computers, smartphones, and more.Transistors: Semiconductors are used to make transistors, the basic building blocks of electronic circuits. Transistors can amplify or switch electronic signals, enabling complex functions in electronic devices.Industry: The semiconductor industry is a major sector, involving design, manufacturing, and testing of semiconductor devices. Companies in this industry play a crucial role in technology development and innovation.Overall, semiconductors are foundational to modern technology and continue to drive advancements in electronics, computing, and telecommunications.",
  },
  {
    id: 3,
    img: "https://i.ibb.co/98Xf614/course3.jpg",
    title: "Capacitors",
    text: "This is a wider card with supporting text below...",
    youtubeId: "LHCob76kigA",
    description:"Semiconductors are materials with electrical properties that fall between those of conductors (like metals) and insulators (like rubber). They are crucial to modern electronics, forming the backbone of integrated circuits, transistors, and other electronic components. Here's a brief overview: Materials- Common semiconductor materials include silicon and germanium. Silicon is the most widely used due to its abundance and favorable properties.Doping- Semiconductors can be modified by adding impurities, a process known as doping. This allows control over their electrical properties, creating n-type (excess electrons) and p-type (excess holes) materials.Applications: Semiconductors are used in a variety of applications, from simple diodes to complex computer processors. They are essential for microchips, transistors, solar cells, LEDs, and many other devices.Integrated Circuits (ICs): Semiconductors are used to create ICs, where multiple electronic components are embedded on a single chip. ICs are central to modern electronics, powering computers, smartphones, and more.Transistors: Semiconductors are used to make transistors, the basic building blocks of electronic circuits. Transistors can amplify or switch electronic signals, enabling complex functions in electronic devices.Industry: The semiconductor industry is a major sector, involving design, manufacturing, and testing of semiconductor devices. Companies in this industry play a crucial role in technology development and innovation.Overall, semiconductors are foundational to modern technology and continue to drive advancements in electronics, computing, and telecommunications.",
  },
  {
    id: 4,
    img: "https://i.ibb.co/wCh9G1r/Course-Banner.jpg",
    title: "Sensors",
    text: "This is a wider card with supporting text below...",
    youtubeId: "VbfpW0pbvaU",
    description:"Semiconductors are materials with electrical properties that fall between those of conductors (like metals) and insulators (like rubber). They are crucial to modern electronics, forming the backbone of integrated circuits, transistors, and other electronic components. Here's a brief overview: Materials- Common semiconductor materials include silicon and germanium. Silicon is the most widely used due to its abundance and favorable properties.Doping- Semiconductors can be modified by adding impurities, a process known as doping. This allows control over their electrical properties, creating n-type (excess electrons) and p-type (excess holes) materials.Applications: Semiconductors are used in a variety of applications, from simple diodes to complex computer processors. They are essential for microchips, transistors, solar cells, LEDs, and many other devices.Integrated Circuits (ICs): Semiconductors are used to create ICs, where multiple electronic components are embedded on a single chip. ICs are central to modern electronics, powering computers, smartphones, and more.Transistors: Semiconductors are used to make transistors, the basic building blocks of electronic circuits. Transistors can amplify or switch electronic signals, enabling complex functions in electronic devices.Industry: The semiconductor industry is a major sector, involving design, manufacturing, and testing of semiconductor devices. Companies in this industry play a crucial role in technology development and innovation.Overall, semiconductors are foundational to modern technology and continue to drive advancements in electronics, computing, and telecommunications.",
  },
];

const CourseDetails = () => {
  const { course_id } = useParams(); // Extract course_id from URL parameters

  // Find the course with the matching ID
  const course = courses.find((c) => c.id === parseInt(course_id, 10)); // Convert to integer

  if (!course) {
    return <div>Course not found</div>; 
  }

  return (
    <div className="course-Details">
      <div
        className="course-Banner"
        style={{ backgroundImage: `url(${course.img})` }}
      >
        <div className="Banner-overlay">
          <div className="course-content">
            <h2>{course.title}</h2>
            <p>{course.text}</p>
          </div>
        </div>
      </div>
      {/* ......video section...... */}
      <div className="course-video">
        <iframe
          width="50%"
          height="315"
          src={`https://www.youtube.com/embed/${course.youtubeId}`} 
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* ......description...... */}
      <div className="course-description">
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default CourseDetails;
