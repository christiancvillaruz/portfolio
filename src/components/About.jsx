import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import GradPic1 from '../assets/gradpic-1.png'
import GradPic2 from '../assets/gradpic-2.png'
import QCULogo from '../assets/qcu-logo-lg.jpg'
import SVDPALogo from '../assets/svdpa-logo-lg.jpg'

const About = () => {
  return (
    <div name="about" className="mt-28 pt-20 pb-0">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <h1 className="text-5xl uppercase font-bebas inline text-headings border-b-4 border-paragraphs">About Me</h1>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl text-subheadings">
            <div className="sm:float-right">
              <div className="relative img-fade">
                <img className="rounded-md mx-auto w-[18rem] sm:absolute btm" src={ GradPic2 } alt="graduation-pic-2" />
                <img className="hidden sm:block rounded-md mx-auto w-[18rem] tp" src={ GradPic1 } alt="graduation-pic-1" />
              </div>
            </div>
          </div>
          <div className="text-paragraphs">
            <div className="text-4xl text-subheadings">
              <h3 className="font-caveat">Nice to meet you, where you been?</h3>
            </div>
            <h3 className="mt-4 text-justify indent-10 sm:text-left sm:indent-0">
              My name is Christian Robert C. Villaruz. My friends and colleagues call me by my nickname, 'Chan'. I'm 22 years-old, currently residing in Quezon City. I am the youngest in my family. A fresh graduate last June 2022 with hopes to land my first job towards becoming a successful web developer. I'm skilled in working under pressure and adapting to new situations and challenges to best enhance the organizational brand, as well as skilled in project coordination and meeting client's expectations.
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full py-20">
          <div className="max-w-[1000px] w-full p-4">
            <Tabs>
              <TabList>
                <Tab>Education</Tab>
                <Tab>Interests</Tab>
              </TabList>
              { /* Education */ }
              <TabPanel>
                { /* For Small Screens */ }
                <div className="py-4 sm:hidden">
                  <h2 className="text-center text-4xl text-subheadings font-bebas py-10">Education</h2>
                  <div className="text-subheadings pb-12">
                    <h1 className="font-caveat text-4xl pb-1">College</h1>
                    <h3>Bachelor of Science in Information Technology</h3>
                    <p>2018-2022</p>
                    <h1 className="text-3xl font-bebas mt-3">Quezon City University</h1>
                    <p>Quezon City, Metro Manila</p>
                    <p className="italic mt-3">Magna Cum Laude Awardee</p>
                    <p>GWA: 1.42</p>
                  </div>
                  <div className="text-subheadings pb-12">
                    <h1 className="font-caveat text-4xl pb-1">Senior High</h1>
                    <h3>Science, Technology, Engineering, and Mathematics (STEM) Strand</h3>
                    <p>2016-2018</p>
                    <h1 className="text-3xl font-bebas mt-3">St. Vincent de Paul Academy of Novaliches, Inc.</h1>
                    <p>Quezon City, Metro Manila</p>
                    <p className="italic mt-3">Class Salutatorian Awardee</p>
                    <p className="italic mt-3">Loyalty Awardee</p>
                  </div>
                  <div className="text-subheadings pb-12">
                    <h1 className="font-caveat text-4xl pb-1">High School</h1>
                    <p>2012-2016</p>
                    <h1 className="text-3xl font-bebas mt-3">St. Vincent de Paul Academy of Novaliches, Inc.</h1>
                    <p>Quezon City, Metro Manila</p>
                    <p className="italic mt-3">Consistent Honor Student</p>
                  </div>
                </div>
                { /* For Larger Screens */ }
                <div className="py-4 hidden sm:block">
                  <h2 className="text-center text-4xl text-subheadings font-bebas py-10">Education Timeline</h2>
                  <div className="flex justify-center items-center p-0">
                    <div className="max-w-7xl mx-auto w-full grid grid-cols-9">

                      {/* First */}
                      {/* Container */}
                      <div className="col-span-4 w-full h-full pr-4 text-sm sm:text-base sm:pr-0">
                        <div className="w-full h-full bg-gradient-to-r from-[#557C55] to-[#82aa74] rounded-md text-subheadings">

                          <div className="flex flex-row justify-around">
                            <div className="hidden sm:grid overflow-hidden">
                              <img src={QCULogo} alt="qcu logo" className="w-[19rem] rounded-full ml-[-70px] mt-12 object-cover scale-[1.58] rotate-45 grayscale opacity-80"/>
                            </div>

                            <div className="p-4">
                              <h1 className="text-subheadings text-right font-caveat text-4xl pb-1">College</h1>
                              <div className="text-subheadings text-right">
                                <h3>Bachelor of Science in Information Technology</h3>
                                <h1 className="text-3xl font-bebas mt-3">Quezon City University</h1>
                                <p>Quezon City, Metro Manila</p>
                                <p className="italic mt-3">Magna Cum Laude Awardee</p>
                                <p>GWA: 1.42</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      {/* Line */}
                      <div className="relative col-span-1 w-full h-full flex justify-center items-center text-sm sm:text-base">
                        <div className="h-full w-1 bg-headings py-20"></div>
                        <div className="absolute p-1 rounded-md bg-headings z-1 text-zinc-900 font-bold text-center">2018-2022</div>
                      </div>
                      <div className="col-span-4 w-full h-full"></div>

                      {/* Second */}
                      {/* Line */}
                      <div className="col-span-4 w-full h-full"></div>
                      <div className="relative col-span-1 w-full h-full flex justify-center items-center text-sm sm:text-base">
                        <div className="h-full w-1 bg-headings py-20"></div>
                        <div className="absolute p-1 rounded-md bg-headings z-1 text-zinc-900 font-bold text-center">2016-2018</div>
                      </div>
                      {/* Container */}
                      <div className="col-span-4 w-full h-full pl-4 text-sm sm:text-base sm:pl-0">
                        <div className="w-full h-full bg-gradient-to-r from-[#557C55] to-[#82aa74] rounded-md text-subheadings">

                          <div className="flex flex-row-reverse justify-around">
                            <div className="hidden sm:grid overflow-hidden">
                              <img src={SVDPALogo} alt="svdpa logo" className="w-[19rem] rounded-full mr-[-6rem] ml-[70px] mt-[3.6rem] object-cover scale-[1.7] -rotate-45 grayscale opacity-80"/>
                            </div>

                            <div className="p-4">
                              <h1 className="text-subheadings text-left font-caveat text-4xl pb-1">Senior High</h1>
                              <div className="text-subheadings text-left">
                                <h3>Science, Technology, Engineering, and Mathematics</h3>
                                <h1 className="text-2xl font-bebas mt-3">St. Vincent de Paul Academy of Novaliches, Inc.</h1>
                                <p>Quezon City, Metro Manila</p>
                                <p className="italic mt-3">Class Salutatorian Awardee</p>
                                <p className="italic">Loyalty Awardee</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* Third */}
                      {/* Container */}
                      <div className="col-span-4 w-full h-full pr-4 text-sm sm:text-base sm:pr-0">
                        <div className="w-full h-full bg-gradient-to-r from-[#557C55] to-[#82aa74] rounded-md text-subheadings">

                          <div className="flex flex-row justify-around">
                            <div className="hidden sm:grid overflow-hidden">
                              <img src={SVDPALogo} alt="qcu logo" className="w-[19rem] rounded-full ml-[-70px] mt-6 object-cover scale-[1.3] rotate-45 grayscale opacity-80"/>
                            </div>

                            <div className="p-4">
                              <h1 className="text-subheadings text-right font-caveat text-4xl pb-1">High School</h1>
                              <div className="text-subheadings text-right">
                                <h1 className="text-2xl font-bebas">St. Vincent de Paul Academy of Novaliches, Inc.</h1>
                                <p>Quezon City, Metro Manila</p>
                                <p className="italic mt-3">Consistent Honor Student</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      {/* Line */}
                      <div className="relative col-span-1 w-full h-full flex justify-center items-center text-sm sm:text-base">
                        <div className="h-full w-1 bg-headings py-20"></div>
                        <div className="absolute p-1 rounded-md bg-headings z-1 text-zinc-900 font-bold text-center">2012-2016</div>
                      </div>
                      <div className="col-span-4 w-full h-full"></div>
                      
                    </div>
                  </div>
                </div>
              </TabPanel>
              { /* Interests */ }
              <TabPanel>
                <div className="py-4">
                  <h2 className="text-center text-4xl text-subheadings font-bebas py-10">Interests</h2>

                  <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 sm:gap-8">
                    <div className="sm:text-left text-3xl text-subheadings">
                      <div className="text-center sm:text-right">
                        <p className="font-caveat">Graphic Designing</p>
                      </div>
                    </div>
                    <div className="sm:text-right text-xl text-subheadings">
                      <div className="text-center sm:text-left">
                        <p>Vector Art</p>
                        <p>Layouts</p>
                        <p>Concept and Logo Designs</p>
                      </div>
                    </div>
                    <div className="sm:text-left text-3xl text-subheadings">
                      <div className="text-center sm:text-right">
                        <p className="font-caveat">Writing</p>
                      </div>
                    </div>
                    <div className="sm:text-right text-xl text-subheadings">
                      <div className="text-center sm:text-left">
                        <p>Speech Writing</p>
                        <p>Essay Writing</p>
                        <p>Diary Entry</p>
                      </div>
                    </div>
                    <div className="sm:text-left text-3xl text-subheadings">
                      <div className="text-center sm:text-right">
                        <p className="font-caveat">Reading</p>
                      </div>
                    </div>
                    <div className="sm:text-right text-xl text-subheadings">
                      <div className="text-center sm:text-left">
                        <p>Books</p>
                        <p>News Articles</p>
                        <p>Journals</p>
                      </div>
                    </div>
                    <div className="sm:text-left text-3xl text-subheadings">
                      <div className="text-center sm:text-right">
                        <p className="font-caveat">Music</p>
                      </div>
                    </div>
                    <div className="sm:text-right text-xl text-subheadings">
                      <div className="text-center sm:text-left">
                        <p>Pop</p>
                        <p>Rock</p>
                        <p>R&amp;B</p>
                        <p>Hip-hop</p>
                        <p>Mash-ups</p>
                        <p>Remixes</p>
                      </div>
                    </div>
                    <div className="sm:text-left text-3xl text-subheadings">
                      <div className="text-center sm:text-right">
                        <p className="font-caveat">Sports</p>
                      </div>
                    </div>
                    <div className="sm:text-right text-xl text-subheadings">
                      <div className="text-center sm:text-left">
                        <p>Volleyball</p>
                        <p>Badminton</p>
                        <p>Table Tennis</p>
                      </div>
                    </div>
                    <div className="sm:text-left text-3xl text-subheadings">
                      <div className="text-center sm:text-right">
                        <p className="font-caveat">Games</p>
                      </div>
                    </div>
                    <div className="sm:text-right text-xl text-subheadings">
                      <div className="text-center sm:text-left">
                        <p>Online Gaming</p>
                        <p>MMORPG</p>
                        <p>Survival Horror</p>
                        <p>Simulation</p>
                      </div>
                    </div>
                  </div>

                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About