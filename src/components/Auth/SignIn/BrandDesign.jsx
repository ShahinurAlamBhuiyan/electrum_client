import './Style.css'
import fb_icons from '../../../assets/Social_icons/fb.png'
import github_icons from '../../../assets/Social_icons/github.png'
import linkedIn_icons from '../../../assets/Social_icons/linkedIn.png'
import twitter_icons from '../../../assets/Social_icons/twitter.png'

const BrandDesign = () => {
  return (
    <div className='brandContainer'>
      <h1>Electrum</h1>
      <span>
        “Spark innovation, Connect circuits,
        <br /> and Let Creativity illuminate”
      </span>

      <div className='socialIcons'>
        <img src={github_icons} />
        <img src={twitter_icons} />
        <img src={linkedIn_icons} />
        <img src={fb_icons} />
      </div>
    </div>
  )
}

export default BrandDesign
