import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
/* import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png' */

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)

  return (
    <div className="p-2 mt-0 fixed z-10 top-0 w-full h-[80px] flex justify-end items-center px-4 bg-home">
      { /* Navbar Items */ }
      <ul className="hidden md:flex font-medium text-subheadings">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      { /* Hamburger Menu */ }
      <div className="md:hidden z-10 text-subheadings" onClick={ handleClick }>
        { !nav ? <FaBars/> : <FaTimes/> }
      </div>
      { /* Responsive Menu (Mobile) */ }
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-home text-subheadings flex flex-col justify-center items-center text-center'}>
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
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-accent">
            <a href="https://linkedin.com/in/christiancvillaruz" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-subheadings">LinkedIn<FaLinkedin size={30} /></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-accent">
            <a href="https://github.com/christiancvillaruz" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-subheadings">GitHub<FaGithub size={30} /></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-accent">
            <a href="https://facebook.com/kristyaaaaan7" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-subheadings">Facebook<FaFacebook size={30} /></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-accent">
            <a href="https://twitter.com/robertssson13" target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-subheadings">Twitter<FaTwitter size={30} /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar