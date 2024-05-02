import { Outlet } from 'react-router-dom'

import SideMenu from '../components/Dashboard/shared/SideMenu'

const Dashboard = () => {
  // const [inactive, setInactive] = useState(false)
  return (
    <div className='dashboard_layout'>
      <div className='dashboard_sidebar'>
        <SideMenu />
      </div>
      <div className='dashboard_outlet'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
