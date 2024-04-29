import React from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./CourseDetails.css";

const courses = [
  {
    id: 1,
    img: "https://i.ibb.co/2drrWwV/course1.jpg",
    title: "Semiconductor",
    text: "This is a wider card with supporting text below...",
    youtubeId: "gUmDVe6C-BU",
    description:
      "Semiconductors are materials with electrical properties that fall between those of conductors (like metals) and insulators (like rubber). They are crucial to modern electronics, forming the backbone of integrated circuits, transistors, and other electronic components. Here's a brief overview: Materials- Common semiconductor materials include silicon and germanium. Silicon is the most widely used due to its abundance and favorable properties.Doping- Semiconductors can be modified by adding impurities, a process known as doping. This allows control over their electrical properties, creating n-type (excess electrons) and p-type (excess holes) materials.Applications: Semiconductors are used in a variety of applications, from simple diodes to complex computer processors. They are essential for microchips, transistors, solar cells, LEDs, and many other devices.Integrated Circuits (ICs): Semiconductors are used to create ICs, where multiple electronic components are embedded on a single chip. ICs are central to modern electronics, powering computers, smartphones, and more.Transistors: Semiconductors are used to make transistors, the basic building blocks of electronic circuits. Transistors can amplify or switch electronic signals, enabling complex functions in electronic devices.Industry: The semiconductor industry is a major sector, involving design, manufacturing, and testing of semiconductor devices. Companies in this industry play a crucial role in technology development and innovation.Overall, semiconductors are foundational to modern technology and continue to drive advancements in electronics, computing, and telecommunications.",
  },
  {
    id: 2,
    img: "https://i.ibb.co/zJT3LHz/course4.jpg",
    title: "Chips",
    text: "This card has supporting text below...",
    youtubeId: "eJn-qPHtfzI",
    description:
      "Semiconductors are materials with electrical properties that fall between those of conductors (like metals) and insulators (like rubber). They are crucial to modern electronics, forming the backbone of integrated circuits, transistors, and other electronic components. Here's a brief overview: Materials- Common semiconductor materials include silicon and germanium. Silicon is the most widely used due to its abundance and favorable properties.Doping- Semiconductors can be modified by adding impurities, a process known as doping. This allows control over their electrical properties, creating n-type (excess electrons) and p-type (excess holes) materials.Applications: Semiconductors are used in a variety of applications, from simple diodes to complex computer processors. They are essential for microchips, transistors, solar cells, LEDs, and many other devices.Integrated Circuits (ICs): Semiconductors are used to create ICs, where multiple electronic components are embedded on a single chip. ICs are central to modern electronics, powering computers, smartphones, and more.Transistors: Semiconductors are used to make transistors, the basic building blocks of electronic circuits. Transistors can amplify or switch electronic signals, enabling complex functions in electronic devices.Industry: The semiconductor industry is a major sector, involving design, manufacturing, and testing of semiconductor devices. Companies in this industry play a crucial role in technology development and innovation.Overall, semiconductors are foundational to modern technology and continue to drive advancements in electronics, computing, and telecommunications.",
  },
  {
    id: 3,
    img: "https://i.ibb.co/98Xf614/course3.jpg",
    title: "Capacitors",
    text: "This is a wider card with supporting text below...",
    youtubeId: "X4EUwTwZ110",
    description:
      "Semiconductors are materials with electrical properties that fall between those of conductors (like metals) and insulators (like rubber). They are crucial to modern electronics, forming the backbone of integrated circuits, transistors, and other electronic components. Here's a brief overview: Materials- Common semiconductor materials include silicon and germanium. Silicon is the most widely used due to its abundance and favorable properties.Doping- Semiconductors can be modified by adding impurities, a process known as doping. This allows control over their electrical properties, creating n-type (excess electrons) and p-type (excess holes) materials.Applications: Semiconductors are used in a variety of applications, from simple diodes to complex computer processors. They are essential for microchips, transistors, solar cells, LEDs, and many other devices.Integrated Circuits (ICs): Semiconductors are used to create ICs, where multiple electronic components are embedded on a single chip. ICs are central to modern electronics, powering computers, smartphones, and more.Transistors: Semiconductors are used to make transistors, the basic building blocks of electronic circuits. Transistors can amplify or switch electronic signals, enabling complex functions in electronic devices.Industry: The semiconductor industry is a major sector, involving design, manufacturing, and testing of semiconductor devices. Companies in this industry play a crucial role in technology development and innovation.Overall, semiconductors are foundational to modern technology and continue to drive advancements in electronics, computing, and telecommunications.",
  },
  {
    id: 4,
    img: "https://i.ibb.co/wCh9G1r/Course-Banner.jpg",
    title: "Sensors",
    text: "This is a wider card with supporting text below...",
    youtubeId: "XI49uFm5HRE",
    description:
      "Semiconductors are materials with electrical properties that fall between those of conductors (like metals) and insulators (like rubber). They are crucial to modern electronics, forming the backbone of integrated circuits, transistors, and other electronic components. Here's a brief overview: Materials- Common semiconductor materials include silicon and germanium. Silicon is the most widely used due to its abundance and favorable properties.Doping- Semiconductors can be modified by adding impurities, a process known as doping. This allows control over their electrical properties, creating n-type (excess electrons) and p-type (excess holes) materials.Applications: Semiconductors are used in a variety of applications, from simple diodes to complex computer processors. They are essential for microchips, transistors, solar cells, LEDs, and many other devices.Integrated Circuits (ICs): Semiconductors are used to create ICs, where multiple electronic components are embedded on a single chip. ICs are central to modern electronics, powering computers, smartphones, and more.Transistors: Semiconductors are used to make transistors, the basic building blocks of electronic circuits. Transistors can amplify or switch electronic signals, enabling complex functions in electronic devices.Industry: The semiconductor industry is a major sector, involving design, manufacturing, and testing of semiconductor devices. Companies in this industry play a crucial role in technology development and innovation.Overall, semiconductors are foundational to modern technology and continue to drive advancements in electronics, computing, and telecommunications.",
  },
];
const videos = [
  {
    src: "https://www.youtube.com/embed/IvAAw93e-9E",
    title: "Video 1",
    description: "Description for Video 1",
  },
  {
    src: "https://www.youtube.com/embed/ysXYCxyRvkY",
    title: "Video 2",
    description: "Description for Video 2",
  },
  {
    src: "https://www.youtube.com/embed/tT8ziqFcU-Q?si=S67K7pmlem005PsM",
    title: "Video 3",
    description: "Description for Video 3",
  },
  {
    src: "https://www.youtube.com/embed/YQLStT4RXVo?si=Xa854qN40IEU9a_D",
    title: "Video 4",
    description: "Description for Video 4",
  },
  {
    src: "https://www.youtube.com/embed/juCbVRq4Xhg",
    title: "Video 5",
    description: "Description for Video 5",
  },
  {
    src: "https://www.youtube.com/embed/YLKEZtLhfZo ",
    title: "Video 6",
    description: "Description for Video 6",
  },
];

const CourseDetails = () => {
  const { course_id } = useParams();

  const course = courses.find((c) => c.id === parseInt(course_id, 10));

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
      <div className="course">
        <h2>About {course.title}</h2>
      </div>
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
      {/*..........Popular videos........ */}
      <div className="video-container">
        <div className="videos">
          <h2>Popular Videos</h2>
        </div>
        <Container className="d-flex justify-content-center">
          <Row xs={1} sm={1} md={3} className="g-4">
            {videos.map((video, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} className="mb-4">
                <Card className="h-100">
                  <div className="ratio ratio-21x9">
                    <iframe
                      src={video.src}
                      title={video.title}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="video_text_container">
                    <h6>{video.title}</h6>
                    <p>{video.description}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CourseDetails;
