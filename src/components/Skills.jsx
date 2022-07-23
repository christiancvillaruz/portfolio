import React from 'react'
import { FaHtml5, FaCss3Alt, FaMicrosoft, FaJava, FaGithub, FaReact, FaLaravel, FaBootstrap } from 'react-icons/fa'
import { SiJavascript, SiPhp, SiCsharp, SiVisualstudio, SiTailwindcss, SiJquery, SiMysql, SiOracle, SiMicrosoftsqlserver, SiAdobephotoshop } from 'react-icons/si'

const Skills = () => {
  return (
    <div name="skills" className="mt-28 py-20">
      { /* Container */ }
      <div className="max-w-[1000px] mx-auto w-full h-full p-4 flex flex-col justify-center">
        { /* Header */ }
        <div>
          <h1 className="text-5xl uppercase font-bebas inline text-headings border-b-4 border-paragraphs">Technical Skills</h1>
          <h3 className="text-3xl text-subheadings font-caveat py-4">Here are the technologies I've worked with!</h3>
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
        { /* Personal Skills Grid */ }
        <div className="w-full py-8">
          <h1 className="text-5xl uppercase font-bebas inline text-headings border-b-4 border-paragraphs">Personal Skills</h1>
          <ul className="list-inside sm:list-outside list-disc text-paragraphs p-4 mt-4">
            <li className="cursor-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, repudiandae ratione distinctio doloribus officiis architecto nulla, laborum corrupti perferendis velit consequatur omnis maxime tempore officia? Eveniet vitae assumenda tempore eum.</li>
            <li className="cursor-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, repudiandae ratione distinctio doloribus officiis architecto nulla, laborum corrupti perferendis velit consequatur omnis maxime tempore officia? Eveniet vitae assumenda tempore eum.</li>
            <li className="cursor-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, repudiandae ratione distinctio doloribus officiis architecto nulla, laborum corrupti perferendis velit consequatur omnis maxime tempore officia? Eveniet vitae assumenda tempore eum.</li>
            <li className="cursor-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, repudiandae ratione distinctio doloribus officiis architecto nulla, laborum corrupti perferendis velit consequatur omnis maxime tempore officia? Eveniet vitae assumenda tempore eum.</li>
          </ul>
        </div>
        { /* What I Do */ }
        <div className="w-full py-8">
          <h1 className="text-5xl uppercase font-bebas inline text-headings border-b-4 border-paragraphs">What I Do</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8">
            <div className="bg-gradient-to-r from-[#557C55] to-[#82aa74] rounded-md text-subheadings p-4">
              <h3 className="text-center font-bebas text-3xl pb-4">Mobile-First Web Design</h3>
              <p className="text-justify indent-8">
                Modern web apps should be able to adapt to any existing devices. Be it a smartphone, tablet, or laptop that comes in various shapes and sizes. As a web developer, I ensure the responsiveness of the user interface while maintaining an excellent user experience.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#557C55] to-[#82aa74] rounded-md text-subheadings p-4">
              <h3 className="text-center font-bebas text-3xl pb-4">Front-end and Back-end</h3>
              <p className="text-justify indent-8">
                As a web developer, It is my responsibility to work on both front-end (the user interface) and back-end (the server/database) of the project. These two must work efficiently in order to provide the best experience to the client.
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#557C55] to-[#82aa74] rounded-md text-subheadings p-4">
              <h3 className="text-center font-bebas text-3xl pb-4">Documentation</h3>
              <p className="text-justify indent-8">
                One of my responsibilities as a developer is to write a proper documentation of the project. I have experience on creating charts, diagrams, write-ups, and screen mock-ups. It must be presented thoroughly, concisely, and precisely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills