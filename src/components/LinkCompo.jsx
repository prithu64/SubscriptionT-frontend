import React from 'react'
import { Link } from 'react-router-dom'

function LinkCompo({label,to}) {
  return (
    <Link className='dark:text-white/60 underline text-xs text-end' to={to}><h1>{label}</h1></Link>
  )
}

export default LinkCompo