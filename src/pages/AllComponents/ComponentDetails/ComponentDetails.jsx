import { useParams } from 'react-router-dom'
import React, {useState} from 'react'
import './ComponentDetails.css' // Import your CSS file
// import { useState } from 'react'

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

  const [count, setCount] = useState(1);

  const decreamentCount = () => {
    if(count > 1){
      setCount(count-1)
    }
  }

  const increamentCount = () => {
    setCount(count+1)
  }
  return (
    <div className='component-details-container'>
      <div className='component-details'>
        <div className='image-section'>
          <img
            src={component.productImgURL}
            alt={component.productName}
            className='component-image'
          />
        </div>
        <div className='info-section'>
            <h1 className='component-name'>{component.productName}</h1>
            <p className='transparent color-black'><span className='color-black'>Owner name: </span>Amit Mahmud Sabbir</p>
            <p className='transparent color-black'><span className='color-red'>20 </span>items left</p>
            {/* dynamic data is missing */}
            <p className='component-price color-black'>Price: <span className='color-red' style={{fontSize : "30px"}}>{component.price}</span></p>
            <p className='component-description color-black'>{component.description}</p>
            <div className="buy-now transparent">
              <p className='transparent color-black'>Quantity</p>
              <div className='transparent' style={{ display: 'flex', alignItems: 'center' }}>
              <button onClick={decreamentCount}>-</button>
              <span className='transparent color-black' style={{ margin: '0 20px', fontSize: '20px' }}>{count}</span>
              <button onClick={increamentCount}>+</button>
              </div>
              <button className='btn-buy-now color-black'>Buy Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentDetails
