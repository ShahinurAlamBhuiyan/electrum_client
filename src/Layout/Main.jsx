import { Outlet } from 'react-router-dom'
import MainNavbar from '../components/shared/MainNavbar/MainNavbar'

const Main = () => {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  )
}

export default Main
