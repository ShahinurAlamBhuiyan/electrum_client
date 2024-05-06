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
      <ul>
        {components.map((component, index) => (
          <li key={index}>
            {component.name}: {component.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyComponents
