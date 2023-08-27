'use client'
import Image from 'next/image';
import { mavenPro } from '../layout';
import { motion } from "framer-motion";
import Me from '../../../public/me-purple.jpg';
import { GiGraduateCap } from 'react-icons/gi';
import { RiShieldUserFill } from 'react-icons/ri';
import { LiaMedalSolid } from 'react-icons/lia';
import { FaLaptopCode } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiUnity } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';
import { SiBlender } from 'react-icons/si';


export default function About() {
    return (
      <main>
        <motion.div
        animate={{ opacity: [0,1], scaleY: [0,1] }}
        transition={{ duration: 2, type: "spring", stiffness: 100 }}
        className="bg-gradient-to-b from-fuchsia-700 absolute w-full top-0 h-[100vw] mt-[-50%] opacity-50 -z-40 rounded-full" />
        
        <div className="w-[100] flex justify-center py-3">
            <motion.div animate={{ opacity: [0,1], y: [15,0]}} transition={{ duration: 1}}>
              <h1 className="font-bold text-3xl mt-4 text-transparent bg-gradient-to-r from-[#dda2da] via-[#a6cdce] to-[#82bde4] bg-clip-text">ABOUT ME</h1>
            </motion.div>
          </div>

        <div className="w-[100vw] flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row">
            <div className="w-[250px] m-4 flex">
              <Image src={Me} alt="Profile Photo" style={{objectFit: 'contain'}} className="shadow-lg rounded-tr-full rounded-tl-full rounded-bl-full" />
            </div>
            <div className="space-y-3">
              <p className="md:pt-[190px]">Hello! I&apos;m Andrea Adalem</p>
              <div className="w-[50%] h-[2px] bg-pink-400"/>
              <div className={mavenPro.className}>
                <h5 className="text-2xl font-bold text-cyan-200">Developer and Web Designer</h5>
              </div>
            </div>
          </div>

          <div className="mt-5 p-4 w-[75%] md:w-[600px] bg-blue-500/20 rounded-xl">
            <p className="m-5">
              I am a creative innovator fascinated by the limitless creations that are possible through information technology.
            </p>
            <ul className="ml-9 mt-8 space-y-4">
              <li className="flex flex-row space-x-4">
                <LiaMedalSolid size="25px" color="#f472b6" />
                <p>Cum Laude</p>
              </li>
              <li className="flex flex-row space-x-4">
                <GiGraduateCap size="25px" color="#f472b6" />
                <p>Bachelor&apos;s Degree, Technology</p>
              </li>
              <li className="flex flex-row space-x-4">
                <RiShieldUserFill size="25px" color="#f472b6" />
                <p>Student Council Officer</p>
              </li>
              <li className="flex flex-row space-x-4 pb-8">
                <FaLaptopCode size="25px" color="#f472b6" />
                <p><a href="https://progden.web.app" target="_blank" className="underline">Programmers&apos; Den</a> Officer</p>
              </li>
            </ul>
          </div>

          <div className="relative -z-30 mt-12 w-[100%] flex justify-center py-8" style={{background: 'radial-gradient(#818cf8, #67e8f9)'}}>
            <div className="-z-20 absolute right-0 top-[-12%] md:top-[-25%] bg-cyan-400/80 w-[20%] h-[25%] md:h-[50%]  rounded-l-full"/>
            <div className="-z-20 absolute left-0 bottom-[-12%] md:bottom-[-25%] bg-cyan-400/80 w-[20%] h-[25%] md:h-[50%] rounded-r-full"/>
            <div className="mt-8 font-bold text-2xl flex flex-col text-violet-900 items-center">
              <div className="text-cosmos bg-clip-text">
                <h5 className={mavenPro.className}>TECHNOLOGIES I USE:</h5>
              </div>
              <div className="w-[60vw] m-4">

                <div className="flex flex-col items-center">
                  <h6 className="font-bold text-lg text-violet-900 "></h6>
                  <div className="w-[100%] flex flex-row flex-wrap items-center justify-center">
                    

                    <div className="flex flex-col items-center w-[100px] m-4">
                      <SiNextdotjs size="100px" color="#4c1d95" />
                      <p className="font-regular text-sm mt-2">Next JS</p>
                    </div>
                    <div className="flex flex-col items-center w-[100px] m-4">
                      <SiReact size="100px" color="#4c1d95" />
                      <p className="font-regular text-sm mt-2">React JS</p>
                    </div>

                  </div>

                  <h6 className="font-bold text-lg text-violet-900"></h6>
                  <div className="w-[100%] flex flex-row flex-wrap items-center justify-center">
                    

                    <div className="flex flex-col items-center w-[100px] m-4">
                      <SiFigma size="100px" color="#4c1d95" />
                      <p className="font-regular text-sm mt-2">Figma</p>
                    </div>
                    <div className="flex flex-col items-center w-[100px] m-4">
                      <SiBlender size="100px" color="#4c1d95" />
                      <p className="font-regular text-sm mt-2">Blender 3D</p>
                    </div>
                    <div className="flex flex-col items-center w-[100px] m-4">
                      <SiUnity size="100px" color="#4c1d95" />
                      <p className="font-regular text-sm mt-2">C#</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="min-h-[500px] w-[100%]"></div>
            
        </div>
      </main>
    )
  }