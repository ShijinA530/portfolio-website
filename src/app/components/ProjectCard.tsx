import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl }: { title: string, description: string, imgUrl: string, gitUrl: string, previewUrl: string }) => {
  return (
    <div>
      <div
        className='h-52 md:h-72 rounded-t-xl relative group'
      >
        <Image
          src={imgUrl}
          alt={`${title} preview`}
          layout="fill" // Makes the image cover the container
          objectFit="cover" // Ensures the image scales properly
          quality={90} // Ensures better quality
        />
        <div className='overlay items-center justify-center absolute top-0 left-0 space-x-2 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-500'>
          <Link href={gitUrl} className='h-14 w-14 border-2 flex items-center justify-center rounded-full border-[#ADB7BE] hover:border-white group/link'>
            <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white' />
          </Link>
          {previewUrl && <Link href={previewUrl} className='h-14 w-14 border-2 flex items-center justify-center rounded-full border-[#ADB7BE] hover:border-white group/link'>
            <EyeIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white' />
          </Link>}
        </div>
      </div>
         
      <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4'>
          <h5 className='text-xl font-semibold mb-2'>{title}</h5>
          <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
