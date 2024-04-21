// import searchIcon from "../../assets/cart.png"
import AllComponentCard from '../../components/AllComponents/AllComponentCard'
import '../../components/AllComponents/AllComponents.css'
import AllComponentsHeader from '../../components/AllComponents/AllComponentsHeader'

const componentsData = [
  {
    id: 1,
    productImgURL: 'https://i.ibb.co/bF925Wj/arduino.webp',
    productName: 'Arduino Micro Controller',
    description: 'A popular single-board microcontroller for beginners.',
    price: '$21'
  },
  {
    id: 2,
    productImgURL: 'https://i.ibb.co/QX9NsH7/i2c.png',
    productName: 'I2C Display',
    description:
      'A Liquid Crystal Display (LCD) using I2C communication for easy connection with just a few wires.',
    price: '$9.5'
  },
  {
    id: 3,
    productImgURL: 'https://i.ibb.co/mBNC9Df/esp32.png',
    productName: 'ESP32 Micro Controller',
    description:
      'A powerful microcontroller with Wi-Fi and Bluetooth connectivity.',
    price: '$13.5'
  },
  {
    id: 1,
    productImgURL: 'https://i.ibb.co/bF925Wj/arduino.webp',
    productName: 'Arduino Micro Controller',
    description: 'A popular single-board microcontroller for beginners.',
    price: '$21'
  },
  {
    id: 2,
    productImgURL: 'https://i.ibb.co/QX9NsH7/i2c.png',
    productName: 'I2C Display',
    description:
      'A Liquid Crystal Display (LCD) using I2C communication for easy connection with just a few wires.',
    price: '$9.5'
  },
  {
    id: 3,
    productImgURL: 'https://i.ibb.co/mBNC9Df/esp32.png',
    productName: 'ESP32 Micro Controller',
    description:
      'A powerful microcontroller with Wi-Fi and Bluetooth connectivity.',
    price: '$13.5'
  }
]

const AllComponents = () => {
  return (
    <>
      <AllComponentsHeader />
      <div className='comp_card_container'>
        {componentsData?.map((component, index) => (
          <div className='cards' key={index}>
            <AllComponentCard component={component} />
          </div>
        ))}
      </div>

      {/* see more button */}
      <div>
        <button className='btn_see_more'>See More</button>
      </div>
    </>
  )
}

export default AllComponents
