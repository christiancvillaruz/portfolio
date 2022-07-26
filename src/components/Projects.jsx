import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ProjectsArts from './ProjectsArts'
import ProjectsMajor from './ProjectsMajor'
import ProjectsOther from './ProjectsOther'

const Projects = () => {
  return (
    <div name="projects" className="mt-28 py-20">
      <div className="max-w-[1000px] mx-auto w-full h-full p-4 flex flex-col justify-center">
        <div className="pb-8">
          <h1 className="text-5xl uppercase font-bebas inline text-headings border-b-4 border-paragraphs">Projects</h1>
          <h3 className="text-3xl text-subheadings font-caveat py-4">Check out my projects!</h3>
        </div>
        <Tabs>
          <TabList>
            <Tab>Major Projects</Tab>
            <Tab>Mini Projects</Tab>
            <Tab>Art Projects</Tab>
          </TabList>
          <TabPanel>
            { /* Major Projects */ }
            <h2 className="text-center text-4xl text-subheadings font-bebas py-10">Major Projects</h2>
            <ProjectsMajor/>
          </TabPanel>
          <TabPanel>
            <h2 className="text-center text-4xl text-subheadings font-bebas pt-10">Mini Projects</h2>
            <p className="text-center text-subheadings text-xl pb-10">These are some of the projects I made using frameworks &amp; other technologies.</p>
            { /* Other Projects */ }
            <ProjectsOther/>
          </TabPanel>
          <TabPanel>
            <h2 className="text-center text-4xl text-subheadings font-bebas py-10">Art Projects</h2>
            { /* Arts */ }
            <ProjectsArts/>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Projects