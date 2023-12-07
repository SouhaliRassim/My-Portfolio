
import about from '/assets/Images/AboutBG.gif';
import { IoPersonSharp } from "react-icons/io5";




const About = () => {
  return (
    <div id="about-section" className='relative w-screen h-screen bg-black  overflow-x-hidden'>
    <div className='absolute inset-0 z-0'>
      <img src={about} alt="" 
      className='object-cover w-screen h-screen grayscale'/>
    </div>
    <div className='absolute inset-0 bg-[#1A1A1A] opacity-95 '></div>
    <div className='absolute  w-screen h-screen  text-white  '>
            

    <div className='flex flex-col justify-center items-center gap-10 w-screen mt-20'>
            <div className='flex flex-col justify-center items-center gap-3'>
            <IoPersonSharp size={40} />
            <div className='h-7 w-1 bg-[#75D5EB]'></div>
            <h3>About Me</h3>
            </div> 

            <div className='flex  bg-white text-zinc-700 text-lg font-semibold w-1/2 '>
              <button className='w-1/3 hover:bg-[#308599] focus:bg-[#308599] hover:text-white focus:text-white'>About</button>
              <button className='w-1/3 hover:bg-[#308599] focus:bg-[#308599] hover:text-white focus:text-white'>Why you?</button>
              <button className='w-1/3 hover:bg-[#308599] focus:bg-[#308599] hover:text-white focus:text-white'>Skills</button>
            </div>
            
          
            <div className='flex flex-col justify-center items-center gap-8'>
                        <h3 className='text-4xl font-thin'><span className='font-semibold'>Rassim Souhali</span> - Front End Developer</h3>
                        <p className='text-lg px-[25rem] text-center'>My name is Rassim Souhali. I’m a frontend web developer, a business student & an engineering graduate. I'm passionate about technology and basically everything that makes the internet tick.</p>
                        <button className='bg-transparent outline outline-[#75D5EB] text-[#75D5EB] shadow-xl hover:bg-[#75D5EB] hover:text-white rounded-full px-20 py-2'>Download CV</button>
            </div>
    </div>
    </div>
  </div>
  )
}

export default About