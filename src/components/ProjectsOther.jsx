import React from 'react'
import { FaSearch, FaGithub, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaLaravel } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTailwindcss, SiPhp, SiJquery, SiMysql } from 'react-icons/si'
import LyricsGenerator from '../assets/lyrics-generator.png'
import UrlShortener from '../assets/url-shortener.png'
import VennDiagram from '../assets/venn-diagram.png'
import BmiCalculator from '../assets/bmi.png'
import Calculator from '../assets/calculator.png'
import MyPortfolio from '../assets/my-portfolio.png'
import TwitterMobileFeed from '../assets/twitter-mobile-feed.png'
import InstagramMobileFeed from '../assets/instagram-mobile-feed.png'
import LaravelCrud from '../assets/laravel-crud.png'

const ProjectsOther = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div style={{ backgroundImage: `url(${LyricsGenerator})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
          { /* Cards */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl text-subheadings font-bebas">
              Random Lyrics Generator
            </span>
            <div className="pt-8 text-center">
              <a href="https://christiancvillaruz.github.io/random_lyrics" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaSearch size={20} /></button>
              </a>
              <a href="https://github.com/christiancvillaruz/random_lyrics" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
              </a>
            </div>
            <div className="pt-8 text-center text-zinc-900">
              <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
              <div className="flex flex-row justify-center items-center space-x-2 mt-1">
                <FaHtml5 size={25} />
                <FaCss3Alt size={25} />
                <IoLogoJavascript size={25} />
                <FaReact size={25} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${UrlShortener})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
          { /* Cards */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl text-subheadings font-bebas">
              URL Shortener
            </span>
            <div className="pt-8 text-center">
              <a href="https://christiancvillaruz.github.io/react-url-shortener" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaSearch size={20} /></button>
              </a>
              <a href="https://github.com/christiancvillaruz/react-url-shortener" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
              </a>
            </div>
            <div className="pt-8 text-center text-zinc-900">
              <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
              <div className="flex flex-row justify-center items-center space-x-2 mt-1">
                <FaHtml5 size={25} />
                <FaCss3Alt size={25} />
                <IoLogoJavascript size={25} />
                <FaReact size={25} />
                <SiTailwindcss size={25} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${VennDiagram})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
          { /* Cards */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl text-subheadings font-bebas">
              Venn Diagram
            </span>
            <div className="pt-8 text-center">
              <a href="https://christiancvillaruz.github.io/venn-diagram" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaSearch size={20} /></button>
              </a>
              <a href="https://github.com/christiancvillaruz/venn-diagram" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
              </a>
            </div>
            <div className="pt-8 text-center text-zinc-900">
              <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
              <div className="flex flex-row justify-center items-center space-x-2 mt-1">
                <FaHtml5 size={25} />
                <FaCss3Alt size={25} />
                <IoLogoJavascript size={25} />
                <SiJquery size={25} />
                <FaBootstrap size={25} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${BmiCalculator})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
          { /* Cards */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl text-subheadings font-bebas">
              BMI Calculator
            </span>
            <div className="pt-8 text-center">
              <a href="https://christiancvillaruz.github.io/react-bmi-calculator" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaSearch size={20} /></button>
              </a>
              <a href="https://github.com/christiancvillaruz/react-bmi-calculator" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
              </a>
            </div>
            <div className="pt-8 text-center text-zinc-900">
              <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
              <div className="flex flex-row justify-center items-center space-x-2 mt-1">
                <FaHtml5 size={25} />
                <FaCss3Alt size={25} />
                <IoLogoJavascript size={25} />
                <FaReact size={25} />
                <SiTailwindcss size={25} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Calculator})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
          { /* Cards */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl text-subheadings font-bebas">
              Calculator
            </span>
            <div className="pt-8 text-center">
              <a href="https://christiancvillaruz.github.io/react-calculator" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaSearch size={20} /></button>
              </a>
              <a href="https://github.com/christiancvillaruz/react-calculator" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
              </a>
            </div>
            <div className="pt-8 text-center text-zinc-900">
              <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
              <div className="flex flex-row justify-center items-center space-x-2 mt-1">
                <FaHtml5 size={25} />
                <FaCss3Alt size={25} />
                <IoLogoJavascript size={25} />
                <FaReact size={25} />
                <SiTailwindcss size={25} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${MyPortfolio})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
          { /* Cards */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl text-subheadings font-bebas">
              My Portfolio
            </span>
            <div className="pt-8 text-center">
              <a href="https://github.com/christiancvillaruz/portfolio" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
              </a>
            </div>
            <div className="pt-8 text-center text-zinc-900">
              <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
              <div className="flex flex-row justify-center items-center space-x-2 mt-1">
                <FaHtml5 size={25} />
                <FaCss3Alt size={25} />
                <IoLogoJavascript size={25} />
                <FaReact size={25} />
                <SiTailwindcss size={25} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${TwitterMobileFeed})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
          { /* Cards */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl text-subheadings font-bebas">
              Twitter Mobile Feed
            </span>
            <div className="pt-8 text-center">
              <a href="https://christiancvillaruz.github.io/tailwind-twitter" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaSearch size={20} /></button>
              </a>
              <a href="https://github.com/christiancvillaruz/tailwind-twitter" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
              </a>
            </div>
            <div className="pt-8 text-center text-zinc-900">
              <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
              <div className="flex flex-row justify-center items-center space-x-2 mt-1">
                <FaHtml5 size={25} />
                <FaCss3Alt size={25} />
                <IoLogoJavascript size={25} />
                <SiTailwindcss size={25} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${InstagramMobileFeed})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
          { /* Cards */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl text-subheadings font-bebas">
              Instagram Mobile Feed
            </span>
            <div className="pt-8 text-center">
              <a href="https://christiancvillaruz.github.io/tailwind-instagram-mobile-feed" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaSearch size={20} /></button>
              </a>
              <a href="https://github.com/christiancvillaruz/tailwind-instagram-mobile-feed" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
              </a>
            </div>
            <div className="pt-8 text-center text-zinc-900">
              <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
              <div className="flex flex-row justify-center items-center soace-x-2 mt-1">
                <FaHtml5 size={25} />
                <FaCss3Alt size={25} />
                <SiTailwindcss size={25} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${LaravelCrud})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
          { /* Cards */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl text-subheadings font-bebas">
              Laravel CRUD
            </span>
            <div className="pt-8 text-center">
              <a href="https://github.com/christiancvillaruz/laravel-crud-app" target="_blank" rel="noreferrer">
                <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
              </a>
            </div>
            <div className="pt-8 text-center text-zinc-900">
              <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
              <div className="flex flex-row justify-center items-center space-x-2 mt-1">
                <FaHtml5 size={25} />
                <FaCss3Alt size={25} />
                <IoLogoJavascript size={25} />
                <SiPhp size={25} />
                <FaBootstrap size={25} />
                <FaLaravel size={25} />
                <SiJquery size={25} />
                <SiMysql size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsOther