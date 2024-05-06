import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import axios from 'axios'
import './ComponentDetails.css'

const ComponentDetails = () => {
  const { component_id } = useParams()
  const [component, setComponent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [count, setCount] = useState(1)
  const [owner, setOwner] = useState(null)

  useEffect(() => {
    const fetchComponent = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/component/${component_id}`
        )
        const fetchedComponent = response.data
        setComponent(fetchedComponent)
        if (fetchedComponent.owner_id) {
          const ownerResponse = await axios.get(
            `${import.meta.env.VITE_SERVER}/user/${fetchedComponent.owner_id}`
          )
          setOwner(ownerResponse.data)
        }
      } catch (err) {
        console.error('Error fetching component details:', err)
        setError('Failed to fetch component details.')
      } finally {
        setLoading(false)
      }
    }

    fetchComponent()
  }, [component_id])

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px'
        }}
      >
        <Spinner animation='grow' />
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!component) {
    return <div>Component not found</div>
  }

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className='component-details-container'>
      <div className='component-details'>
        <div className='image-section'>
          <img
            src={component.img_URL}
            alt={component.name}
            className='component-image'
          />
        </div>
        <div className='info-section'>
          <h1 className='component-name'>{component.name}</h1>
          <p className='transparent color-black' style={{ fontWeight: 'bold' }}>
            Owner Name:
            <span className='color-black' style={{ fontWeight: 'normal' }}>
              &nbsp;{component.type === 'old' ? owner.name : 'Admin'}
            </span>
          </p>
          <p className='transparent color-black'>
            <span className='color-red'>{component.quantity}</span> items left
          </p>
          <p className='component-price color-black'>
            Price:
            <span
              className='color-red'
              style={{ fontSize: '30px', padding: '10px' }}
            >
              ${component.selling_price}
            </span>
            {component.type === 'old' && (
              <span
                style={{
                  textDecoration: 'line-through',
                  color: 'black',
                  textDecorationColor: 'red'
                }}
              >
                ${component.buying_price}
              </span>
            )}
          </p>
          <p className='component-description color-black'>
            {component.description}
          </p>
          <div className='buy-now transparent'>
            <p className='transparent color-black'>Quantity</p>
            <div
              className='transparent'
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <button onClick={decrementCount}>-</button>
              <span
                className='transparent color-black'
                style={{ margin: '0 20px', fontSize: '20px' }}
              >
                {count}
              </span>
              <button onClick={incrementCount}>+</button>
            </div>
            <button className='btn-buy-now color-black'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentDetails
