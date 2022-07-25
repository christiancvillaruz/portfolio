import React from 'react'
import { FaSearch, FaGithub, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaLaravel } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTailwindcss, SiPhp, SiJquery, SiMysql, SiBootstrap } from 'react-icons/si'
import Project1 from '../assets/1.png'
import Project2 from '../assets/2.png'
import Project3 from '../assets/3.png'
import Project4 from '../assets/4.png'
import Project5 from '../assets/5.png'
import LyricsGenerator from '../assets/lyrics-generator.png'
import UrlShortener from '../assets/url-shortener.png'
import VennDiagram from '../assets/venn-diagram.png'
import BmiCalculator from '../assets/bmi.png'
import Calculator from '../assets/calculator.png'
import MyPortfolio from '../assets/my-portfolio.png'
import TwitterMobileFeed from '../assets/twitter-mobile-feed.png'
import InstagramMobileFeed from '../assets/instagram-mobile-feed.png'
import TheGallery from '../assets/gallery.png'

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
          <div style={{ backgroundImage: `url(${Project1})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto major-content-div"></div>
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
          </div>
          <div style={{ backgroundImage: `url(${Project2})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto major-content-div"></div>
          <div>
            <h1 className="text-4xl text-headings font-bebas uppercase sm:text-right">Pre-Enrollment &amp; Admissions System</h1>
            <div className="text-right text-subheadings">
              <div className="flex flex-row justify-end items-end mt-1">
                <FaHtml5 size={25} />
                <FaCss3Alt size={25} />
                <IoLogoJavascript size={25} />
                <FaReact size={25} />
              </div>
            </div>
            <p className="py-4 text-justify indent-10 text-paragraphs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis neque exercitationem nostrum temporibus perspiciatis eaque, tenetur laudantium eius dolores provident, nisi non, hic doloremque beatae ipsum ullam perferendis et quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt omnis magnam, quia quae ipsum numquam dolorem aperiam assumenda deleniti libero inventore voluptas sapiente beatae tenetur animi architecto quasi at!</p>
          </div>
          <div style={{ backgroundImage: `url(${Project3})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto major-content-div"></div>
          <div>
            <h1 className="text-4xl text-headings font-bebas uppercase sm:text-right">Learning Management System</h1>
            <div className="text-right text-subheadings">
              <div className="flex flex-row justify-end items-end mt-1">
                <FaHtml5 size={25} />
                <FaCss3Alt size={25} />
                <IoLogoJavascript size={25} />
                <FaReact size={25} />
              </div>
            </div>
            <p className="py-4 text-justify indent-10 text-paragraphs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis neque exercitationem nostrum temporibus perspiciatis eaque, tenetur laudantium eius dolores provident, nisi non, hic doloremque beatae ipsum ullam perferendis et quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt omnis magnam, quia quae ipsum numquam dolorem aperiam assumenda deleniti libero inventore voluptas sapiente beatae tenetur animi architecto quasi at!</p>
          </div>
          <div style={{ backgroundImage: `url(${Project4})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto major-content-div"></div>
          <div>
            <h1 className="text-4xl text-headings font-bebas uppercase sm:text-right">Library Management System</h1>
            <div className="text-right text-subheadings">
              <div className="flex flex-row justify-end items-end mt-1">
                <FaHtml5 size={25} />
                <FaCss3Alt size={25} />
                <IoLogoJavascript size={25} />
                <FaReact size={25} />
              </div>
            </div>
            <p className="py-4 text-justify indent-10 text-paragraphs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis neque exercitationem nostrum temporibus perspiciatis eaque, tenetur laudantium eius dolores provident, nisi non, hic doloremque beatae ipsum ullam perferendis et quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt omnis magnam, quia quae ipsum numquam dolorem aperiam assumenda deleniti libero inventore voluptas sapiente beatae tenetur animi architecto quasi at!</p>
          </div>
          <div style={{ backgroundImage: `url(${Project5})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto major-content-div"></div>
          <div>
            <h1 className="text-4xl text-headings font-bebas uppercase sm:text-right">Employee Records Management System</h1>
            <div className="text-right text-subheadings">
              <div className="flex flex-row justify-end items-end mt-1">
                <FaHtml5 size={25} />
                <FaCss3Alt size={25} />
                <IoLogoJavascript size={25} />
                <FaReact size={25} />
              </div>
            </div>
            <p className="py-4 text-justify indent-10 text-paragraphs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis neque exercitationem nostrum temporibus perspiciatis eaque, tenetur laudantium eius dolores provident, nisi non, hic doloremque beatae ipsum ullam perferendis et quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt omnis magnam, quia quae ipsum numquam dolorem aperiam assumenda deleniti libero inventore voluptas sapiente beatae tenetur animi architecto quasi at!</p>
          </div>
        </div>
        { /* Other Projects */ }
        <div className="pb-8">
          <h1 className="text-5xl uppercase font-bebas inline text-headings border-b-4 border-paragraphs">Other Projects</h1>
          <h3 className="text-3xl text-subheadings font-caveat py-4">Check out my other projects!</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div style={{ backgroundImage: `url(${LyricsGenerator})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
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
                <div className="flex flex-row justify-center items-center mt-1">
                  <FaHtml5 size={25} />
                  <FaCss3Alt size={25} />
                  <IoLogoJavascript size={25} />
                  <FaReact size={25} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${UrlShortener})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
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
          <div style={{ backgroundImage: `url(${VennDiagram})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
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
                <div className="flex flex-row justify-center items-center mt-1">
                  <FaHtml5 size={25} />
                  <FaCss3Alt size={25} />
                  <SiTailwindcss size={25} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${BmiCalculator})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
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
          <div style={{ backgroundImage: `url(${Calculator})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
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
          <div style={{ backgroundImage: `url(${MyPortfolio})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
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
          <div style={{ backgroundImage: `url(${TwitterMobileFeed})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
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
          <div style={{ backgroundImage: `url(${InstagramMobileFeed})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
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
          <div style={{ backgroundImage: `url(${TheGallery})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            { /* Cards */ }
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-subheadings font-bebas">
                The Gallery
              </span>
              <div className="pt-8 text-center">
                <a href="https://christiancvillaruz.github.io/landing-page-tailwind" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-md px-4 py-3 m-2 bg-headings text-zinc-900 font-bold text-lg"><FaSearch size={20} /></button>
                </a>
                <a href="https://github.com/christiancvillaruz/landing-page-tailwind" target="_blank" rel="noreferrer">
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