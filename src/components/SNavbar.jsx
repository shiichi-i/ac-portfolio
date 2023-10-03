'use client'
import Image from "next/image";
import Link from 'next/link';
import LogoName from '../../public/Logo_name.png';
import Twitter from '../../public/twitter.png';
import Main from '../../public/main.png';
import { mavenPro } from "@/app/layout";
import { motion } from "framer-motion"
import { useState } from "react";

const SNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const variants = {
        closed: {y:-452},
        open: {y:0}
      }

 return (
    <div className="z-40 fixed md:static">
        <div className="hidden md:flex w-[100%] h-[80px] flex-row items-center bg-black">
            <div className="w-[25%]">
                <button className="w-[85px] ml-5">
                    <Link href="/services">
                        <div className="flex flex-col">
                            <Image src={LogoName} alt="Andrea Christela Logo" style={{objectFit: 'contain'}}/>
                            <h6 className="text-stardust font-bold text-xs">S E R V I C E S</h6>
                        </div>
                    </Link>
                </button>
            </div>
            <div className="w-[50%]">
                <ul className="flex flex-row space-x-[10%] text-xl font-bold text-stardust justify-center">
                    <Link href="/services" className={mavenPro.className}>HOME</Link>
                    <Link href="/services/info" className={mavenPro.className}>INFO</Link>
                    <Link href="/services/offers" className={mavenPro.className}>OFFERS</Link>
                    <Link href="/services/contact" className={mavenPro.className}>CONTACT</Link>
                </ul>
            </div>
            <div className="w-[25%] flex justify-end">
                <div className="flex flex-row space-x-3">
                    <button className="w-[40%]">
                        <a href="https://twitter.com/ShiiChi_i" target="_blank">
                            <Image src={Twitter} alt="Twitter" style={{objectFit: 'contain'}}/>
                        </a>
                    </button>
                    <button className="w-[40%]">
                        <Link href="/" target="_blank">
                            <Image src={Main} alt="Main" style={{objectFit: 'contain'}}/>
                        </Link>
                    </button>
                </div>
            </div>
        </div>

        <div className="bg-black relative z-20 w-[100vw] md:hidden flex flex-row items-center py-2">
            <div className="w-[50%]">
                <button className="w-[70px] ml-5">
                    <Link href="/services">
                        <div className="flex flex-col">
                            <Image src={LogoName} alt="Andrea Christela Logo" style={{objectFit: 'contain'}}/>
                            <h6 className="text-stardust font-bold text-[8px]">S E R V I C E S</h6>
                        </div>
                    </Link>
                </button>
            </div>
            <div className="w-[45%] flex justify-end">
                <button onClick={() => setIsOpen(isOpen => !isOpen)} className="w-[30px] text-stardust">
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
                <div className="md:hidden flex absolute z-0 bg-stardust mt-[-40px] w-[100%]">
                    <div className="pt-[40px] flex h-[495px] w-full ">
                        <ul className="flex flex-col space-y-2 text-xl text-purple-950 w-[100%]">
                            <li className=" hover:text-white" onClick={() => setIsOpen(false)} >
                                <Link href="/services" className={mavenPro.className}>
                                    <button className="flex flex-row z-40 w-full p-2 rounded-xl text-left font-bold pl-10">
                                        <div className="flex flex-col">
                                            HOME
                                            <p className="font-light text-sm">Top Offers and Latest News</p>
                                        </div>
                                    </button>
                                </Link>
                            </li>

                            <div className="min-h-[3px] bg-gradient-to-r from-purple-600 to-purple-950 flex" />

                            <li className=" hover:text-white" onClick={() => setIsOpen(false)} >
                                <Link href="/services/info" className={mavenPro.className}>
                                    <button className="flex flex-row z-40 w-full p-2 rounded-xl text-left font-bold pl-10">
                                        <div className="flex flex-col">
                                            INFO
                                            <p className="font-light text-sm">About the Artist</p>
                                        </div>
                                    </button>
                                </Link>
                            </li>

                            <div className="min-h-[3px] bg-gradient-to-r from-purple-600 to-purple-950 flex" />

                            <li className=" hover:text-white" onClick={() => setIsOpen(false)} >
                                <Link href="/services/offers" className={mavenPro.className}>
                                    <button className="flex flex-row z-40 w-full p-2 rounded-xl text-left font-bold pl-10">
                                        <div className="flex flex-col">
                                            OFFERS
                                            <p className="font-light text-sm">Commissions and Pricing</p>
                                        </div>
                                    </button>
                                </Link>
                            </li>

                            <div className="min-h-[3px] bg-gradient-to-r from-purple-600 to-purple-950 flex" />

                            <li className=" hover:text-white" onClick={() => setIsOpen(false)} >
                                <Link href="/services/contact" className={mavenPro.className}>
                                    <button className="flex flex-row z-40 w-full p-2 rounded-xl text-left font-bold pl-10">
                                        <div className="flex flex-col">
                                            CONTACT
                                            <p className="font-light text-sm">Inquire and Negotiate</p>
                                        </div>
                                    </button>
                                </Link>
                            </li>

                            <div className="min-h-[60px] p-4 bg-purple-900 flex rounded-[25px] m-4">
                                <div className="ml-[20px] flex flex-col justify-center space-y-3 w-[100%]">
                                    <a href="https://twitter.com/ShiiChi_i" target="_blank"className="w-[100%] flex flex-column text-xs text-stardust">
                                        <button className="w-[30px]">
                                            <Image src={Twitter} alt="Twitter" style={{objectFit: 'contain'}}/>
                                        </button>
                                        <p className="m-2">X / TWITTER</p>
                                    </a>
                                    <div className="min-h-[1px] bg-gradient-to-r from-purple-500 to-stardust flex" />
                                    <Link href="/" target="_blank" className="w-[100%] flex flex-column text-xs text-stardust">
                                        <button  className="w-[30px] flex flex-column text-xs text-stardust">
                                            <Image src={Main} alt="Main" style={{objectFit: 'contain'}}/>
                                        </button>
                                        <p className="m-2">MAIN WEBSITE</p>
                                    </Link>
                                </div>
                            </div>

                            
                        </ul>
                    </div>
                </div>
            </motion.nav>
    </div>
    
 )
}
export default SNavbar;