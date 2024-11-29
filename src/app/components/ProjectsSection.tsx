'use client'
import React, { useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { animate, motion, useInView } from 'framer-motion'


const projectsData = [
  {
    id: 1,
    title: 'School Man App',
    description: 'A web app for school administration to manage student detials. Includes Authentication, Authorization and CRUD operations',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/ShijinA530/School-Management-App',
    previewUrl: 'https://school-man-app.vercel.app/'
  },
  {
    id: 2,
    title: 'Workout Buddy',
    description: 'A web app used to keep track of workouts',
    image: '/images/projects/2.png',
    tag: ['All', 'Web', 'Mobile'],
    gitUrl: 'https://github.com/ShijinA530/PRODIGY_FS_01',
    previewUrl: 'https://workout-buddy1.vercel.app/',
  },
  {
    id: 3,
    title: 'BuddyPair',
    description: 'A responsive dating app',
    image: '/images/projects/3.png',
    tag: ['All', 'Web', 'Mobile'],
    gitUrl: 'https://github.com/ShijinA530/DatingApp',
    previewUrl: '',
  },
  {
    id: 4,
    title: 'Talk-A-Tive',
    description: 'A chat app that allows group and 1-on-1 chatting',
    image: '/images/projects/4.png',
    tag: ['All', 'Web', 'Mobile'],
    gitUrl: 'https://github.com/ShijinA530/MERN-Chat-App',
    previewUrl: 'https://talk-a-tive1.vercel.app/',
  },
  {
    id: 5,
    title: 'De-vote',
    description: 'An online voting system using Blockchain, exclusively designed for the use in a campus environment',
    image: '/images/projects/5.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/ShijinA530/De-vote1',
    previewUrl: 'https://de-vote1.vercel.app',
  },
  {
    id: 6,
    title: 'Weather-App',
    description: 'Shows weather of the searched location',
    image: '/images/projects/6.png',
    tag: ['All', 'Web', 'Mobile'],
    gitUrl: 'https://github.com/ShijinA530/weather-app',
    previewUrl: 'https://weatheru.vercel.app/',
  },
  {
    id: 7,
    title: 'Get-Movies',
    description: 'A movie showcasing platform',
    image: '/images/projects/7.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/ShijinA530/Movies',
    previewUrl: 'https://movies-f.vercel.app',
  },
  // {
  //   id: 8,
  //   title: 'Travel',
  //   description: 'Shows a ticket available based on origin and destination',
  //   image: '/images/projects/8.png',
  //   tag: ['All', 'Web', 'Mobile'],
  //   gitUrl: 'https://github.com/ShijinA530/Travel',
  //   previewUrl: 'https',
  // },
  {
    id: 8,
    title: 'Netflix Clone',
    description: 'Netflix clone using React',
    image: '/images/projects/8.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://netflix-clone-666.vercel.app/',
    previewUrl: '',
  },
  {
    id: 9,
    title: 'To-Do App',
    description: 'Todo app using React',
    image: '/images/projects/9.png',
    tag: ['All', 'Web', 'Mobile'],
    gitUrl: 'https://github.com/ShijinA530/ToDo',
    previewUrl: 'https://to-do-list123.vercel.app/',
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag: string) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          name='All'
          onClick={handleTagChange}
          isSelected={tag === 'All'}
        />
        <ProjectTag
          name='Web'
          onClick={handleTagChange}
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          name='Mobile'
          onClick={handleTagChange}
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12 mt-8'>
        {filteredProjects.map((project, index) => 
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image} 
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />
          </motion.li>
        )}
      </ul>
    </section>
  )
}

export default ProjectsSection
