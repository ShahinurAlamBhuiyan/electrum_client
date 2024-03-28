import { Outlet } from 'react-router-dom'
import MainNavbar from '../components/shared/MainNavbar/MainNavbar'
import './Style.css'

const Main = () => {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  )
}

export default Main
