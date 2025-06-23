"use client";
import Image from "next/image";
import { mavenPro } from "../layout";
import { motion } from "framer-motion";
import Me from "../../../public/me-purple.jpg";
import { GiGraduateCap } from "react-icons/gi";
import { RiShieldUserFill } from "react-icons/ri";
import { LiaMedalSolid } from "react-icons/lia";
import { FaLaptopCode, FaChevronRight } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiUnity } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import Nagi from "../../../public/naho.png";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";

export default function About() {
  return (
    <main className="overflow-hidden">
      <motion.div
        animate={{ opacity: [0, 1], scaleY: [0, 1] }}
        transition={{ duration: 2, type: "spring", stiffness: 100 }}
        className="bg-gradient-to-b from-fuchsia-700 absolute w-full top-0 h-[100vw] mt-[-50%] opacity-50 -z-40 rounded-full"
      />

      <div className="w-[100] flex justify-center py-3">
        <motion.div animate={{ opacity: [0, 1], y: [15, 0] }} transition={{ duration: 1 }}>
          <h1 className="font-bold text-3xl mt-4 text-transparent bg-gradient-to-r from-[#dda2da] via-[#a6cdce] to-[#82bde4] bg-clip-text">
            ABOUT ME
          </h1>
        </motion.div>
      </div>

      <div className="w-[100vw] flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row">
          <div className="w-[250px] m-4 flex">
            <Image
              src={Me}
              alt="Profile Photo"
              style={{ objectFit: "contain" }}
              className="shadow-lg rounded-tr-full rounded-tl-full rounded-bl-full"
            />
          </div>
          <div className="space-y-3">
            <div className={mavenPro.className}>
              <h5 className=" md:pt-[100px] text-2xl font-bold text-cyan-200">Developer</h5>
            </div>
            <div className="w-[75%] h-[2px] bg-pink-400" />
            <p>Hello! I&apos;m Andy, I&apos;m an artist.</p>
            <p>Technology is just another platform</p>
            <p> where I can express myself.</p>
          </div>
        </div>

        <div className="mt-5 p-4 w-[75%] md:w-[600px] bg-violet-500/25 rounded-xl">
          <p className="m-5">Work experience:</p>
          <ul className="ml-9 mt-8 space-y-4">
            <li className="flex flex-row space-x-4">
              <FaChevronRight size="20px" />
              <p>Customer Service - Phones</p>
            </li>
            <li className="flex flex-row space-x-4">
              <FaChevronRight size="20px" />
              <p>Data verification and tracking</p>
            </li>
            <li className="flex flex-row space-x-4">
              <FaChevronRight size="20px" />
              <p>Engagement Lead</p>
            </li>
            <li className="flex flex-row space-x-4">
              <FaChevronRight size="20px" />
              <p>Quality Assurance and Reporting</p>
            </li>
          </ul>
        </div>

        <div className="mt-5 p-4 w-[75%] md:w-[600px] bg-blue-500/20 rounded-xl">
          <p className="m-5">My college years highlights:</p>
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
              <p>
                <a href="https://progden.web.app" target="_blank" className="underline">
                  Programmers&apos; Den
                </a>{" "}
                Officer
              </p>
            </li>
          </ul>
        </div>

        <div className="relative -z-30 mt-12 w-[100%] flex justify-center py-8" style={{ background: "radial-gradient(#818cf8, #67e8f9)" }}>
          <motion.div
            initial={{ opacity: 0.5, scaleY: 0.1 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.7 }}
            className="-z-20 absolute right-0 top-[-12%] md:top-[-25%] bg-cyan-400/80 w-[20%] h-[25%] md:h-[50%]  rounded-l-full"
          />
          <motion.div
            initial={{ opacity: 0.5, scaleY: 0.1 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.7 }}
            className="-z-20 absolute left-0 bottom-[-12%] md:bottom-[-25%] bg-cyan-400/80 w-[20%] h-[25%] md:h-[50%] rounded-r-full"
          />

          <div className="mt-8 font-bold text-2xl flex flex-col text-violet-900 items-center">
            <div className="text-cosmos bg-clip-text">
              <h5 className={mavenPro.className}>TECHNOLOGIES I USE:</h5>
            </div>
            <div className="w-[95vw] md:w-[60vw] m-4">
              <div className="flex flex-col items-center">
                <h6 className="font-bold text-lg text-violet-900 "></h6>
                <div className="w-[100%] flex flex-row flex-wrap items-center justify-center">
                  <div className="flex flex-col items-center w-[60px] md:w-[100px] m-4">
                    <SiNextdotjs size={{ base: "65px", md: "100px" }} color="#4c1d95" />
                    <p className="font-regular text-sm mt-2">Next JS</p>
                  </div>
                  <div className="flex flex-col items-center w-[60px] md:w-[100px] m-4">
                    <SiReact size={{ base: "65px", md: "100px" }} color="#4c1d95" />
                    <p className="font-regular text-sm mt-2">React JS</p>
                  </div>
                </div>

                <h6 className="font-bold text-lg text-violet-900"></h6>
                <div className="w-[100%] flex flex-row flex-wrap items-center justify-center">
                  <div className="flex flex-col items-center w-[60px] md:w-[100px] m-4">
                    <SiFigma size={{ base: "65px", md: "100px" }} color="#4c1d95" />
                    <p className="font-regular text-sm mt-2">Figma</p>
                  </div>
                  <div className="flex flex-col items-center w-[60px] md:w-[100px] m-4">
                    <SiBlender size={{ base: "65px", md: "100px" }} color="#4c1d95" />
                    <p className="font-regular text-sm mt-2">Blender 3D</p>
                  </div>
                  <div className="flex flex-col items-center w-[60px] md:w-[100px] m-4">
                    <SiUnity size={{ base: "65px", md: "100px" }} color="#4c1d95" />
                    <p className="font-regular text-sm mt-2">C#</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] flex flex-col md:flex-row items-center">
          <div className="w-[100%] md:w-[70%] flex justify-center items-center">
            <div className="p-12 space-y-4">
              <div className="flex flex-row flex-wrap space-x-5">
                <h4 className="text-4xl">Links</h4>
                <a href="https://www.linkedin.com/in/andrea-adalem/" target="_blank">
                  <SiLinkedin size="40" />
                </a>
                <a href="https://github.com/shiichi-i" target="_blank">
                  <SiGithub size="40" />
                </a>
              </div>

              <div className="hover:ml-4 p-2 border border-white w-[155px] rounded-lg bg-white/20 backdrop-blur-sm">
                <a href="https://drive.google.com/file/d/16egAeDsH7mu_M2H2la9DvIYKKvP9bxhf/view" target="_blank" className="flex flex-row">
                  Resume
                  <div className="ml-2 h-[25px] w-[25px]">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </a>
              </div>

              <h6 className="text-cyan-300 pt-8">Contact Me:</h6>
              <div className="flex flex-row">
                <BiLogoGmail size="30" color="#67e8f9" />
                <p className="ml-5 text-lg md:text-2xl">adalem.andrea@gmail.com</p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0.5, x: 60, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-[60%] md:w-[30%] mb-[-60px] md:ml-[-150px] -z-20"
          >
            <Image src={Nagi} alt="Drawing" style={{ objectFit: "contain" }} />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
