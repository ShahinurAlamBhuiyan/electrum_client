import './Style.css'

import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle
} from '../firebase/auth'

import axios from 'axios'

import googleIcon from '../../../assets/Social_icons/googleIcon.png'
import { useAuth } from '../contexts/authContext'

const SignUpFormContainer = () => {
  const { userLoggedIn } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role] = useState('user')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSigningUp, setIsSigningUp] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }
    if (!isSigningUp) {
      setIsSigningUp(true)
      try {
        await doCreateUserWithEmailAndPassword(email, password)
        alert('your account created successfully!')
        try {
          const response = await axios.post(
            'http://localhost:3001/api/signup',
            { name, email, password, role }
          )
          console.log(response.data.message)
        } catch (error) {
          console.error('Sign-up failed:', error.response.data.error)
          setErrorMessage('Sign-up failed. Please try again.')
          setIsSigningUp(false)
        }
      } catch (error) {
        setErrorMessage('Sign-up failed. Please try again.')
        setIsSigningUp(false)
      }
    }
  }

  const onGoogleSignUp = e => {
    e.preventDefault()
    if (!isSigningUp) {
      setIsSigningUp(true)
      doSignInWithGoogle().catch(err => {
        console.log(err)
        setIsSigningUp(false)
        setErrorMessage('Google sign-up failed. Please try again.')
      })
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
