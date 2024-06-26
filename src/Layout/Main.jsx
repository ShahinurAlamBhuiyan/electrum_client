import { Outlet, useLocation } from 'react-router-dom';
import MainNavbar from '../components/shared/MainNavbar/MainNavbar';
import Footer from '../components/shared/Footer/Footer';
import './Style.css';

const Main = () => {
  const location = useLocation();

  const hiddenPaths = ['/sign-in', '/sign-up'];

  const shouldShowNavAndFooter = !hiddenPaths.includes(location.pathname);

  return (
    <div className='main_layout'>
      {shouldShowNavAndFooter && <MainNavbar />}
      <Outlet />
      {shouldShowNavAndFooter && <Footer />}
    </div>
  );
};

export default Main;
