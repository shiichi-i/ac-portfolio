'use client'
import Image from 'next/image';
import Progden from '../../../public/progden-preview.jpg';
import Pebbles from '../../../public/pebbles-preview.jpg';
import Ace from '../../../public/ace-preview.jpg';
import { motion } from "framer-motion";
import { mavenPro } from '../layout';

export default function Projects() {
    return (
      <main>
        <motion.div
        animate={{ opacity: [0,1], scaleY: [0,1] }}
        transition={{ duration: 2, type: "spring", stiffness: 100 }}
        className="bg-gradient-to-b from-violet-400 to-cosmos absolute w-full top-0 h-[100vw] mt-[-50%] opacity-50 -z-40 rounded-full" />
        <div className="space-y-4">
          <div className="w-[100] flex justify-center py-3">
            <h1 className="font-bold text-3xl mt-4">MY WORKS</h1>
          </div>

          <div className="w-[100%] flex flex-col md:flex-row flex-wrap justify-center items-center">

            {/** PD Site */}
            <motion.div 
            whileHover={{ y: -4 }}
            className="m-4 flex flex-col bg-slate-900 w-[80%] h-[80vh] md:w-[500px] md:h-[600px] rounded-2xl">
                <div className="relative h-[40%] md:h-[50%] lg:h-[60%] w-[100%] opacity-60 transition rounded-t-2xl"
                style={{
                  backgroundImage: `url(${Progden.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                </div>
                <div className="m-4 space-y-4">
                  <div className={mavenPro.className}>
                    <h4 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text">Programmers&apos; Den Website</h4>
                  </div>
                  <div className="flex space-x-2 text-stardust flex-wrap">
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      JavaScript
                    </div>
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      React
                    </div>
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      Figma
                    </div>
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      Chakra UI
                    </div>
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      Firebase
                    </div>
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      NoSQL
                    </div>
                  </div>
                  <h6>Spearheaded the development alongside other organization members. The first ever dynamic cloud 
                    hosted web app of the organization complete with admin editting permissions and a membership
                    registration form.
                  </h6>
                  <div className="flex space-x-2 justify-end pt-8">
                  
                  <motion.div
                         whileHover={{ scale: 1.2 }}
                         className="items-center justify-center ">
                        <a href="https://github.com/shiichi-i/project-nightshade" target="_blank" rel="noopener noreferrer">
                            <button className="border-emerald-500 border-2 p-2.5 text-emerald-500 hover:text-white font-bold rounded-2xl">
                              VIEW CODE
                            </button>
                        </a>
                  </motion.div>
                  <motion.div
                         whileHover={{ scale: 1.2 }}
                         className="items-center justify-center">
                        <a href="https://progden.web.app/" target="_blank" rel="noopener noreferrer">
                            <button className="bg-gradient-to-tr from-emerald-500 to-cyan-400 p-2.5 text-white font-bold rounded-2xl">
                              VISIT WEBSITE
                            </button>
                        </a>
                  </motion.div>
                  
                  </div>
                </div>
            </motion.div>

            {/** Capstone */}
            <motion.div 
            whileHover={{ y: -4 }}
            className="m-4 flex flex-col bg-slate-900 w-[80%] h-[80vh] md:w-[500px] md:h-[600px] rounded-2xl">
                <div className="relative h-[40%] md:h-[50%] lg:h-[60%] w-[100%] opacity-60 transition rounded-t-2xl"
                style={{
                  backgroundImage: `url(${Pebbles.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                </div>
                <div className="m-4 space-y-4">
                  <div className={mavenPro.className}>
                    <h4 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text">College Thesis Website and Software</h4>
                  </div>
                  <div className="flex space-x-2 text-stardust flex-wrap">
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      JavaScript
                    </div>
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      React
                    </div>
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      Figma
                    </div>
                    <div className="text-sm p-2 px-4 m-1 border border-cyan-300 text-cyan-300 rounded-full">
                      Unity C#
                    </div>
                    <div className="text-sm p-2 px-4 m-1 border border-cyan-300 text-cyan-300 rounded-full">
                      Blender 3D
                    </div>
                  </div>
                  <h6>
                    Developed a 3D virtual robotics education platform using Unity as the thesis/capstone
                    project for my bachelors degree.Then developed a website using React JS to showcase 
                    and offer download for users.
                  </h6>
                  <div className="flex space-x-2 justify-end pt-8">
                  
                  <motion.div
                         whileHover={{ scale: 1.2 }}
                         className="items-center justify-center ">
                        <a href="https://github.com/shiichi-i/CP2" target="_blank" rel="noopener noreferrer">
                            <button className="border-emerald-500 border-2 p-2.5 text-emerald-500 hover:text-white font-bold rounded-2xl">
                              VIEW CODE
                            </button>
                        </a>
                  </motion.div>
                  <motion.div
                         whileHover={{ scale: 1.2 }}
                         className="items-center justify-center">
                        <a href="https://pebbles-robotics.web.app/" target="_blank" rel="noopener noreferrer">
                            <button className="bg-gradient-to-tr from-emerald-500 to-cyan-400 p-2.5 text-white font-bold rounded-2xl">
                              VISIT WEBSITE
                            </button>
                        </a>
                  </motion.div>
                  
                  </div>
                </div>
            </motion.div>

            {/** ACE intrams */}
            <motion.div 
            whileHover={{ y: -4 }}
            className="m-4 flex flex-col bg-slate-900 w-[80%] h-[80vh] md:w-[500px] md:h-[600px] rounded-2xl">
              <div className="relative h-[40%] md:h-[50%] lg:h-[60%] w-[100%] opacity-60 transition rounded-t-2xl"
                style={{
                  backgroundImage: `url(${Ace.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                </div>
                <div className="m-4 space-y-4">
                  <div className={mavenPro.className}>
                    <h4 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text">University Intramurals Website</h4>
                  </div>
                  <div className="flex space-x-2 text-stardust flex-wrap">
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      JavaScript
                    </div>
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      React
                    </div>
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      Figma
                    </div>
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      Material UI
                    </div>
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      Firebase
                    </div>
                    <div className="text-sm p-2 px-4 m-1 border border-stardust rounded-full">
                      NoSQL
                    </div>
                  </div>
                  <h6>
                    Developed under the mentorship of seniors who I first learned how to code from.
                    I helped in making the university intramurals website to accommodate the new normal
                    during the online classes of the pandemic.
                  </h6>
                  <div className="flex space-x-2 justify-end pt-8">

                  <motion.div
                         whileHover={{ scale: 1.2 }}
                         className="items-center justify-center">
                        <a href="https://tsu-eintramurals.web.app/" target="_blank" rel="noopener noreferrer">
                            <button className="bg-gradient-to-tr from-emerald-500 to-cyan-400 p-2.5 text-white font-bold rounded-2xl">
                              VISIT WEBSITE
                            </button>
                        </a>
                  </motion.div>
                  
                  </div>
                </div>
            </motion.div>


          </div>
        </div>
      </main>
    )
  }