import React, { useState } from 'react'
import './form.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Form = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const toggleShowPassword = (passwordStateSetter) => {
    passwordStateSetter((prevState) => !prevState)
  }

  const handleInputChange = (e, inputStateSetter) => {
    inputStateSetter(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match')
    } else {
      // Simulate account creation logic
      console.log('Creating account with email:', email)
      console.log('Account created successfully')
      // Reset form fields
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setErrorMessage('')
    }
  }

  return (
    <form className='container-form' onSubmit={handleSubmit}>
      <div className='password-input'>
        <input
          placeholder='email@example.com'
          type='email'
          value={email}
          onChange={(e) => handleInputChange(e, setEmail)}
        />
      </div>
      <div className='password-input'>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          value={password}
          onChange={(e) => handleInputChange(e, setPassword)}
        />
        <button
          type='button'
          className='password-toggle'
          onClick={() => toggleShowPassword(setShowPassword)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className='password-input'>
        <input
          type={showPassword2 ? 'text' : 'password'}
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => handleInputChange(e, setConfirmPassword)}
        />
        <button
          type='button'
          className='password-toggle'
          onClick={() => toggleShowPassword(setShowPassword2)}
        >
          {showPassword2 ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      <button className='form-button' type='submit'>
        Sign up
      </button>
    </form>
  )
}

export default Form
