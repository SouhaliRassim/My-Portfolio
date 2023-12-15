import dog from '/assets/Images/Overdrive.png';
import { MdMonitor } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";



const Projects = () => {
  return (
    <div className='w-screen h-screen bg-[#0D0D0D] font-mono flex flex-col gap-20'>
      <h3 className='text-center text-5xl mt-20 text-white '>My Projects</h3>
      <div className='flex gap-10 justify-center items-center'>
                              <div className='flex flex-col justify-center items-center gap-4'>
                              <div className='bg-[#233157] w-[30rem] h-[17rem] flex justify-center items-center gap-2  outline outline-[#00EED3]'>
                              <img src={dog} alt="" className='w-[10rem] h-[10rem]'/> 
                              <h3 className='text-4xl font-semibold text-white '>Anime library</h3> 
                              </div> 
                                      <div className="flex text-base gap-5 text-black">
                                        <a href="https://6571bc35fba1930080bcaee0--elaborate-bonbon-f2ad06.netlify.app/"><button className="flex justify-center items-center gap-2 bg-white px-5 rounded-lg text-xl hover:bg-[#00EED3]"><MdMonitor/> Website</button></a>
                                      <a href="https://github.com/SouhaliRassim/Overdrive"><button className="flex justify-center items-center gap-2 bg-white px-5 rounded-lg text-xl hover:bg-[#00EED3]"><FaGithubSquare/> Code</button></a> 
                                      </div>
                              </div>

                              <div className='flex flex-col justify-center items-center gap-4'>
                              <div className='bg-[#233157] w-[30rem] h-[17rem] flex justify-center items-center gap-2 outline outline-[#00EED3] '>
                             
                              <h3 className='text-4xl font-semibold text-[#00EED3]'>&lt; <span className='text-[#FFFFFF] text-md'>Personal Portfolio</span> &#47;&gt;</h3> 
                              </div> 
                                      <div className="flex text-base gap-5 text-black">
                                        <a href="https://6571bc35fba1930080bcaee0--elaborate-bonbon-f2ad06.netlify.app/"><button className="flex justify-center items-center gap-2 bg-white px-5 rounded-lg text-xl hover:bg-[#00EED3]"><MdMonitor/> Website</button></a>
                                      <a href="https://souhalirassim.github.io/My-Portfolio/"><button className="flex justify-center items-center gap-2 bg-white px-5 rounded-lg text-xl hover:bg-[#00EED3]"><FaGithubSquare/> Code</button></a> 
                                      </div>
                              </div>
      </div>
    
    </div>
  )
}

export default Projects