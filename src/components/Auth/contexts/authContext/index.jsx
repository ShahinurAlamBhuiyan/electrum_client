import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';
import loadingGif from '../../../../assets/loading.gif';
import { useLocation } from 'react-router-dom';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loggedInUserInfo, setLoggedInUserInfo] = useState({
    name: '',
    email: ''
  });

  const [loading, setLoading] = useState(true);
  const path = useLocation();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    setLoggedInUserInfo(JSON.parse(userData));
    
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [path.pathname]);

  const value = {
    currentUser,
    setCurrentUser,
    userLoggedIn,
    setUserLoggedIn,
    loggedInUserInfo,
    setLoggedInUserInfo,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? ( 
        <img
          style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
          src={loadingGif}
          alt='loading...'
        />
      ) : ( 
        children
      )}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
