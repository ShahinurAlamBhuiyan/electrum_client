import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import MainNavbar from '../components/shared/MainNavbar/MainNavbar'
import Footer from '../components/shared/Footer/Footer'
import './Style.css'
import { useLoading } from '../Providers'
import { useEffect } from 'react'
import Loader from '../components/Loader/Loader'

const Main = () => {
  const location = useLocation()
  const navigation = useNavigation()

  const { isLoading, setIsLoading } = useLoading()
  useEffect(() => {
    if (navigation.state === 'loading') {
      setIsLoading(true)
    } else {
      const delay = setTimeout(() => {
        setIsLoading(false) 
      }, 3000) 

      // Clear the timeout when the effect re-runs to avoid memory leaks
      return () => clearTimeout(delay)
    }
  }, [navigation.state, setIsLoading])

  // Handle Private Routing....
  const hiddenPaths = ['/sign-in', '/sign-up']
  const shouldShowNavAndFooter = !hiddenPaths.includes(location.pathname)

  return (
    <>
      {isLoading && <Loader />}
      {shouldShowNavAndFooter && <MainNavbar />}
      <Outlet />
      {shouldShowNavAndFooter && <Footer />}
    </>
  )
}

export default Main
