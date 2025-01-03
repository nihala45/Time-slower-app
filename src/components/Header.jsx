import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false)  // This should be replaced with actual user authentication logic

  const handleLogin = () => {
    navigate('/login')
  }

  const handleProfileClick = () => {
    navigate('/profile')
  }

  return (
    <header className="sticky top-0 z-10 px-4 lg:px-6 h-16 flex items-center  shadow-md">
      <a className="flex items-center justify-center" href="#">
        <span onClick={() => navigate('/')} className="ml-2 text-lg font-bold text-gray-400 ">365 Counter</span>
      </a>

      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        {/* Profile or Login button */}
        {isLoggedIn ? (
          <button onClick={handleProfileClick} className="flex items-center space-x-2">
            <FaUserCircle className="text-2xl" />
            <span className="text-sm">Profile</span>
          </button>
        ) : (
          <button onClick={handleLogin} className="text-sm font-semibold text-blue-500">
            Login
          </button>
        )}
      </nav>
    </header>
  )
}

export default Header
