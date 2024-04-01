import { Button, Card } from 'react-bootstrap'
import './Style.css'
const data = [
  {
    title: 'Arduino UNO',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg',
    description:
      'he Arduino Uno is an open-source microcontroller board based on the Microchip...',
    published: 'Feb 10, 2024. 5 min read.Book'
  },
  {
    title: 'Resistor',
    imageURL:
      'https://atlas-content-cdn.pixelsquid.com/stock-images/resistor-rvAElYD-600.jpg',
    description:
      'A resistor is a passive two-terminal electrical component that implements electrical....',
    published: 'Feb 25, 2024. 5 min read.Book'
  },
  {
    title: 'Display Devices',
    imageURL:
      'https://electroglobal.in/wp-content/uploads/2023/09/16x2LCDDisplay_GreenBacklight-ELECTRO-GLOBAL-1.webp',
    description:
      'A display device is an output device for presentation of information in visual or tactile form....',
    published: 'May 20, 2024. 8 min read.Book'
  },
  {
    title: 'LED',
    imageURL:
      'https://www.robotechbd.com/wp-content/uploads/2021/07/frosted-leds-red-green-blue-yellow-white-800x800-1.jpg',
    description:
      'A light-emitting diode is a semiconductor device that emits light when current flows through it.',
    published: 'Mar 10, 2024. 10 min read.Book'
  },
  {
    title: 'Integrated circui',
    imageURL:
      'https://5.imimg.com/data5/IX/NW/MY-43262407/integrated-circuits-500x500.jpg',
    description:
      'An integrated circuit, also known as a microchip, chip or IC, is a small electronic device made....',
    published: 'Jan 10, 2024. 6 min read.Book'
  },
  {
    title: 'Sensor',
    imageURL: 'https://kitsguru.com/cdn/shop/products/KG002.jpg?v=1638593101',
    description:
      'A sensor is a device that produces an output signal for the purpose of detecting a physical phenomenon...',
    published: 'Oct 26, 2024. 10 min read.Book'
  }
]

const DocsCard = () => {
  return (
    <div>
        <div className='card-container'>
        {data.map((item, index) => (
        <Card className='single-card' key={index}>
          <div
            style={{
              background: '#484747',
              border: 'none',
              borderRadius: '8px'
            }}
          >
            <Card.Body className='card-body'>
              <Card.Title style={{ background: 'transparent' }}>
                {item.title}
              </Card.Title>
              <Card.Text
                style={{ background: 'transparent' }}
                className='card-description'
              >
                {item.description}
              </Card.Text>
              <Card.Text
                style={{ background: 'transparent' }}
                className='card_date'
              >
                {item.published}
              </Card.Text>
            </Card.Body>
          </div>

          <Card.Img
            style={{ background: 'transparent' }}
            variant='top'
            src={item.imageURL}
          />
        </Card>
      ))}
    </div>
   <div  style={{marginLeft:'50%', paddingTop: '30px', paddingBottom:'30px'}}>
   <Button>See More</Button>
   </div>
  </div>
  )
}

export default DocsCard
