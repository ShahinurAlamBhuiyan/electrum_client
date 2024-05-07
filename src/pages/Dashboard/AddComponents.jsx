import { useState } from 'react'
import './Style.css'
import axios from 'axios'
import { useAuth } from '../../components/Auth/contexts/authContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const AddComponents = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [sellingPrice, setSellingPrice] = useState('')
  const [buyingPrice, setBuyingPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [img_URL, setImg_URL] = useState('')

  const { loggedInUserInfo } = useAuth()

  const formInputs = [
    { label: 'Name', value: name, onChange: setName, type: 'text' },
    { label: 'Image URL', value: img_URL, onChange: setImg_URL, type: 'text' },
    {
      label: 'Description',
      value: description,
      onChange: setDescription,
      type: 'textarea',
      className: 'description_input',
      rows: 4,
      cols: 50
    },
    {
      label: 'Quantity',
      value: quantity,
      onChange: setQuantity,
      type: 'number'
    },
    {
      label: 'Selling Price',
      value: sellingPrice,
      onChange: setSellingPrice,
      type: 'number'
    },
    {
      label: 'Buying Price',
      value: buyingPrice,
      onChange: setBuyingPrice,
      type: 'number'
    }
  ]

  const handleSubmit = async e => {
    let productType = 'old'
    if (loggedInUserInfo.role === 'admin') {
      productType = 'new'
    }

    e.preventDefault()
    try {
      await axios
        .post(`${import.meta.env.VITE_SERVER}/post-component`, {
          name,
          description,
          img_URL,
          selling_price: Number(sellingPrice),
          buying_price: Number(buyingPrice),
          quantity: Number(quantity),
          type: productType,
          owner_id: String(loggedInUserInfo._id)
        })
        .then(
          Swal.fire({
            title: 'Good job!',
            text: 'Component added successfully!',
            icon: 'success'
          }).then(() => {
            navigate('/dashboard/my-components')
          })
        )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='addComponent-container'>
      <h3>Add Pre-owned Component.</h3>

      <div className='addComponent-form-wrapper'>
        <form onSubmit={handleSubmit}>
          {formInputs.length &&
            formInputs.map((item, index) => (
              <div key={index} className='input-label-container'>
                <label className='addComponent-form-label'> {item.label}</label>
                {item.type === 'textarea' ? (
                  <textarea
                    rows={item.rows}
                    cols={item.cols}
                    required
                    value={item.value}
                    onChange={e => item.onChange(e.target.value)}
                    className={`addComponent-form-input`}
                  />
                ) : (
                  <input
                    type={item.type}
                    required
                    value={item.value}
                    onChange={e => item.onChange(e.target.value)}
                    className={`addComponent-form-input`}
                  />
                )}
              </div>
            ))}
          <button className='addComponent-form-button' type='submit'>
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddComponents
