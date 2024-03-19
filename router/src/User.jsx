import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {user} = useParams()
  return (
    <div>User:{user}</div>
  )
}

export default User