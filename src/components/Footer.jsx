import React from 'react'
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div name="footer" className="mt-28 py-20">
      <hr />
       <footer className="text-center text-subheadings pt-12">
        <div className="flex flex-col justify-center items-center gap-1">
          <h3>Made with ♥ by Christian Villaruz.</h3>
          <h4>Copyright &copy; 2022.</h4>
        </div>
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