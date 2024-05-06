import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'
// import { auth } from '../../firebase/firebase'
// import { onAuthStateChanged } from 'firebase/auth'
import loadingGif from '../../../../assets/loading.gif'

const AuthContext = createContext()

export function useAuth () {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    role: '',
    _id: '',
  })

  const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async user => {
  //     if (user) {
  //       setCurrentUser(user)
  //       setUserLoggedIn(true)
  //       setLoading(false)
  //     } else {
  //       setCurrentUser(null)
  //       setUserLoggedIn(false)
  //       setLoggedInUser({
  //         name: '',
  //         email: '',
  //         role: ''
  //       })
  //     }
  //     setLoading(false)
  //   })

  //   return () => unsubscribe()
  // }, [])
  useEffect(() => {
    if(userLoggedIn){
      localStorage.setItem('user', JSON.stringify(loggedInUser))
    }
  }, [userLoggedIn])

  const value = {
    currentUser,
    setCurrentUser,
    userLoggedIn,
    setUserLoggedIn,
    loggedInUser,
    setLoggedInUser,
    loading,
    setLoading
  }
  console.log(loggedInUser)
  return (
    <AuthContext.Provider value={value}>
      {!loading ? (
        children
      ) : (
        <img
          style={{ width: '100vw', height: '100vh' }}
          src={loadingGif}
          alt='loading...'
        />
      )}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthProvider
