import { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import { useAuth } from '../../components/Auth/contexts/authContext'

const MyComponents = () => {
  const [components, setComponents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { loggedInUserInfo } = useAuth()
  console.log(loggedInUserInfo)
  useEffect(() => {
    const fetchComponents = async () => {
      try {
        if (loggedInUserInfo && loggedInUserInfo._id) {
          const response = await axios.get(
            `${import.meta.env.VITE_SERVER}/my-components/${
              loggedInUserInfo._id
            }`
          )
          setComponents(response.data)
          console.log(response.data)
        }
      } catch (err) {
        setError(err.response?.data || 'Error fetching components')
      } finally {
        setLoading(false)
      }
    }

    fetchComponents()
  }, [loggedInUserInfo])

  if (loading) {
    return <Spinner animation='grow' />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (components.length === 0) {
    return <div>No components found</div>
  }

  return (
    <div>
      <h2>My Components</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#83c677', textAlign: 'left' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px', color: 'black' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', color: 'black' }}>Description</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', color: 'black' }}>Buying Price</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', color: 'black' }}>Selling Price</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', color: 'black' }}>Quantity</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', color: 'black' }}>Type</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', color: 'black' }}>Image</th>
          </tr>
        </thead>
        <tbody>
          {components.map((component, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{component.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{component.description}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{component.buying_price}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{component.selling_price}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{component.quantity}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{component.type}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <img src={component.img_URL} alt={component.name} style={{ width: '50px', height: 'auto' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyComponents
