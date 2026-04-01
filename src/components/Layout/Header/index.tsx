'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext, useEffect, useRef, useState } from 'react'
import { headerData } from '../Header/Navigation/menuData'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import Signin from '@/components/Auth/SignIn'
import SignUp from '@/components/Auth/SignUp'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react/dist/iconify.js'
import { SuccessfullLogin } from '@/components/Auth/AuthDialog/SuccessfulLogin'
import { FailedLogin } from '@/components/Auth/AuthDialog/FailedLogin'
import { UserRegistered } from '@/components/Auth/AuthDialog/UserRegistered'
import AuthDialogContext from '@/app/context/AuthDialogContext'

const Header: React.FC = () => {
  const pathUrl = usePathname()
  const { theme, setTheme } = useTheme()

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const navbarRef = useRef<HTMLDivElement>(null)
  const signInRef = useRef<HTMLDivElement>(null)
  const signUpRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false)
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false)
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen, isSignInOpen, isSignUpOpen])

  const path = usePathname()

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen])

  const authDialog = useContext(AuthDialogContext)

  return (
    <header
          className={`fixed h-24 top-0 py-1 z-50 w-full transition-all ${
            sticky
              ? 'shadow-lg bg-white/95 dark:bg-white/50 backdrop-blur-md' 
              : 'bg-transparent'
          }`}
        >
        
      <div className='container mx-auto max-w-6xl relative flex h-full items-center p-6'>
        {/* Logo - absolute, won't affect nav/button when resized */}
        <div className='absolute left-5 top-1/2 -translate-y-1/2'>
          <Logo />
        </div>
        {/* Nav - centered independently */}
       {/* Nav - Positioned to the left of the Contact button */}
      <nav className='hidden lg:flex absolute right-30 top-1/2 -translate-y-1/2 items-center gap-8'>
        {headerData.map((item, index) => (
          <HeaderLink key={index} item={item} sticky={sticky} />
        ))}
      </nav>

      <div className='absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4'>
        <Link
          href='/contact'
          className="hidden lg:block rounded-lg px-3 py-2 font-medium transition-all bg-white text-orange shadow-md hover:bg-gray-100 active:scale-95"
        >
          Contact Us
        </Link>
          {isSignUpOpen && (
            <div
              ref={signUpRef}   
              className='fixed top-0 m-0! left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
              <div className='relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-darklight'>
                <button
                  onClick={() => setIsSignUpOpen(false)}
                  className=' hover:bg-gray-200 dark:hover:bg-gray-800 p-1 rounded-full absolute -top-5 -right-3 mr-8 mt-8'
                  aria-label='Close Sign In Modal'>
                  <Icon
                    icon='ic:round-close'
                    className='text-2xl dark:text-white'
                  />
                </button>
                <SignUp
                  signUpOpen={(value: boolean) => setIsSignUpOpen(value)}
                />
              </div>
            </div>
          )}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='block lg:hidden p-2 rounded-lg'
            aria-label='Toggle mobile menu'>
            <span className='block w-6 h-0.5 bg-black dark:bg-white'></span>
            <span className='block w-6 h-0.5 bg-black dark:bg-white mt-1.5'></span>
            <span className='block w-6 h-0.5 bg-black dark:bg-white mt-1.5'></span>
          </button>
        </div>   
      </div>

      {navbarOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
      )}

      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}>
        <div className='flex items-center justify-between p-4'>
          <h2 className='text-lg font-bold text-midnight_text dark:text-white'>
            Menu
          </h2>
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label='Close mobile menu'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='dark:text-white'>
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <nav className='flex flex-col items-start p-4'>
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
          <div className='mt-4 flex flex-col gap-4 w-full'>
            <Link
              href='#'
              className='bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white'
              onClick={() => {
                setIsSignInOpen(true)
                setNavbarOpen(false)
              }}>
              Sign In
            </Link>
            <Link
              href='#'
              className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700'
              onClick={() => {
                setIsSignUpOpen(true)
                setNavbarOpen(false)
              }}>
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
      {/* Successsful Login Alert */}
      <div
        className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
          authDialog?.isSuccessDialogOpen == true ? 'block' : 'hidden'
        }`}>
        <SuccessfullLogin />
      </div>
      {/* Failed Login Alert */}
      <div
        className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
          authDialog?.isFailedDialogOpen == true ? 'block' : 'hidden'
        }`}>
        <FailedLogin />
      </div>
      {/* User registration Alert */}
      <div
        className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
          authDialog?.isUserRegistered == true ? 'block' : 'hidden'
        }`}>
        <UserRegistered />
      </div>
    </header>
  )
}

export default Header
