import { FaFileCode } from "react-icons/fa";
import dog from '/assets/Images/Overdrive.png';
import { MdMonitor } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import coin from '/assets/Images/coin.png';
import sheep from '/assets/Images/Msheep.png';
import chat from '/assets/Images/chat.png';
import { IoIosWarning } from "react-icons/io";






const Projects = () => {
  return (
    <div id="project-section" className='flex flex-col justify-center items-center  w-screen h-screen  bg-[#1A1A1A]  overflow-x-hidden text-white gap-6'>
           <div className='flex flex-col justify-center items-center gap-3 '>
            <FaFileCode size={40} />
            <div className='h-7 w-1 bg-[#75D5EB]'></div>
            <h3 className="text-2xl font-medium">My Projects</h3>
            </div> 
               

               <div className="grid grid-cols-2 grid-rows-2 gap-x-9 gap-y-7 ">


                <div className="bg-[#2B2E5F] hover:bg-black outline w-[30rem] h-[15rem] overflow-hidden flex flex-col justify-center items-center text-3xl font-semibold gap-6 ">
                  
                  <div className="flex justify-center items-center">
                    <img src={dog} alt="" className="w-32" /> 
                    Anime Library   
                  </div> 
                        <div className="flex text-base gap-5 text-black">
                          <button className="flex justify-center items-center gap-2 bg-white px-5 rounded-lg"><MdMonitor/> Website</button>
                          <button className="flex justify-center items-center gap-2 bg-white px-5 rounded-lg"><FaGithubSquare/> Code</button>
                        </div>
                </div>


                <div className="bg-[#68AD4E]  hover:bg-black  outline w-[30rem] h-[15rem] overflow-hidden flex flex-col justify-center items-center text-3xl font-semibold gap-6 ">
                  
                  <div className="flex justify-center items-center">
                    <img src={coin} alt="" className="w-32" /> 
                    Expense tracker   
                  </div> 
                        <div className="flex text-base gap-5 text-black">
                          <button className="flex justify-center items-center gap-2 bg-white px-5 rounded-lg"><MdMonitor/> Website</button>
                          <button className="flex justify-center items-center gap-2 bg-white px-5 rounded-lg"><FaGithubSquare/> Code</button>
                        </div>
                </div>

                <div className="bg-[#1E1E1E]  hover:bg-black  outline w-[30rem] h-[15rem] overflow-hidden flex flex-col justify-center items-center text-3xl font-semibold gap-6 ">
                  
                  <div className="flex justify-center items-center gap-4">
                    <div className="bg-[#1A1A1A] rounded-full w-20 h-20 p-4 outline flex justify-center items-center">
                    <img src={sheep} alt="" className="" /> 
                    </div>
                    Portfolio Website  
                  </div> 
                        <div className="flex text-base gap-5 text-black">
                          <button className="flex justify-center items-center gap-2 bg-white px-5 rounded-lg"><MdMonitor/> Website</button>
                          <button className="flex justify-center items-center gap-2 bg-white px-5 rounded-lg"><FaGithubSquare/> Code</button>
                        </div>
                </div>

                <div className="bg-[#DE4848]  hover:bg-black  outline w-[30rem] h-[15rem] overflow-hidden flex flex-col justify-center items-center text-3xl font-semibold gap-6 ">
                  
                  <div className="flex justify-center items-center gap-2">
                    <img src={chat} alt="" className="w-32" /> 
                    Chat App   
                  </div> 
                        <div className="flex text-base gap-5 text-black">
                          <button className="flex justify-center items-center gap-2 bg-white px-5 rounded-lg"><IoIosWarning/> In Porgress</button>
                         
                        </div>
                </div>
              
                
                
               </div>
    </div>
  )
}

export default Projects