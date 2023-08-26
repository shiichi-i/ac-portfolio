"use client"
import { mavenPro } from "@/app/layout";
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import { motion } from "framer-motion"

import LogoName from '../../public/Logo_name.png';
import LogoNameDark from '../../public/Logo_name-dark.png';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const variants = {
        closed: { opacity: 0, y:-100, scale: 0 },
        open: { opacity: 1, y:0, scale: 1 },
      }

    return(
        <div className="z-40 fixed md:static">
                <div className="hidden md:flex w-[100%] h-[80px] flex-row items-center">
                    <div className="w-[50%]">
                        <button className="ml-[10%] w-[120px]">
                            <Link href="/"><Image src={LogoName} alt="Andrea Christela Logo" style={{objectFit: 'contain'}}/></Link>
                        </button>
                    </div>
                    <div className="text-stardust font-bold w-[35vw] flex justify-end">
                        <ul className="flex flex-row space-x-[20%] text-xl">
                            <motion.li 
                                whileHover={{
                                    scale: 1.3, rotate: -4,
                                    transition: { duration: 0.2 },
                                }}>
                                <Link href="/" className={mavenPro.className}>Home</Link>
                            </motion.li>

                            <motion.li 
                                whileHover={{
                                    scale: 1.3, rotate: -4,
                                    transition: { duration: 0.2 },
                                }}>
                                <Link href="/projects" className={mavenPro.className}>Projects</Link>
                            </motion.li>

                            <motion.li 
                                whileHover={{
                                    scale: 1.3, rotate: -4,
                                    transition: { duration: 0.2 },
                                }}>
                                <Link href="/about" className={mavenPro.className}>About</Link>
                            </motion.li>
                        </ul>
                    </div>
            </div>
            
             <div className="bg-stardust relative z-20 rounded-b-[25px] h-[50px] w-[100vw] md:hidden flex flex-row items-center mb-4">
                <div className="w-[50%]">
                    <button className="w-[85px]" onClick={() => setIsOpen(false)}>
                        <Link href="/"><Image src={LogoNameDark} alt="Andrea Christela Logo" style={{objectFit: 'contain'}}/></Link>
                    </button>
                </div>
                <div className="w-[45%] flex justify-end">
                    <button onClick={() => setIsOpen(isOpen => !isOpen)} className="w-[30px] text-cosmos">
                        {isOpen? 
                            
                            <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        :
                            <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                         }
                    </button>
                </div>
            </div>

            <motion.nav
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            >
                <div className="md:hidden flex absolute z-0 bg-stardust mt-[-40px] w-[100%] rounded-b-[25px]">
                    <div className="pt-[40px] flex h-[250px] w-full ">
                        <ul className="flex flex-col space-y-2 text-xl text-violet-900 w-[100%]">
                            <li className=" hover:text-white" onClick={() => setIsOpen(false)} ><Link href="/" className={mavenPro.className}><button
                            className="flex flex-row z-40 w-full p-3 rounded-xl text-left font-bold pl-10">
                            <svg className="w-[25px] mr-[10px]" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                                HOME
                                </button></Link>
                            </li>

                            <div className="min-h-[3px] bg-gradient-to-r from-purple-600 to-violet-300 flex" />

                            <li className=" hover:text-white" onClick={() => setIsOpen(false)}><Link href="/projects" className={mavenPro.className}><button
                            className="flex flex-row z-40 p-3 rounded-xl text-left font-bold pl-10">
                            <svg className="w-[25px] mr-[10px]" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                                PROJECTS</button></Link>
                            </li>

                            <div className="min-h-[3px] bg-gradient-to-r from-purple-600 to-violet-300 flex" />

                            <li className=" hover:text-white" onClick={() => setIsOpen(false)}><Link href="/about" className={mavenPro.className}><button
                            className="flex flex-row z-40 p-3 rounded-xl text-left font-bold pl-10">
                            <svg  className="w-[25px] mr-[10px]" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                                ABOUT</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.nav>
            


        </div>
    )
}
export default Navbar;