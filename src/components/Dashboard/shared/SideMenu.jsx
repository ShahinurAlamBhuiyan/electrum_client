import { useNavigate } from 'react-router-dom'
import './Style.css'

const SideMenu = () => {
  const navigate = useNavigate()
  return (
    <div className="sidebar-container">
            <h1 className="logo" onClick={() => navigate('/')}>
                Electrum
            </h1>
            <div className="nav-links">
                <a href="/dashboard/profile">Profile</a>
                <a href="/dashboard/order">Order</a>
                <a href="/dashboard/add-component">Add Component</a>
                <a href='/dashboard/my-components'>My Component</a> <br />
            </div>
        </div>
  )
}

export default SideMenu
