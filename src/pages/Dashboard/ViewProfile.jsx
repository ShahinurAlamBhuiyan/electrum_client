import { useAuth } from '../../components/Auth/contexts/authContext'

const ViewProfile = () => {
  const { loggedInUserInfo } = useAuth()


  return (
    // <div>
    //   <h2>Profile</h2>
    //   <p>Hello {loggedInUserInfo.name}, Welcome to Electrum Dashboard</p>
    //   <p>Email: {loggedInUserInfo.email}</p>
    //   <p>Role: {loggedInUserInfo.role}</p>
    //   {/* <p>ID: {loggedInUserInfo._id}</p> */}
      
    // </div>
    <div className="profile-container">
            <h2 className="profile-heading">Profile</h2>
            <div className="profile-info">
                <p className="welcome-message">Hello, <span className="user-name">{loggedInUserInfo.name}</span></p>
                <p className="profile-detail"><strong>Email:</strong> {loggedInUserInfo.email}</p>
                <p className="profile-detail"><strong>Role:</strong> {loggedInUserInfo.role}</p>
            </div>
        </div>
  )
}

export default ViewProfile
