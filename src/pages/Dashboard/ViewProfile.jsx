import { useAuth } from '../../components/Auth/contexts/authContext'

const ViewProfile = () => {
  const { loggedInUser } = useAuth()


  return (
    <div style={{ color: 'white', padding: '50px' }}>
      <h2>Profile</h2>
      <p>Hello {loggedInUser.name}, Welcome to Electrum Dashboard</p>
      <p>Email: {loggedInUser.email}</p>
    </div>
  )
}

export default ViewProfile
