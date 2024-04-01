import './Style.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const videos = [
  {
    src: 'https://www.youtube.com/embed/IvAAw93e-9E',
    title: 'Video 1',
    description: 'Description for Video 1'
  },
  {
    src: 'https://www.youtube.com/embed/ysXYCxyRvkY',
    title: 'Video 2',
    description: 'Description for Video 2'
  },
  {
    src: 'https://www.youtube.com/embed/tT8ziqFcU-Q?si=S67K7pmlem005PsM',
    title: 'Video 3',
    description: 'Description for Video 3'
  },
  {
    src: 'https://www.youtube.com/embed/YQLStT4RXVo?si=Xa854qN40IEU9a_D',
    title: 'Video 3',
    description: 'Description for Video 3'
  },
  {
    src: 'https://www.youtube.com/embed/juCbVRq4Xhg',
    title: 'Video 3',
    description: 'Description for Video 3'
  },
  {
    src: 'https://www.youtube.com/embed/YLKEZtLhfZo ',
    title: 'Video 3',
    description: 'Description for Video 3'
  }
]

const VideosContainer = () => {
  return (
    <div className='video-container'>
      <div className='videos'>
        <h2>Popular Videos</h2>
        <button type='button' className='btn btn-outline-success'>
          View All
        </button>
      </div>
      <Container className='d-flex justify-content-center'>
        <Row xs={1} sm={1} md={3} className='g-4'>
          {videos.map((video, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} className='mb-4'>
              <Card className='h-100'>
                <div className='ratio ratio-21x9'>
                  <iframe
                    src={video.src}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className='video_text_container'>
                  <h6>{video.title}</h6>
                  <p>{video.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default VideosContainer
