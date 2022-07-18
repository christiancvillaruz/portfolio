import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import { FaSearch, FaGithub, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaLaravel } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTailwindcss, SiPhp, SiJquery, SiMysql, SiBootstrap, SiGithub } from 'react-icons/si'

const Projects = () => {
  return (
    <div name="projects" className="mt-28 py-20">
      <div className="max-w-[1000px] mx-auto w-full h-full p-4 flex flex-col justify-center">
        { /* Major Projects */ }
        <div className="pb-8">
          <h1 className="text-5xl uppercase font-bebas inline text-headings border-b-4 border-paragraphs">Project Highlights</h1>
          <h3 className="text-3xl text-subheadings font-caveat py-4">Here are some of my major projects!</h3>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-20">
          <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto major-content-div">
          </div>
          <div>
            <h1 className="text-4xl text-headings font-bebas uppercase sm:text-right">Patients and Appointments Management System with Data Analytics</h1>
            <div className="text-right text-subheadings">
              <div className="flex flex-row justify-end items-end mt-1">
                <FaHtml5 size={25} />
                <FaCss3Alt size={25} />
                <IoLogoJavascript size={25} />
                <FaReact size={25} />
              </div>
            </div>
            <p className="py-4 text-justify indent-10 text-paragraphs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis neque exercitationem nostrum temporibus perspiciatis eaque, tenetur laudantium eius dolores provident, nisi non, hic doloremque beatae ipsum ullam perferendis et quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt omnis magnam, quia quae ipsum numquam dolorem aperiam assumenda deleniti libero inventore voluptas sapiente beatae tenetur animi architecto quasi at!</p>
            <div className="flex flex-row justify-end gap-3">
              <a href="/">
                <button className="text-subheadings border-2 px-6 py-3 rounded-md flex items-center hover:font-bold hover:bg-headings hover:border-headings hover:text-zinc-900">View in Github 
                <SiGithub className="ml-3" />
              </button>
              </a>
            </div>
          </div>
        </div>
        { /* Other Projects */ }
        <div className="pb-8">
          <h1 className="text-5xl uppercase font-bebas inline text-headings border-b-4 border-paragraphs">Other Projects</h1>
          <h3 className="text-3xl text-subheadings font-caveat py-4">Check out my other projects!</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-subheadings font-bebas">
                Random Lyrics Generator
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaSearch size={20} /></button>
                </a>
                <a href="/">
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
                </a>
              </div>
              <div className="pt-8 text-center text-zinc-900">
                <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
                <div className="flex flex-row justify-center items-center mt-1">
                  <FaHtml5 size={25} />
                  <FaCss3Alt size={25} />
                  <IoLogoJavascript size={25} />
                  <FaReact size={25} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-subheadings font-bebas">
                URL Shortener
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaSearch size={20} /></button>
                </a>
                <a href="/">
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
                </a>
              </div>
              <div className="pt-8 text-center text-zinc-900">
                <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
                <div className="flex flex-row justify-center items-center mt-1">
                  <FaHtml5 size={25} />
                  <FaCss3Alt size={25} />
                  <IoLogoJavascript size={25} />
                  <FaReact size={25} />
                  <SiTailwindcss size={25} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-subheadings font-bebas">
                Landing Page
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaSearch size={20} /></button>
                </a>
                <a href="/">
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
                </a>
              </div>
              <div className="pt-8 text-center text-zinc-900">
                <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
                <div className="flex flex-row justify-center items-center mt-1">
                  <FaHtml5 size={25} />
                  <FaCss3Alt size={25} />
                  <SiTailwindcss size={25} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-subheadings font-bebas">
                Simple CRUD Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaSearch size={20} /></button>
                </a>
                <a href="/">
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
                </a>
              </div>
              <div className="pt-8 text-center text-zinc-900">
                <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
                <div className="flex flex-row justify-center items-center mt-1">
                  <FaHtml5 size={25} />
                  <FaCss3Alt size={25} />
                  <IoLogoJavascript size={25} />
                  <FaBootstrap size={25} />
                  <SiPhp size={25} />
                  <FaLaravel size={25} />
                  <SiJquery size={25} />
                  <SiMysql size={25} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-subheadings font-bebas">
                SongsLyrics
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaSearch size={20} /></button>
                </a>
                <a href="/">
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
                </a>
              </div>
              <div className="pt-8 text-center text-zinc-900">
                <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
                <div className="flex flex-row justify-center items-center mt-1">
                  <FaHtml5 size={25} />
                  <FaCss3Alt size={25} />
                  <IoLogoJavascript size={25} />
                  <SiBootstrap size={25} />
                  <SiJquery size={25} />
                  <SiPhp size={25} />
                  <SiMysql size={25} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${WorkImg})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-subheadings font-bebas">
                My Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaSearch size={20} /></button>
                </a>
                <a href="/">
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaGithub size={20} /></button>
                </a>
              </div>
              <div className="pt-8 text-center text-zinc-900">
                <p className="font-bold uppercase tracking-widest text-sm">Technologies Used</p>
                <div className="flex flex-row justify-center items-center mt-1">
                  <FaHtml5 size={25} />
                  <FaCss3Alt size={25} />
                  <IoLogoJavascript size={25} />
                  <FaReact size={25} />
                  <SiTailwindcss size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects