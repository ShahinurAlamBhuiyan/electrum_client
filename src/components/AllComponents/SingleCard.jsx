import PropTypes from 'prop-types'
import cartIcon from '../../assets/cart.png'

const AllComponentCard = ({ component }) => {
  const { productImgURL, productName, description, price } = component

  return (
    <div className='comp_single_card'>
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
  component: PropTypes.func.isRequired
}

export default AllComponentCard
