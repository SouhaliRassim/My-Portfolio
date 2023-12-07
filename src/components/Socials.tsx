import { IoShareSocialSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";





const Socials = () => {
  return (
    <div className=' w-screen bg-[#242424] text-white flex flex-col justify-center items-center gap-10 py-10'>
           <div className='flex flex-col justify-center items-center gap-3 '>
            <IoShareSocialSharp size={40} />
            <div className='h-7 w-1 bg-[#75D5EB]'></div>
            <h3 className="text-2xl font-medium">Socials</h3>
            </div> 

            <div className="flex justify-center items-center gap-9 text-[#1A1A1A]">
              <a href="https://github.com/SouhaliRassim"><button className="flex justify-center items-center gap-3 bg-[#D9D9D9] px-10 py-2 hover:bg-[#75D5EB] hover:text-white"><FaGithub size={40} /> GitHub</button></a>
              <a href="https://www.linkedin.com/in/rassim-souhali-635558227/"><button  className="flex justify-center items-center gap-3 bg-[#D9D9D9] px-10 py-2 hover:bg-[#75D5EB] hover:text-white"><FaLinkedin size={40}  /> LinkedIn</button></a>
              <button  className="flex justify-center items-center gap-3 bg-[#D9D9D9] px-10 py-2 hover:bg-[#75D5EB] hover:text-white"><MdEmail size={40} /> Email</button>
            </div>
    </div>
  )
}

export default Socials