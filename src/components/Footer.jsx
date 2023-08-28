import Link from 'next/link';
import { SiNextdotjs } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiVercel } from 'react-icons/si';

const Footer = () => {
    return(
        <main>
            <div className="min-h-[50px] w-[100%] bg-gradient-to-tr from-pink-400 to-stardust rounded-tr-[80px]">
                <div className="p-4 relative">
                    

                    <div className="w-[100%] flex flex-col sm:flex-row pr-12 pb-12 md:pb-2 mt-8">
                        <div className="m-2 mx-12">
                            <h6 className="text-purple-800 font-bold text-lg mb-2">Browse</h6>
                            <ul className="space-y-2 ml-4">
                                <li>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects">
                                        My Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        About Me
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="m-2 mx-12">
                            <h6 className="text-purple-800 font-bold text-lg mb-2">Links</h6>
                            <ul className="space-y-2 ml-4">
                                <li>
                                    <a href="https://www.linkedin.com/in/andrea-adalem/" target="_blank">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://drive.google.com/file/d/16egAeDsH7mu_M2H2la9DvIYKKvP9bxhf/view" target="_blank">
                                        CV
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-end w-[100%]">
                        <div className="absolute text-cyan-200 bottom-2">
                        <p className="text-white">&copy; 2023 Andrea Adalem</p>
                            <div className="flex flex-row space-x-2 text-sm">
                                <SiNextdotjs size="18" color="inherit" />
                                <SiTailwindcss size="18" color="inherit" />
                                <p>Next JS + Tailwind CSS</p>
                            </div>
                            <div className="flex flex-row space-x-2 text-sm">
                                <p className="font-bold">Hosted by Vercel</p>
                                    <SiVercel size="18" color="inherit" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
export default Footer;