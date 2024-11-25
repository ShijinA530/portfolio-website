'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import GithubIcon from '../../../public/github.svg'
import LinkedinIcon from '../../../public/linkedin.png'
import emailjs from '@emailjs/browser'

const EmailSection = () => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [send, setSend] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)
    setSend(false)
    setError('')

    if (!email) {
      setError('Please enter your email')
      return
    }
    if (!message) {
      setError('Please enter your message')
      return
    }
    const templateParams = {
      from_name: email,
      subject: subject,
      message: message,
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setSend(true)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 py-24 gap-4 relative'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-60 w-64 md:h-80 md:w-80 z-0 blur-lg absolute  -bottom-1/4 md:top-3/4 transform -translate-x-1/2 -translate-1/2'></div>
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
              Your Email
            </label>
            <input
              type="email"
              name='email'
              id='email'
              className='bg-[#18191E] border border-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='john@google.com'
              onChange={(e) => setEmail(e.target.value)}
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
              className='bg-[#18191E] border border-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Just saying hi'
              onChange={(e) => setSubject(e.target.value)}
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
              id='message'
              className='bg-[#18191E] border border-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder="Let's talk about..."
              rows={3}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 rounded-lg w-full'
          >
            Send Message
          </button>
          {
            submitted && error &&
            <p className='text-red-500 text-sm'>
                {error}
            </p>
          }
          {
            send && 
            <p className='text-green-500 text-sm'>
                Message sent successfully!
            </p>
          }
        </form>
      </div>
    </section>
  )
}

export default EmailSection
