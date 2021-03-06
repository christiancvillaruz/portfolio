import React from 'react'
import { GrMail } from 'react-icons/gr'
import { MdAlternateEmail } from 'react-icons/md'
import { RiMailSendFill } from 'react-icons/ri'
import { FaPhoneAlt, FaUser } from 'react-icons/fa'

const Contact = () => {
  return (
    <div name="contact" className="mt-28 py-20">
      { /* Container */ }
      <div className="max-w-[1000px] mx-auto w-full h-full p-4 flex flex-col justify-center">
        <div>
          <h1 className="text-5xl uppercase font-bebas inline text-headings border-b-4 border-paragraphs">Contact</h1>
          <h3 className="text-3xl text-subheadings font-caveat py-4">Interested? Let's get connected!</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-subheadings">
            <div className="flex flex-row justify-start items-start space-x-2 p-2">
              <GrMail className="text-2xl" />
              <a href="mailto:christiancvillaruz@gmail.com">christiancvillaruz@gmail.com</a>
            </div>
            <div className="flex flex-row justify-start items-start space-x-2 p-2">
              <FaPhoneAlt className="text-2xl" />
              <a href="tel:639616030087">+63 961 603 0087</a>
            </div>
          </div>
          <div>
            <form action="">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label for="name" className="block mb-2 font-medium text-subheadings">Your Name</label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <FaUser className="text-home" />
                    </div>
                    <input type="email" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Juan R. Dela Cruz" />
                  </div>
                </div>
                <div>
                  <label for="email-address" className="block mb-2 font-medium text-subheadings">Your Email</label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <MdAlternateEmail className="text-home" />
                    </div>
                    <input type="email" id="email-address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="juandelacruz@domain.com" />
                  </div>
                </div>
                <div>
                  <label for="subject" className="block mb-2 font-medium text-subheadings">Subject</label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <GrMail className="text-home" />
                    </div>
                    <input type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Hello, Christian!" />
                  </div>
                </div>
                <div className="col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-subheadings">Your message</label>
                  <textarea style={{ resize: "none" }} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Message me something..."></textarea>
                </div>
                <div className="col-span-2">
                  <div className="flex justify-end items-end">
                    <button type="submit" className="text-subheadings border-2 px-6 py-3 rounded-md flex items-center hover:font-bold hover:bg-headings hover:border-headings hover:text-zinc-900"> Send Message
                      <RiMailSendFill className="ml-3" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact