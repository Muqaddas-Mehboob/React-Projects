import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = "text-white",
    className = '', 
    ...props  // Extra properties that user will pass


    // forward refrence hook is used when you to forward the reference of the state of the component
    // forwardRef in React is like saying:
    // "Hey, I want to give someone direct access to a child component’s DOM element or instance without making the child responsible for passing it."
    // It’s used when:
    // You want a parent to control or directly access something inside a child component (like focusing an input).
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button