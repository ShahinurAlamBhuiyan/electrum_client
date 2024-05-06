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
    text: "A semiconductor is a material with electrical conductivity between a conductor and an insulator, commonly used in electronic devices. Through processes like doping, semiconductors can control electrical flow, enabling the creation of transistors, diodes, and integrated circuits essential to modern technology.",
    youtubeId: "gUmDVe6C-BU",
    description:
      "Semiconductors are materials with electrical properties that fall between those of conductors (like metals) and insulators (like rubber). They are crucial to modern electronics, forming the backbone of integrated circuits, transistors, and other electronic components. Here's a brief overview: Materials- Common semiconductor materials include silicon and germanium. Silicon is the most widely used due to its abundance and favorable properties.Doping- Semiconductors can be modified by adding impurities, a process known as doping. This allows control over their electrical properties, creating n-type (excess electrons) and p-type (excess holes) materials.Applications: Semiconductors are used in a variety of applications, from simple diodes to complex computer processors. They are essential for microchips, transistors, solar cells, LEDs, and many other devices.Integrated Circuits (ICs): Semiconductors are used to create ICs, where multiple electronic components are embedded on a single chip. ICs are central to modern electronics, powering computers, smartphones, and more.Transistors: Semiconductors are used to make transistors, the basic building blocks of electronic circuits. Transistors can amplify or switch electronic signals, enabling complex functions in electronic devices.Industry: The semiconductor industry is a major sector, involving design, manufacturing, and testing of semiconductor devices. Companies in this industry play a crucial role in technology development and innovation.Overall, semiconductors are foundational to modern technology and continue to drive advancements in electronics, computing, and telecommunications.",
  },
  {
    id: 2,
    img: "https://i.ibb.co/zJT3LHz/course4.jpg",
    title: "Chips",
    text: "A chipset is a collection of integrated circuits on a motherboard or system board that manage the data flow between the processor, memory, storage, and peripheral devices. It plays a critical role in determining a computer's features, capabilities, and performance.",
    youtubeId: "eJn-qPHtfzI",
    description:
      "An electronic chipset manages the flow of data between components on a motherboard. It’s the traffic controller between the CPU, GPU, RAM, storage, and peripherals. Experts have referred to it as the “glue” of the motherboard. The chipset is basically the electronics on the motherboard that communicate with all the connected components.Most importantly, the chipset determines compatibility between all of these other components. If any of the processors or memory cards don’t communicate with the chipset, they can’t send or receive information from the motherboard.Today’s integrated chipsets live on the motherboard and allow components to communicate with each other through the motherboard from a centralized location. But in the past, there were smaller, individualized chips for each component.You can imagine that it was quite confusing to have a chip for the CPU, a chip for RAM, and so on. As time went on, chip functionality consolidated into two main chipsets, the faster northbridge that connects directly to the CPU and memory, and the slower southbridge.Some functions are now absorbed by the CPU completely. The remaining components, which need their own communication bridge to the motherboard, use smaller and more efficient chipsets.",
  },
  {
    id: 3,
    img: "https://i.ibb.co/98Xf614/course3.jpg",
    title: "Capacitors",
    text: "A capacitor is an electronic component that stores electrical energy in an electric field, consisting of two conductive plates separated by an insulating material (dielectric). It is used in circuits for functions like energy storage, filtering, and smoothing power fluctuations.",
    youtubeId: "X4EUwTwZ110",
    description:
      "Capacitor, device for storing electrical energy, consisting of two conductors in close proximity and insulated from each other. A simple example of such a storage device is the parallel-plate capacitor. If positive charges with total charge +Q are deposited on one of the conductors and an equal amount of negative charge −Q is deposited on the second conductor, the capacitor is said to have a charge Q. (See also electricity: Principle of the capacitor.)Capacitors have many important applications. They are used, for example, in digital circuits so that information stored in large computer memories is not lost during a momentary electric power failure; the electric energy stored in such capacitors maintains the information during the temporary loss of power. Capacitors play an even more important role as filters to divert spurious electric signals and thereby prevent damage to sensitive components and circuits caused by electric surges.",
  },
  {
    id: 4,
    img: "https://i.ibb.co/wCh9G1r/Course-Banner.jpg",
    title: "Sensors",
    text: "A sensor is a device that detects changes in physical or environmental conditions, such as temperature, pressure, light, or motion, and converts them into electrical signals. These signals can then be used to monitor, measure, or control processes in various applications, from industrial automation to consumer electronics.",
    youtubeId: "XI49uFm5HRE",
    description:
      "A sensor is a device that detects the change in the environment and responds to some output on the other system. A sensor converts a physical phenomenon into a measurable analog voltage (or sometimes a digital signal) converted into a human-readable display or transmitted for reading or further processing.One of the best-known sensors is the microphone, which converts sound energy to an electrical signal that can be amplified, transmitted, recorded, and reproduced.Sensors are used in our everyday lives. For example, the common mercury thermometer is a very old type of sensor used for measuring temperature. Using coloured mercury in a closed tube, it relies on the fact that this chemical has a consistent and linear reaction to changes in temperature.By marking the tube with temperature values, we can look at the thermometer and see what the temperature is. The precision is somewhat limited due to the visual size of the scale markings, but it is sufficient for its intended purpose.",
  },
  {
    id: 5,
    img: 'https://i.ibb.co/rpY4nZR/resistors.jpg',
    title: 'Resistors',
    text: 'A resistor is an electronic component that opposes the flow of electrical current, causing a drop in voltage as electricity passes through it. It is used in circuits to control current levels, divide voltages, and dissipate energy as heat.',
    youtubeId:"Gc1wVdbVI0E",
    description:"A resistor is an electrical component that limits or regulates the flow of electrical current in an electronic circuit. Resistors can also be used to provide a specific voltage for an active device such as a transistor.All other factors being equal, in a direct-current (DC) circuit, the current through a resistor is inversely proportional to its resistance, and directly proportional to the voltage across it. This is the well-known Ohm's Law. In alternating-current (AC) circuits, this rule also applies as long as the resistor does not contain inductance or capacitance."
  },
  {
    id: 6,
    img: 'https://i.ibb.co/6tbfbWN/inductor.jpg',
    title: 'Inductors',
    text: 'An inductor is an electronic component that stores energy in a magnetic field when electrical current flows through it. It resists changes in current, exhibiting properties like inductance and creating voltage spikes when current flow is altered.',
    youtubeId:"NgwXkUt3XxQ",
    description:"An inductor, also called a coil, choke, or reactor, is a passive two-terminal electrical component that stores energy in a magnetic field when electric current flows through it.[1] An inductor typically consists of an insulated wire wound into a coil.When the current flowing through the coil changes, the time-varying magnetic field induces an electromotive force (emf) (voltage) in the conductor, described by Faraday's law of induction. According to Lenz's law, the induced voltage has a polarity (direction) which opposes the change in current that created it. As a result, inductors oppose any changes in current through them.An inductor is characterized by its inductance, which is the ratio of the voltage to the rate of change of current. In the International System of Units (SI), the unit of inductance is the henry (H) named for 19th century American scientist Joseph Henry. In the measurement of magnetic circuits, it is equivalent to weber/ampere. Inductors have values that typically range from 1 µH (10−6 H) to 20 H. Many inductors have a magnetic core made of iron or ferrite inside the coil, which serves to increase the magnetic field and thus the inductance. Along with capacitors and resistors, inductors are one of the three passive linear circuit elements that make up electronic circuits. Inductors are widely used in alternating current (AC) electronic equipment, particularly in radio equipment. They are used to block AC while allowing DC to pass; inductors designed for this purpose are called chokes. They are also used in electronic filters to separate signals of different frequencies, and in combination with capacitors to make tuned circuits, used to tune radio and TV receivers."
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
