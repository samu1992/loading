import React from 'react'
import Logo from '../Logo'
import './loading.css'

const Loading = () => {
  return (
    <section className='container'>
      <Logo />
      <div className='container-loading'>
        <div className='loading' />
      </div>
    </section>
  )
}

export default Loading
