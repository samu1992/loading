import React, { useState } from 'react'
import './login.css'
import Form from '../Form/Form'

const Login = () => {
  const [checked, setChecked] = useState(false)
  const handleClick = () => {
    setChecked(!checked)
  }
  return (
    <main className='container-login'>
      <section className='light'>
        <img src='Light.svg' />
        <button className='light-button'>Login</button>
      </section>
      <div className='text'>
        <h5>Welcome!</h5>
        <p>How would you like to get started?</p>
      </div>
      <section className='terms'>
        <div id='checkbox' className={`checkbox ${checked ? 'checked' : ''}`} onClick={handleClick}><i className='fa-solid fa-check' /></div>
        <label for='checkbox'>I have read and agree to the <span>Terms & Conditions</span> and <span>Privacy Policy.</span></label>
      </section>
      <section className='social-media'>
        <div className='icon'><img className='img-icon' src='MetaMask_Fox 1.svg' alt='media' /></div>
        <div className='icon'><img className='img-icon' src='WalletConnect.svg' alt='media' /></div>
        <div className='icon'><img className='img-icon' src='Google.svg' alt='media' /></div>
        <div className='icon'><img className='img-icon' src='Facebook.svg' alt='media' /></div>
        <div className='icon'><img className='img-icon' src='Vector.svg' alt='media' /></div>
      </section>
      <section className='container-or'>
        <div className='div-or' />
        <p className='p-or'>or</p>
        <div className='div-or' />
      </section>
      <Form />
    </main>
  )
}
export default Login
