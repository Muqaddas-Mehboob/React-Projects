import React from 'react'

// In container, we define the styling properties for the components
// Accepts properties as children
// 

function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
  )
}

export default Container