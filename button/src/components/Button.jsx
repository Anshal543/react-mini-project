import React from 'react'

const Button = ({children,color}) => {
  return (
    <div>
        <button className={`text-green-400 bg-${color}-950`}>{children}</button>
    </div>
  )
}

export default Button