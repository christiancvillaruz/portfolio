import React from 'react'
import { FaHtml5, FaCss3Alt, FaMicrosoft, FaJava, FaGithub, FaReact, FaLaravel, FaBootstrap } from 'react-icons/fa'
import { SiJavascript, SiPhp, SiCsharp, SiVisualstudio, SiTailwindcss, SiJquery, SiMysql, SiOracle, SiMicrosoftsqlserver, SiAdobephotoshop } from 'react-icons/si'

const Skills = () => {
  return (
    <div name="skills" className="mt-28 py-20 border-2 bg-home">
      { /* Container */ }
      <div className="max-w-[1000px] mx-auto w-full h-full p-4 flex flex-col justify-center">
        { /* Header */ }
        <div>
          <h1 className="text-5xl uppercase font-bebas inline text-headings border-b-4 border-paragraphs">Technical Skills</h1>
          <h3 className="text-3xl text-subheadings font-caveat py-4">Here are the technologies I've worked with</h3>
        </div>
        { /* Technical Skills Grid */ }
        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-300">
            <FaHtml5 size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">HTML5</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <FaCss3Alt size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">CSS3</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <SiJavascript size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">JavaScript</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <SiPhp size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">PHP</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <FaMicrosoft size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">ASP.NET</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <SiCsharp size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">C#</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <SiVisualstudio size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">Visual Basic</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <FaJava size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">Java</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <FaGithub size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">Github</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <SiAdobephotoshop size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">Adobe Photoshop</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <FaReact size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">React</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <SiTailwindcss size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">Tailwind</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <FaLaravel size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">Laravel</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <FaBootstrap size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">Bootstrap</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <SiJquery size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">jQuery</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <SiMysql size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">MySQL</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <SiOracle size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">Oracle</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <SiMicrosoftsqlserver size={100} className="w-20 mx-auto text-paragraphs" />
            <p className="text-subheadings my-4">Microsoft SQL Server</p>
          </div>
        </div>
        <div>
          <h1 className="text-5xl uppercase font-bebas inline text-headings border-b-4 border-paragraphs">Personal Skills</h1>
          <ul className="list-inside sm:list-outside list-disc text-paragraphs p-4 mt-4">
            <li className="cursor-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, repudiandae ratione distinctio doloribus officiis architecto nulla, laborum corrupti perferendis velit consequatur omnis maxime tempore officia? Eveniet vitae assumenda tempore eum.</li>
            <li className="cursor-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, repudiandae ratione distinctio doloribus officiis architecto nulla, laborum corrupti perferendis velit consequatur omnis maxime tempore officia? Eveniet vitae assumenda tempore eum.</li>
            <li className="cursor-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, repudiandae ratione distinctio doloribus officiis architecto nulla, laborum corrupti perferendis velit consequatur omnis maxime tempore officia? Eveniet vitae assumenda tempore eum.</li>
            <li className="cursor-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, repudiandae ratione distinctio doloribus officiis architecto nulla, laborum corrupti perferendis velit consequatur omnis maxime tempore officia? Eveniet vitae assumenda tempore eum.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills