import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-700/40 dark:bg-black/90 dark:text-white  py-12 px-4 border-t ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} SubTrack. All rights reserved.</p>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/prithu64" className="hover:text-gray-400 transition"><FaGithub size={25} /></a>
          <a href="https://x.com/Prachurjya91407" className="hover:text-gray-400 transition"><FaXTwitter  size={25}/></a>
          <a href="#none" className="hover:text-gray-400 transition flex items-center ">
            made by <span className="underline ml-2"> Prachurjya </span> 
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
