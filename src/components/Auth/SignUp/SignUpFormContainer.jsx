import './Style.css'

import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle
} from '../firebase/auth'

import googleIcon from '../../../assets/Social_icons/googleIcon.png'
import { useAuth } from '../contexts/authContext'
import axios from 'axios'

const SignUpFormContainer = () => {
  const { userLoggedIn, setLoading, setUserLoggedIn } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role] = useState('user')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSigningUp, setIsSigningUp] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async e => {
    e.preventDefault()
    const allowedEmailDomains = ['gmail.com', 'yahoo.com', 'outlook.com']

    const emailDomain = email.split('@')[1]

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }

    if (!allowedEmailDomains.includes(emailDomain)) {
      setErrorMessage('Invalid email domain. Please use a valid email domain.')
      return
    }

    if (!isSigningUp) {
      try {
        await doCreateUserWithEmailAndPassword(email, password)
        storeUserToDB(name, email, role)
        setIsSigningUp(true)
        setLoading(true)
        setUserLoggedIn(true)
        alert('Your account was created successfully!')
      } catch (error) {
        console.log(error.message)
        setErrorMessage(error.message)
      }
    }
  }

  // POST REQUEST....
  const storeUserToDB = async (name, email, role) => {
    try {
      setLoading(false)
      await axios.post(`${import.meta.env.VITE_SERVER}/signup`, {
        name,
        email,
        role
      }).then(res => 
        getUserByEmail(res?.data?.email)
      )
    } catch (error) {
      console.error('Sign-up failed:', error.response.data.error)
      setErrorMessage('Sign-up failed. Please try again.')
      setIsSigningUp(false)
    }
  }

  const onGoogleSignUp = e => {
    e.preventDefault()
    if (!isSigningUp) {
      setIsSigningUp(true)
      doSignInWithGoogle()
        .then(res => {
          console.log(res.user.email)
          storeUserToDB(res.user.displayName, res.user.email, role)
          setLoading(true)
          setUserLoggedIn(true)
        })
        .catch(err => {
          console.log(err)
          setIsSigningUp(false)
          setErrorMessage('Google sign-up failed. Please try again.')
        })
    }
  }

  const getUserByEmail = async userEmail => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER}/user`, {
        params: { email: userEmail }
      })

      console.log({ response })
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
    <div className='signup-form-container'>
      {userLoggedIn && <Navigate to={'/'} replace={true} />}
      <div className='signup-form-header'>Create Your Account</div>
      <div className='signup-form-wrapper'>
        <form onSubmit={onSubmit}>
          <>
            <label className='signup-form-label'>Name</label>
            <input
              type='name'
              autoComplete='name'
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className='signup-form-input'
            />
          </>
          <>
            <label className='signup-form-label'>Email</label>
            <input
              type='email'
              autoComplete='email'
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='signup-form-input'
            />
          </>

          <>
            <label className='signup-form-label'>Password</label>
            <input
              type='password'
              autoComplete='new-password'
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='signup-form-input'
            />
          </>

          <>
            <label className='signup-form-label'>Confirm Password</label>
            <input
              type='password'
              required
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className='signup-form-input'
            />
          </>
          <div
            className='signup-form-signin'
            style={{ background: 'transparent' }}
          >
            Already have an account? <Link to='/sign-in'>Sign in</Link>
          </div>
          {errorMessage && <div className='error-message'>{errorMessage}</div>}

          <button
            type='submit'
            disabled={isSigningUp}
            className={`signup-form-button ${
              isSigningUp ? 'signup-form-button-disabled' : ''
            }`}
          >
            {isSigningUp ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <div className='signup-divider'>
          <div className='signup-divider-line' />
          <div className='signup-divider-text'>OR Sign up with</div>
          <div className='signup-divider-line' />
        </div>

        <button
          onClick={onGoogleSignUp}
          disabled={isSigningUp}
          className={`google-sign-in ${
            isSigningUp ? 'google-sign-in-disabled' : ''
          }`}
        >
          <img className='googleIcon' src={googleIcon} alt='googleIcon' />
          {isSigningUp ? 'Signing Up...' : 'Continue with Google'}
        </button>
      </div>
    </div>
  )
}

export default SignUpFormContainer
