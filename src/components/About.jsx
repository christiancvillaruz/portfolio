import React from 'react'
import GradPic1 from '../assets/gradpic-1.png'

const About = () => {
  return (
    <div name="about" className="mt-28 py-20 bg-home">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <h1 className="text-5xl uppercase font-bebas inline text-headings border-b-4 border-paragraphs">About Me</h1>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl text-subheadings">
            <div className="sm:float-right">
              <img class="rounded-md mx-auto w-[18rem]" src={ GradPic1 } alt="graduation-pic" />
            </div>
          </div>
          <div className="text-paragraphs">
            <div className="text-4xl text-subheadings">
              <h3 className="font-caveat">Nice to meet you, where you been?</h3>
            </div>
            <h3 className="mt-4 text-justify indent-10 sm:text-left sm:indent-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse pariatur architecto repudiandae! Similique reiciendis rem facilis iste rerum inventore debitis assumenda porro quam eligendi! Dolores recusandae dolorem similique odio eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, atque nam dolor iure soluta perspiciatis asperiores nostrum aperiam a vel animi commodi obcaecati, ad molestiae fuga, harum distinctio nemo exercitationem.
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About