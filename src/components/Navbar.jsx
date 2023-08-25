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
        <div className="z-40">
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
            
             <div className="bg-stardust relative z-20 rounded-b-[25px] h-[50px] w-full md:hidden flex flex-row items-center mb-4">
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
                    <div className="pt-[40px] flex  h-[250px] w-full justify-center">
                        <ul className="flex flex-col space-y-[2vh] w-[90%] align-middle text-xl text-cosmos w-[100%]">
                            <li><Link href="/" className={mavenPro.className}><button onClick={() => setIsOpen(isOpen => !isOpen)} className="z-40 w-full drop-shadow-md bg-gradient-to-tl from-violet-500 p-2 rounded-xl">HOME</button></Link></li>
                            <li><Link href="/projects" className={mavenPro.className}><button onClick={() => setIsOpen(isOpen => !isOpen)} className="z-40 w-full drop-shadow-md bg-gradient-to-tl from-violet-500 p-2 rounded-xl">PROJECTS</button></Link></li>
                            <li><Link href="/about" className={mavenPro.className}><button onClick={() => setIsOpen(isOpen => !isOpen)} className="z-40 w-full drop-shadow-md bg-gradient-to-tl from-violet-500 p-2 rounded-xl">ABOUT</button></Link></li>
                        </ul>
                    </div>
                </div>
            </motion.nav>
            


        </div>
    )
}
export default Navbar;