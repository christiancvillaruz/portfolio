import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-stone-900 text-gray-300">
      <div>
        <img src={ Logo } alt="logo" className="w-[50px]" />
      </div>
      { /* Navbar Items */ }
      <ul className="hidden md:flex font-medium">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      { /* Hamburger Menu */ }
      <div className="md:hidden z-10" onClick={ handleClick }>
        { !nav ? <FaBars/> : <FaTimes/> }
      </div>
      { /* Responsive Menu (Mobile) */ }
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-stone-900 flex flex-col justify-center items-center text-center'}>
        <ul>
          <li className="py-2 text-lg">Home</li>
          <li className="py-2 text-lg">About</li>
          <li className="py-2 text-lg">Skills</li>
          <li className="py-2 text-lg">Projects</li>
          <li className="py-2 text-lg">Contact</li>
        </ul>
      </div>
      { /* Social Media */ }
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-900">
            <a href="https://linkedin.com/in/christiancvillaruz" target="_blank" className="flex justify-between items-center w-full text-gray-300">LinkedIn<FaLinkedin size={30} /></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
            <a href="https://github.com/christiancvillaruz" target="_blank" className="flex justify-between items-center w-full text-gray-300">GitHub<FaGithub size={30} /></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a href="https://facebook.com/kristyaaaaan7" target="_blank" className="flex justify-between items-center w-full text-gray-300">Facebook<FaFacebook size={30} /></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-500">
            <a href="https://twitter.com/robertssson13" target="_blank" className="flex justify-between items-center w-full text-gray-300">Twitter<FaTwitter size={30} /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar