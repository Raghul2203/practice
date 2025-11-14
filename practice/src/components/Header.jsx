import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className="w-full bg-blue-400 p-3 flex flex-row justify-around">
            <div className='text-white font-bold w-1/2'>😉Lucifer</div>
            <div className='w-1/2 flex flex-row justify-around text-white font-semibold'>
                <Link to="/">Home</Link>
                <Link to="/todo">Todo</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </div>
    </div>
  )
}

export default Header