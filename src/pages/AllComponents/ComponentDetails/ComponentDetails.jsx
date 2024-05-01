import { useParams } from 'react-router-dom'
import './ComponentDetails.css' // Import your CSS file

const componentsData = [
  {
    id: 1,
    productImgURL: 'https://i.ibb.co/bF925Wj/arduino.webp',
    productName: 'Arduino Micro Controller',
    description: 'A popular single-board micro controller for beginners.',
    price: '$21',
    type: 'new'
  },
  {
    id: 2,
    productImgURL: 'https://i.ibb.co/QX9NsH7/i2c.png',
    productName: 'I2C Display',
    description:
      'A Liquid Crystal Display (LCD) using I2C communication for easy connection with just a few wires.',
    price: '$9.5',
    type: 'new'
  },
  {
    id: 3,
    productImgURL: 'https://i.ibb.co/mBNC9Df/esp32.png',
    productName: 'ESP32 Micro Controller',
    description:
      'A powerful micro controller with Wi-Fi and Bluetooth connectivity.',
    price: '$13.5',
    type: 'new'
  },
  {
    id: 4,
    productImgURL: 'https://i.ibb.co/bF925Wj/arduino.webp',
    productName: 'Arduino Micro Controller',
    description: 'A popular single-board micro controller for beginners.',
    price: '$21',
    type: 'new'
  },
  {
    id: 5,
    productImgURL: 'https://i.ibb.co/QX9NsH7/i2c.png',
    productName: 'I2C Display',
    description:
      'A Liquid Crystal Display (LCD) using I2C communication for easy connection with just a few wires.',
    price: '$9.5',
    type: 'new'
  },
  {
    id: 6,
    productImgURL: 'https://i.ibb.co/mBNC9Df/esp32.png',
    productName: 'ESP32 Micro Controller',
    description:
      'A powerful micro controller with Wi-Fi and Bluetooth connectivity.',
    price: '$13.5',
    type: 'new'
  },
  {
    id: 7,
    productImgURL: 'https://i.ibb.co/bF925Wj/arduino.webp',
    productName: 'Arduino Micro Controller',
    description: 'A popular single-board micro controller for beginners.',
    price: '$21',
    type: 'old'
  },
  {
    id: 8,
    productImgURL: 'https://i.ibb.co/QX9NsH7/i2c.png',
    productName: 'I2C Display',
    description:
      'A Liquid Crystal Display (LCD) using I2C communication for easy connection with just a few wires.',
    price: '$9.5',
    type: 'old'
  },
  {
    id: 10,
    productImgURL: 'https://i.ibb.co/mBNC9Df/esp32.png',
    productName: 'ESP32 Micro Controller',
    description:
      'A powerful micro controller with Wi-Fi and Bluetooth connectivity.',
    price: '$13.5',
    type: 'old'
  },
  {
    id: 11,
    productImgURL: 'https://i.ibb.co/bF925Wj/arduino.webp',
    productName: 'Arduino Micro Controller',
    description: 'A popular single-board micro controller for beginners.',
    price: '$21',
    type: 'old'
  },
  {
    id: 12,
    productImgURL: 'https://i.ibb.co/QX9NsH7/i2c.png',
    productName: 'I2C Display',
    description:
      'A Liquid Crystal Display (LCD) using I2C communication for easy connection with just a few wires.',
    price: '$9.5',
    type: 'old'
  }
]

const ComponentDetails = () => {
  const { component_id } = useParams()
  const component = componentsData.find(
    comp => comp.id === parseInt(component_id)
  )

  if (!component) {
    return <div>Component not found</div> // If the component doesn't exist, show a fallback
  }

  return (
    <div className='component-details__container'>
      <div className='component-details'>
        <div className='image-section'>
          <img
            src={component.productImgURL}
            alt={component.productName}
            className='component-image'
          />
        </div>
        <div className='info-section'>
          <h2 className='component-name'>{component.productName}</h2>
          <p className='component-description'>{component.description}</p>
          <p className='component-price'>Price: {component.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ComponentDetails
