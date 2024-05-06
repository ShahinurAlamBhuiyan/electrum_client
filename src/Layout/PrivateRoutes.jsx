import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../components/Auth/contexts/authContext'

const PrivateRoutes = ({ children }) => {
  const { loggedInUserInfo } = useAuth()
  
  if (!loggedInUserInfo.email) {
    return <Navigate to='/sign-in' />
  }

  return children
}

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired
}

export default PrivateRoutes
