import React from 'react'
import { FaHeart, FaGithub, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div name="footer" className="mt-28 py-20">
      <hr />
       <footer className="text-center text-subheadings pt-12">
        <h1 className="flex flex-row justify-center items-center gap-1">
          Made with <FaHeart/> by Christian Villaruz.
          Copyright &copy; 2022.
        </h1>
        <ul className="flex flex-row justify-center items-center p-4 text-3xl">
          <li><a href="https://github.com/christiancvillaruz" target="_blank" rel="noreferrer"><FaGithub/></a></li>
          <li><a href="https://twitter.com/robertssson13" target="_blank" rel="noreferrer"><FaTwitter/></a></li>
          <li><a href="https://facebook.com/kristyaaaan7" target="_blank" rel="noreferrer"><FaFacebook/></a></li>
          <li><a href="https://linkedin.com/in/christiancvillaruz" target="_blank" rel="noreferrer"><FaLinkedin/></a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer