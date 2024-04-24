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

const AllComponentsContainer = ({ activeNew, activeOld }) => {
  const newComponents = componentsData.filter(
    component => component.type === 'new'
  )
  const oldComponents = componentsData.filter(
    component => component.type === 'old'
  )

  return (
    <>
      <div className='comp_card_container'>
        {activeNew &&
          newComponents?.map((component, index) => (
            <div className='cards' key={index}>
              <SingleCard component={component} />
            </div>
          ))}

        {activeOld &&
          oldComponents?.map((component, index) => (
            <div className='cards' key={index}>
              <SingleCard component={component} />
            </div>
          ))}
      </div>
      <button className='btn_see_more'>See More</button>
    </>
  )
}

export default AllComponentsContainer
