import PropTypes from 'prop-types'
import cartIcon from '../../assets/cart.png'
import { useNavigate } from 'react-router-dom'

const AllComponentCard = ({ component }) => {
  const navigate = useNavigate()
  const { img_URL, name, description, selling_price, _id } = component

  const handleComponentClick = () => {
    navigate(`/components/${_id}`)
  }

  return (
    <div className='comp_single_card' onClick={handleComponentClick}>
      <div className='product_img_container'>
        <img className='product_img' src={img_URL} alt='' />
      </div>
      <div className='name_desc_container'>
        <h4 className='product_name'>{name}</h4>
        <p className='product_desc'>{description}</p>
      </div>
      <div className='card_footer'>
        <img className='cart_icon' src={cartIcon} alt='' />
        <p className='product_price'>$ {selling_price}</p>
      </div>
    </div>
  )
}

AllComponentCard.propTypes = {
  component: PropTypes.shape({
    img_URL: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    selling_price: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired
}

export default AllComponentCard
