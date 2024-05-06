import { useNavigate } from 'react-router-dom'
import './Style.css'

const SideMenu = () => {
  const navigate = useNavigate()
  return (
    <div className='sidebar_container'>
      <h1 style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        Electrum
      </h1>
      <a href='/dashboard/profile'>profile</a> <br />
      <a href='/dashboard/order'>order</a> <br />
      <a href='/dashboard/add-component'>add component</a> <br />
      <a href='/dashboard/my-components'>my component</a> <br />
    </div>
  )
}

export default SideMenu
