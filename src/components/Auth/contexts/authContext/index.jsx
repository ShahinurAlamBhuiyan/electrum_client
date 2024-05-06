import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
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
    role: ''
  })

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        setCurrentUser(user)
        setUserLoggedIn(true)
        setLoading(false)
        // const email = user.email

        // try {
        //   const response = await axios.get(
        //     `${import.meta.env.VITE_SERVER}/user`,
        //     {
        //       params: { email }
        //     }
        //   )
        //   const fetchedUser = response.data
        //   setLoggedInUser({
        //     name: fetchedUser.name,
        //     email: fetchedUser.email,
        //     role: fetchedUser.role
        //   })

        //   setCurrentUser(user)
        //   setUserLoggedIn(true)
        // } catch (err) {
        //   console.error('Error fetching user data:', err)
        //   setLoggedInUser({
        //     name: '',
        //     email: '',
        //     role: ''
        //   })
        // }
      } else {
        setCurrentUser(null)
        setUserLoggedIn(false)
        setLoggedInUser({
          name: '',
          email: '',
          role: ''
        })
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const value = {
    currentUser,
    userLoggedIn,
    setUserLoggedIn,
    loading,
    loggedInUser
  }

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
