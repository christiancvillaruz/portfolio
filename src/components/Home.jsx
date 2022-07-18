import React from 'react'
import { HiArrowNarrowRight } from  'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Home = () => {
  return (
    <div name="home" className="mt-28 py-20 border-2">
      { /* Introduction */ }
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-subheadings text-3xl font-caveat">Hi there, my name is</p>
        <h1 className="text-4xl sm:text-7xl uppercase text-headings font-abril">Christian Villaruz</h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-subheadings font-caveat">I'm a Web Developer.</h2>
        <p className="text-paragraphs py-4 max-w-[700px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odit rem labore, error voluptates est. Dolorum ipsam reiciendis dolor, fuga eum nostrum repudiandae animi voluptatem, amet, vel aspernatur est perspiciatis?</p>
        { /* Buttons */ }
        <div className="flex flex-row gap-3">
          <button className="text-subheadings group border-2 px-6 py-3 rounded-md flex items-center hover:font-bold hover:bg-headings hover:border-headings hover:text-zinc-900">My Projects 
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          <button className="text-subheadings border-2 px-6 py-3 rounded-md flex items-center hover:font-bold hover:bg-headings hover:border-headings hover:text-zinc-900">My Resumé 
            <span>
              <BsFillPersonLinesFill className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home