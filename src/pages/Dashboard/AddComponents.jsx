import { useState } from 'react'
import './Style.css'

const AddComponents = () => {
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [sellingPrice, setSellingPrice] = useState()
  console.log(name + ' ' + description + ' ' + sellingPrice)
  const formInputs = [
    { label: 'Name', value: name, onChange: setName, type: 'name' },
    {
      label: 'Description',
      value: description,
      onChange: setDescription,
      type: 'name'
    },
    {
      label: 'Selling Price',
      value: sellingPrice,
      onChange: setSellingPrice,
      type: 'number'
    }
    // { label: 'Name', value: name, onChange: setName }
  ]
  return (
    <div className='addComponent-container'>
      <h3>Add Pre-owned Component.</h3>

      <div className='addComponent-form-wrapper'>
        <form>
          {formInputs.length &&
            formInputs.map((item, index) => (
              <div key={index}>
                <label className='addComponent-form-label'> {item.label}</label>
                <input
                  type={item.type}
                  autoComplete={item.value}
                  required
                  value={item.value}
                  onChange={e => item.onChange(e.target.value)}
                  className='addComponent-form-input'
                />
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
