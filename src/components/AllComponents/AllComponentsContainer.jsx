import PropTypes from 'prop-types'

import SingleCard from './SingleCard'
import './Styles.css'

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

const AllComponentsContainer = ({ activeNew, activeOld, searchTerm }) => {
  const filteredNewComponents = componentsData
    .filter(component => component.type === 'new')
    .filter(
      component =>
        component.productName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        component.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

  const filteredOldComponents = componentsData
    .filter(component => component.type === 'old')
    .filter(
      component =>
        component.productName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        component.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <>
      <div className='comp_card_container'>
        {activeNew &&
          filteredNewComponents.map((component, index) => (
            <SingleCard key={index} component={component} />
          ))}

        {activeOld &&
          filteredOldComponents.map((component, index) => (
            <SingleCard key={index} component={component} />
          ))}

        {activeNew && filteredNewComponents.length == 0 && (
          <p style={{ color: 'red' }}>No New components found.</p>
        )}
        {activeOld && filteredOldComponents.length == 0 && (
          <p style={{ color: 'red' }}>No Pre-owned components found.</p>
        )}
      </div>
    </>
  )
}

AllComponentsContainer.propTypes = {
  activeNew: PropTypes.bool.isRequired,
  activeOld: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired
}

export default AllComponentsContainer
