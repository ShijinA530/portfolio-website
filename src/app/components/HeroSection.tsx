"use client"
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="lg:py-16">
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='col-span-8 place-self-center lg:ml-10 text-center sm:text-left justify-self-start'
            >
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8x lg:leading-normal font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Hello, I'm{" "}</span> 
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Shijin A',
                            1000,
                            'a Web Developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>Whether you want a website that packs a punch or in need of a sleek and polished site, I've got the skills and creativity to make your vision a reality.</p>
                <Link href='https://www.papermark.io/view/cm3qwhfpe000coucfrlzajyh0'>
                    {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">Hire Me</button> */}
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white border mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                    </button>
                </Link>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='col-span-4 place-self-center mt-16 sm:mt-0'
            >
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                    <Image
                        src="/images/me.jpg" 
                        alt="Profile picture"
                        width={300}  // Matches the container size
                        height={300} // Matches the container size
                        className="absolute rounded-full object-cover w-full h-full top-0 left-0"
                    />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection
