import { Outlet } from 'react-router-dom'
import MainNavbar from '../components/shared/MainNavbar/MainNavbar'
import './Style.css'
import Footer from '../components/shared/Footer/Footer'

const Main = () => {
  return (
    <>
      {/* <MainNavbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default Main
