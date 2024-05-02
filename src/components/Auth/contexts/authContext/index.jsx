import PropTypes from 'prop-types'

import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext()

export function useAuth () {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser)
    return unsubscribe
  }, [])

  async function initializeUser (user) {
    if (user) {
      setCurrentUser({ ...user })
      setUserLoggedIn(true)
    } else {
      setCurrentUser(null)
      setUserLoggedIn(false)
    }
    setLoading(false)
  }

  const value = {
    currentUser,
    userLoggedIn,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}


export default AuthProvider
