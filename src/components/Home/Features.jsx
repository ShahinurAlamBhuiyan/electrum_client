import ReactCardSlider from 'react-card-slider-component'
import './Style.css'
const slides = [
  {
    image: 'https://i.ibb.co/gb2mchD/icon3.png',
    title: 'Projects Views'
  },
  {
    image: 'https://i.ibb.co/YLQkFzC/icon2.png',
    title: 'Components'
  },
  {
    image: 'https://i.ibb.co/gb2mchD/icon3.png',
    title: 'Course Offering'
  },
  {
    image: 'https://i.ibb.co/Fb5bKD9/icon4.png',
    title: 'QnA'
  },
  {
    image: 'https://i.ibb.co/gb2mchD/icon3.png',
    title: 'Project Competition'
  },
  {
    image: 'https://i.ibb.co/YLQkFzC/icon2.png',
    title: 'Job Hunting'
  }
]
const Features = () => {
  return (
    <div className='CardSlider_container'>
      <h2>Our Features </h2>
      <ReactCardSlider slides={slides} />
    </div>
  )
}
export default Features
