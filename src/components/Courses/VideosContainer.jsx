import "./Style.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const videos = [
    {
      src: "https://www.youtube.com/embed/a18py61_F_w?si=8bHhvs5pHMYZ2O9q",
      title: "Video 1",
      description: "Description for Video 1",
    },
    {
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
      title: "Video 2",
      description: "Description for Video 2",
    },
    {
      src: "https://www.youtube.com/embed/ZKPKpEoFxwk?si=GdZ940rzrlPwomC_",
      title: "Video 3",
      description: "Description for Video 3",
    },
    {
      src: "https://www.youtube.com/embed/T8qMKs9Fjtg?si=mc2xqkukYEqR3Op4",
      title: "Video 3",
      description: "Description for Video 3",
    },
    {
      src: "https://www.youtube.com/embed/T8qMKs9Fjtg?si=mc2xqkukYEqR3Op4",
      title: "Video 3",
      description: "Description for Video 3",
    },
    {
      src: "https://www.youtube.com/embed/T8qMKs9Fjtg?si=mc2xqkukYEqR3Op4",
      title: "Video 3",
      description: "Description for Video 3",
    },
    
  ];

const VideosContainer = () => {
  return (
    <div className="video-container">
      <div className="videos">
        <h2>Popular Videos</h2>
        <button type="button" class="btn btn-outline-success">
          View All
        </button>
      </div>
      <Container className="d-flex justify-content-center">
      <Row xs={1} sm={1} md={3} className="g-4">
        {videos.map((video, idx) => (
          <Col key={idx}  xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100">
              <div className="ratio ratio-21x9">
                <iframe
                  src={video.src}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>{video.title}</Card.Title>
                <Card.Text>{video.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
    </div>
  );
};

export default VideosContainer;
