import React from 'react'
import { HiArrowNarrowRight } from  'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-stone-900">
      { /* Container */ }
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-amber-300">Hi there, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-zinc-200 font-anton tracking-wide">Taylor</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-zinc-400">I'm a Web Developer.</h2>
        <p className="text-zinc-500 py-4 max-w-[700px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odit rem labore, error voluptates est. Dolorum ipsam reiciendis dolor, fuga eum nostrum repudiandae animi voluptatem, amet, vel aspernatur est perspiciatis?</p>
        { /* Buttons */ }
        <div>
          <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-amber-300 hover:border-amber-300 hover:text-zinc-900">My Projects 
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home