'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import GithubIcon from '../../../public/github.svg'
import LinkedinIcon from '../../../public/linkedin.png'


const EmailSection = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      console.log('Raw response:', response);
  
      if (!response.ok) {
        const errorText = await response.text(); // Get raw response if not JSON
        console.error(`Error: ${response.status} - ${errorText}`);
        throw new Error(errorText || 'Something went wrong');
      }
  
      const resData = await response.json();
      console.log('Parsed response:', resData);
      setSubmitted(true)
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      console.log(`Failed to send email: ${error.message}`);
    }
  }

  return (
    <section className='grid md:grid-cols-2 my-12 py-24 gap-4 relative'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <div className='z-10'>
          <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
          <p className='text-[#ADB7BE] mb-4 max-w-md'>
              I'm currently looking for new opportunities, my inbox is always open.
              Whether you have a question or just want to say hi, I'll try my best
              to get back to you.
          </p>
          <div className='socials flex flex-row gap-2'>
              <Link href='https://github.com/ShijinA530'>
                  <Image
                      src={GithubIcon}
                      alt='Github Icon'
                      width={40}
                      height={40} />
              </Link>
              <Link href='https://www.linkedin.com/in/shijin530/'>
                  <Image
                    src={LinkedinIcon}
                    alt='Linkedin Icon'
                    width={40}
                    height={40}
                  />
              </Link>
          </div>
      </div>
      <div>
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className='text-white block mb-2 text-sm font-medium'
            >
              Your email
            </label>
            <input
              type="email"
              name='email'
              id='email'
              required
              className='bg-[#18191E] border border-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='john@google.com'
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className='text-white block mb-2 text-sm font-medium'
            >
              Subject
            </label>
            <input
              type="text"
              id='subject'
              name='subject'
              required
              className='bg-[#18191E] border border-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Just saying hi'
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className='text-white block mb-2 text-sm font-medium'
            >
              Message
            </label>
            <textarea
              name='message'
              id='subject'
              className='bg-[#18191E] border border-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder="Let's talk about..."
              rows={3}
            />
          </div>
          <button
          type='submit'
            className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 rounded-lg w-full'
          >
            Send Message
          </button>
          {
            submitted && 
            <p className='text-green-500 text-sm'>
                Email sent successfully!
            </p>
          }
        </form>
      </div>
    </section>
  )
}

export default EmailSection
