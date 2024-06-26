import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle
} from '../firebase/auth'

import googleIcon from '../../../assets/Social_icons/googleIcon.png'
import { useAuth } from '../contexts/authContext'
import axios from 'axios'

const SignInFormContainer = () => {
  const { userLoggedIn, setLoading, setUserLoggedIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // console.log(loggedInUser)

  // const fetchUserData = async (email) => {
  //   try {
  //     const response = await axios.get(`${import.meta.env.VITE_SERVER}/user`, {
  //       params: { email }
  //     })
  //     setLoggedInUser(response.data)
  //   } catch (err) {
  //     if (err.response) {
  //       setErrorMessage(err.response.data)
  //     } else {
  //       setErrorMessage('An error occurred while fetching user data')
  //     }
  //     setLoggedInUser(null) // Clear any previously fetched user data
  //   }
  // }

  const onSubmit = async e => {
    e.preventDefault()
    if (!isSigningIn) {
      try {
        await doSignInWithEmailAndPassword(email, password)
        getUserByEmail(email)
        setIsSigningIn(true)
        setLoading(true)
        setUserLoggedIn(true)
      } catch (error) {
        console.log(error.message)
        setErrorMessage(error.message)
      }
    }
  }

  const onGoogleSignIn = e => {
    e.preventDefault()
    if (!isSigningIn) {
      setIsSigningIn(true)

      doSignInWithGoogle()
        .then(res => {
          setLoading(true)
          getUserByEmail(res.user.email)
          setIsSigningIn(true)
          setUserLoggedIn(true)
        })
        .catch(err => {
          console.log(err)
          setIsSigningIn(false)
          setErrorMessage('Google sign-in failed. Please try again.')
        })
    }
  }
  const getUserByEmail = async userEmail => {
    console.log(userEmail)
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER}/user`, {
        params: { email: userEmail }
      })
      localStorage.setItem(
        'user',
        JSON.stringify({
          name: response.data.name,
          email: response.data.email,
          role: response.data.role,
          _id: response.data._id
        })
      )
      setLoading(false)
    } catch (err) {
      if (err.response) {
        setErrorMessage(err.response.data)
      } else {
        setErrorMessage('An error occurred while fetching user data')
      }
      // setLoggedInUser(null) // Clear any previously fetched user data
    }
  }

  return (
    <div className='signin-form-container'>
      {userLoggedIn && <Navigate to={'/'} replace={true} />}
      <h2 className='signin-form-header'>Sign in to Electrum!</h2>
      <div className='signin-form-wrapper'>
        <form onSubmit={onSubmit} className='signin-form'>
          <div className='signin-form-group'>
            <input
              type='email'
              autoComplete='email'
              placeholder='Email Address'
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='signin-form-input'
            />
          </div>

          <div className='signin-form-group'>
            <input
              type='password'
              autoComplete='current-password'
              placeholder='Password'
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='signin-form-input'
            />
            <div className='signin-form-signup'>
              Don’t have account ? <Link to='/sign-up'>Sign-up here</Link>
            </div>
          </div>

          {errorMessage && (
            <div className='signin-error-message'>{errorMessage}</div>
          )}

          <button
            type='submit'
            disabled={isSigningIn}
            className='signin-form-button'
          >
            {isSigningIn ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className='signin-form-footer'>
          <div className='signin-form-divider'>
            <span>Or Sign In with</span>
          </div>
          <button
            onClick={onGoogleSignIn}
            disabled={isSigningIn}
            className='google-sign-in-button'
          >
            <img
              style={{ background: 'transparent' }}
              src={googleIcon}
              alt='google-icon'
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignInFormContainer
