'use client'
import Image from 'next/image'
import { mavenPro } from './layout'
import Graphic from '../../public/Graphic.png';
import BlueCurve from '../../public/BlueCurve.png';
import { motion } from "framer-motion"
import StarBlue1 from '../../public/Star-blue1.png';
import StarPink1 from '../../public/Star-pink1.png';
import OrgDesktop from '../../public/org-desktop.png';
import Star from '../../public/Star 2.png';

export default function Home() {
  return (
    <main>
      <div className="-z-20 flex flex-col-reverse md:flex-row w-full h-[85vh] items-center">
        <motion.div
        initial={{ opacity: 0, y: 20, x: -5 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4}}
        className="h-[50%] md:h-[100%] w-[100%] md:w-[60%] flex items-center justify-center -z-10">
          <Image src={Graphic} alt="Homepage Graphic" style={{objectFit: 'contain'}} />
        </motion.div>
          <motion.div 
          animate={{ y: [-10,0,-10] }}
          transition={{ repeat: Infinity}}
          className="-z-30 h-[70%] w-[100px] md:w-[10vw] right-9 bottom-2 md:bottom-24 absolute">
            <Image src={StarBlue1} alt="Star blue" style={{objectFit: 'contain'}} />
          </motion.div>

          <motion.div 
          animate={{ y: [0,15,0] }}
          transition={{ repeat: Infinity}}
          className="h-[30%] w-[100px] md:w-[10vw] left-9 bottom-40 md:bottom-3 absolute">
            <Image src={StarPink1} alt="Star pink" style={{objectFit: 'contain'}} />
          </motion.div>

        

        <motion.div
        initial={{ opacity: 0, x: -70}}
        animate={{ opacity: 1, x: 0}}
        transition={{ duration: 0.5}}
        className="h-[50%] space-y-4 md:h-[100%] w-[80%] md:w-[40%] flex flex-col mt-12 md:mt-0 md:justify-center md:ml-5">
          <div className="font-bold text-transparent text-3xl xl:text-5xl bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text">
            <h1 className={mavenPro.className}>Andrea Christela Adalem</h1>
          </div>
          <div className="w-[80%] md:w-[50%]">
            <h2 className="text-xl text-cyan-300 align-left font-bold">Software Developer</h2>
          </div>
          <div className="w-[90%] md:w-[70%]">
            <p>Hi there! Im Andrea, I enjoy working on projects. Building with code and Designing with heart.</p>
          </div>
        </motion.div>
      </div>

        <div className="w-[100%] mt-[-10vh] md:mt-[-35vh] z-10">
          <Image src={BlueCurve} alt="section top design" style={{objectFit: 'contain'}} />
        </div>
        <div className="w-[100%] bg-gradient-to-b from-[#2CB6C9] to-[#0EE9DC] from-65% via-10% z-10">
          <motion.div 
           initial={{ opacity: 0, scale: 0.5 }}
           whileInView={{ opacity: 1, scale: 1  }}
           transition={{ duration: 0.3 }}
           viewport={{ once: true, amount: 0.5 }}
          className="w-[100%] flex justify-center">
            <div className="pt-[5vh] pb-[3vw] font-bold text-transparent text-4xl xl:text-5xl bg-gradient-to-br from-cosmos to-purple-700 bg-clip-text">
              <h2 className={mavenPro.className}>MY LATEST PROJECT</h2>
            </div>
          </motion.div>

          <div className="flex w-[100%] justify-center pb-[100px]">
            <div className="flex flex-col md:flex-row-reverse w-[95%] space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            
              <div className="w-[100%] md:w-[70%] flex items-center">
                  <motion.div
                   initial={{x: -100, y: 20 }}
                   whileInView={{x: 0, y: 0 }}
                   transition={{ duration: 0.3}}
                   viewport={{ once: true, amount: 0.4}}
                   className=" md:ml-[-15vw] relative">
                    <motion.div 
                    animate={{ scale: [2.5,1,2.5] }}
                    transition={{ duration: 4,repeat: Infinity}}
                    className="absolute md:bottom-[10vh] md:left-[15vw] bottom-[5vh] left-[10vw] md:h-[10vw] md:w-[10vw] h-[20vw] w-[20vw] bg-[#5AE399] rounded-full" />

                    <motion.div
                    animate={{ rotate: [0, 359] }}
                    transition={{ duration: 8, repeat: Infinity }}
                     className="flex items-center absolute bottom-[10vh] md:bottom-[20vh] left-[10vw] md:h-[10vw] md:w-[10vw] h-[20vw] w-[20vw]">
                      <Image fill src={Star} alt="project desktop view" style={{objctFit: 'contain'}}/>
                    </motion.div>
                    
                    <div className="relative drop-shadow-[0_5px_5px_rgba(0,0,0,0.40)] ">
                      <Image src={OrgDesktop} alt="project desktop view" style={{objctFit: 'contain'}}/>
                    </div>
                  </motion.div>
              </div>

              <motion.div 
              initial={{ opacity: 0, x: 60, y: 20 }}
              whileInView={{ opacity: 1, x: 0  }}
              transition={{ duration: 0.5}}
              viewport={{ once: true, amount: 0.7}}
              className="w-[100%] md:w-[50%] ml-[5vw] flex lg:items-center">
                  <div className="space-y-4">
                    <h3 className="text-purple-800 text-3xl font-bold">College-based Organization Website</h3>
                    
                    <div className="text-cosmos text-xl md:w-[80%]">
                      <p className={mavenPro.className}>
                        The official Programmers' Den website for the Academic Year of 2023.
                        Developed using ReactJS, Chakra UI and Google Firebase.
                      </p>
                    </div>

                    <div className="space-x-3 flex">
                      <motion.div
                         whileHover={{ scale: 1.2 }}
                         className="items-center justify-center">
                        <a>
                            <button className="border-2 border-violet-700 p-3.5 text-violet-700 hover:text-white font-bold rounded-2xl">
                              VISIT WEBSITE
                            </button>
                        </a>
                      </motion.div>
                      <motion.div
                         whileHover={{ scale: 1.2 }}
                         className="items-center justify-center">
                        <a>
                          <button className="bg-violet-700 p-4 font-bold rounded-2xl">
                            LEARN MORE &gt;
                          </button>
                        </a>
                      </motion.div>
                    </div>
                  </div>
              </motion.div>
              
            </div>
          </div>
        </div>

        <div className="h-[500px]">
          <p>Hello</p>
        </div>
      

    </main>
  )
}