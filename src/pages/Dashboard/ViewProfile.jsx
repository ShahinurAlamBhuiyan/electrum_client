import { useAuth } from '../../components/Auth/contexts/authContext'

const ViewProfile = () => {
  const { loggedInUserInfo } = useAuth()


  return (
    <div>
      <h2>Profile</h2>
      <p>Hello {loggedInUserInfo.name}, Welcome to Electrum Dashboard</p>
      <p>Email: {loggedInUserInfo.email}</p>
    </div>
  )
}

export default ViewProfile
