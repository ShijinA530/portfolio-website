"use client"
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'

const TabData = [
  {
    id: 'skills',
    title: 'Skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Python</li>
        <li>SQL</li>
        <li>Github</li>
      </ul>
    )
  },
  {
    id: 'education',
    title: 'Education',
    content: (
      <ul className='list-disc pl-2'>
        <li>Rajiv Gandhi Institute of Technology, Kottayam</li>
        <li>APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY</li>
        <li>B.Tech, Computer Science and Engineering</li>
        <li>CGPA: 7.41</li>
      </ul>
    )
  },
  {
    id: 'certifications',
    title: 'Certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>ES6: Modern JavaScript by Coursera</li>
        <li>SQL course certification by Udmey</li>
        <li>Build blog using MERN stack by Udemy</li>
        <li>React skill quiz by Hackveda</li>
        <li>JavaScript skill quiz by Hackveda</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section id='about' className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 py-16 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src='https://dersyb7nfifdf.cloudfront.net/blog/2021/09/How_to_hire_a_software_developer_3.png'
          width={500}
          height={500}
          alt="About picture" />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with Python, JavaScript, React, Redux, Node.js, Express, MongoDB,
            HTML, CSS and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and 
            I am excited to work with others to create amazing applications.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
             </TabButton> 
             <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton> 
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              Certifications
             </TabButton> 
          </div>
          <div className='mt-8'>
          {TabData.find(t => t.id === tab)?.content || (
    <p className='text-red-500'>No content available for the selected tab.</p>
  )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
