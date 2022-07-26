import React from 'react'
import { SiAdobephotoshop, SiSketchup } from 'react-icons/si'
import VectorArts from '../assets/7.png'
import SketchUpArts from '../assets/8.png'

const ProjectsArts = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 mb-20">
        <div style={{ backgroundImage: `url(${VectorArts})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto major-content-div"></div>
        <div>
          <h1 className="text-4xl text-headings font-bebas uppercase sm:text-right">Vector &amp; Graphic Arts</h1>
          <div className="text-right text-subheadings">
            <div className="flex flex-row justify-end items-end mt-1">
              <SiAdobephotoshop size={25} />
            </div>
          </div>
          <p className="py-4 text-justify indent-10 text-paragraphs">These are some of my vector and graphic arts. As you can see, it's mostly an illustration of my favorite artists as they inspire me with their music. Made using Adobe Photoshop CS6.</p>
        </div>
        <div style={{ backgroundImage: `url(${SketchUpArts})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto major-content-div"></div>
        <div>
          <h1 className="text-4xl text-headings font-bebas uppercase sm:text-right">SketchUp Models</h1>
          <div className="text-right text-subheadings">
            <div className="flex flex-row justify-end items-end mt-1">
              <SiSketchup size={25} />
            </div>
          </div>
          <p className="py-4 text-justify indent-10 text-paragraphs">These are some of my 3D Models made using SketchUp. It's one of my earliest hobbies as a teenager. I was also custom content (CC) creator back then, which I import to the game.</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectsArts