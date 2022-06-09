import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {

  const navigate = useNavigate();

  return (
    <div
      className='logo'
      onClick={() => navigate('/')}
    >
      <h1>
        K
      </h1>
    </div>
  )
}

export default Logo