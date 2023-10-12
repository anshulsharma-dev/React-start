import React from 'react'
import { Container, LogoutBtn, Logo } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate();

  navItems = [{
    name: 'Home',
    slug: '/',      // Slug is just other word for path or url .
    active: true,
  },
  {
    name: 'Login',
    slug: '/login',
    active: !authStatus,
  },
  {
    name: 'Signup',
    slug: '/signup',
    active: !authStatus,
  },
  {
    name: 'All Post',
    slug: '/all-posts',
    active: authStatus,
  },
  {
    name: "Add Post",
    slug: '/add-posts',
    active: authStatus,
  },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <container>
        <nav className='flex'>

          <div className='mr-4'>
            <link to="/">
              <Logo width='70px'/>
            </link>
          </div>

          <ul>

            {navItems.map((item) => item.active ? (
              <li key={item.name}  >
                <button 
                className='inline-block px-6 py- duration-200 hover:bg-blue-100 rounded-full' 
                onClick={() => navigate(item.slug)}>  
                {/* navigate , the use useNavigate method is just same as the Link , both comes from the react-router-dom */}
                  {item.name}
                </button>
              </li>
            ) : null 
            )}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
            {/* This is a very simple and mostly used syntax  authSatus && ()  that if  the authStatus is true then only the () will show or else not */}
            
          </ul>

        </nav>
      </container>
    </header>
  )
}

export default Header
