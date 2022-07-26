import React from 'react'
import { FaHtml5, FaCss3Alt, FaMicrosoft, FaBootstrap } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiCsharp, SiPhp, SiJquery, SiMysql, SiMicrosoftsqlserver } from 'react-icons/si'
import Project1 from '../assets/1.png'
import Project2 from '../assets/2.png'
import Project3 from '../assets/3.png'
import Project4 from '../assets/4.png'
import Project5 from '../assets/5.png'

const ProjectsMajor = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 mb-20">
        <div style={{ backgroundImage: `url(${Project1})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto major-content-div"></div>
        <div>
          <h1 className="text-4xl text-headings font-bebas uppercase sm:text-right">Patients and Appointments Management System with Data Analytics</h1>
          <div className="text-right text-subheadings">
            <div className="flex flex-row justify-end items-end space-x-2 mt-1">
              <FaHtml5 size={25} />
              <FaCss3Alt size={25} />
              <IoLogoJavascript size={25} />
              <FaBootstrap size={25} />
              <SiJquery size={25} />
              <SiPhp size={25} />
              <SiMysql size={25} />
            </div>
          </div>
          <div className="py-4">
            <p className="text-justify indent-10 text-paragraphs">This served as our group's Capstone Project in partial fulfillment of the requirements for my bachelor's degree in the final semester, Academic Year 2021-2022. This project automates our client's appointment booking and patient administration. Furthermore, the system has excellent descriptive and predictive Data Analytics, which assisted the clinic in assessing the needs of its stakeholders. With the system in place, the daily clinic management became more spontaneous and coordinated.</p>
            <p className="py-4 text-subheadings">
              <span className="text-2xl font-caveat">Project Highlights: </span>
              Data Analytics, AJAX, Automation, Realtime, File Uploads, Email &amp; SMS Notifications
            </p>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Project2})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto major-content-div"></div>
        <div>
          <h1 className="text-4xl text-headings font-bebas uppercase sm:text-right">Pre-Enrollment &amp; Admissions System</h1>
          <div className="text-right text-subheadings">
            <div className="flex flex-row justify-end items-end space-x-2 mt-1">
              <FaHtml5 size={25} />
              <FaCss3Alt size={25} />
              <IoLogoJavascript size={25} />
              <SiCsharp size={25} />
              <FaBootstrap size={25} />
              <SiJquery size={25} />
              <SiPhp size={25} />
              <SiMysql size={25} />
            </div>
          </div>
          <div className="py-4">
            <p className="text-justify indent-10 text-paragraphs">This project was also supposed to be our group's Capstone Project, however due to unforseen circumstances, it was scrapped later on at 70% completion. This project intends to modernize our university's present manual method to managing pre-enrollment and admissions operations with a computerized one. It has a well-organized applicant records with search filtering functions for the evaluator, as well as an admissions exam module with Data Analytics and a breakdown of the applicant's (student's) scores to determine which area he/she needs to improve. It also suggests a course/program based on the scores accumulated in the admissions exam.</p>
            <p className="py-4 text-subheadings">
              <span className="text-2xl font-caveat">Project Highlights: </span>
              Data Analytics, AJAX, Automation, Realtime, Quiz Module, File Uploads, Email &amp; SMS Notifications
            </p>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Project3})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto major-content-div"></div>
        <div>
          <h1 className="text-4xl text-headings font-bebas uppercase sm:text-right">Learning Management System</h1>
          <div className="text-right text-subheadings">
            <div className="flex flex-row justify-end items-end space-x-2 mt-1">
              <FaHtml5 size={25} />
              <FaCss3Alt size={25} />
              <IoLogoJavascript size={25} />
              <FaBootstrap size={25} />
              <SiJquery size={25} />
              <SiPhp size={25} />
              <SiMicrosoftsqlserver size={25} />
            </div>
          </div>
          <div className="py-4">
            <p className="text-justify indent-10 text-paragraphs">This was created as a side project during the height of the COVID-19 pandemic as a consequence of boredom and desire to improve my skills. This project plans to develop an online learning management system for our university, particularly during this troubling time. It resembles social media in certain ways, which allows students to treat it as if it were Facebook or Twitter. It emphasizes a quiz creator module that enables instructors to create exercises. Students can keep track of their class performance and grades for each activity.</p>
            <p className="py-4 text-subheadings">
              <span className="text-2xl font-caveat">Project Highlights: </span>
              Data Analytics, AJAX, Automation, Realtime, Quiz Module, File Uploads, Email &amp; SMS Notifications
            </p>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Project4})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto major-content-div"></div>
        <div>
          <h1 className="text-4xl text-headings font-bebas uppercase sm:text-right">Library Management System</h1>
          <div className="text-right text-subheadings">
            <div className="flex flex-row justify-end items-end space-x-2 mt-1">
              <FaHtml5 size={25} />
              <FaCss3Alt size={25} />
              <IoLogoJavascript size={25} />
              <FaBootstrap size={25} />
              <SiJquery size={25} />
              <SiPhp size={25} />
              <SiMysql size={25} />
            </div>
          </div>
          <div className="py-4">
            <p className="text-justify indent-10 text-paragraphs">Same as abovementioned project, this was also created as a side project during the COVID-19 pandemic. This project aims to modernize the university library by providing an automated and computerized library management system. It boasts a student library ID maker and an organized library materials (such as books) inventory module, which would help the school librarians to manage the library effectively and efficiently.</p>
            <p className="py-4 text-subheadings">
              <span className="text-2xl font-caveat">Project Highlights: </span>
              Data Analytics, AJAX, Automation, Realtime, Library ID Maker, Inventory, Email &amp; SMS Notifications
            </p>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Project5})` }} className="shadow-lg group container rounded-md flex justify-center items-center mx-auto major-content-div"></div>
        <div>
          <h1 className="text-4xl text-headings font-bebas uppercase sm:text-right">Employee Records Management System</h1>
          <div className="text-right text-subheadings">
            <div className="flex flex-row justify-end items-end space-x-2 mt-1">
              <FaHtml5 size={25} />
              <FaCss3Alt size={25} />
              <IoLogoJavascript size={25} />
              <SiCsharp size={25} />
              <FaBootstrap size={25} />
              <SiJquery size={25} />
              <FaMicrosoft size={25} />
              <SiMicrosoftsqlserver size={25} />
            </div>
          </div>
          <div className="py-4">
            <p className="text-justify indent-10 text-paragraphs">This project is my first attempt at learning the ASP.NET in-depth and the Model-View-Controller (MVC) Architecture. It aims to provide an organized employee records management system. It also boasts an AJAX technology, which helps the operations more flexible and in realtime.</p>
            <p className="py-4 text-subheadings">
              <span className="text-2xl font-caveat">Project Highlights: </span>
              ASP.NET MVC, AJAX, Automation, Realtime
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsMajor