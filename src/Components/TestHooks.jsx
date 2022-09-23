import React from 'react'
import useTimeout from '../hooks/useTimeout'

const TestHooks = () => {


    const {ready} =useTimeout(5000)
  return (
    <div>
      <h2>
        {ready && "This is our custom hook setTimeout"}
      </h2>
    </div>
  )
}

export default TestHooks
