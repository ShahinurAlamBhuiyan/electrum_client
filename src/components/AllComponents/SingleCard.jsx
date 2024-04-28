import PropTypes from 'prop-types'
import cartIcon from '../../assets/cart.png'
import { useNavigate } from 'react-router-dom'

const AllComponentCard = ({ component }) => {
  const navigate = useNavigate()
  const { productImgURL, productName, description, price, id } = component

  const handleComponentClick = () => {
    navigate(`/components/${id}`)
  }

  return (
    <div className='comp_single_card' onClick={handleComponentClick}>
      <div className='product_img_container'>
        <img className='product_img' src={productImgURL} alt='' />
      </div>
      <div className='name_desc_container'>
        <h4 className='product_name'>{productName}</h4>
        <p className='product_desc'>{description}</p>
      </div>
      <div className='card_footer'>
        <img className='cart_icon' src={cartIcon} alt='' />
        <p className='product_price'>{price}</p>
      </div>
    </div>
  )
}

AllComponentCard.propTypes = {
  component: PropTypes.shape({
    productImgURL: PropTypes.string,
    productName: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.string,
  }).isRequired
}

export default AllComponentCard
