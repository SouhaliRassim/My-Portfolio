
import sheep from '/assets/Videos/sheep.mp4';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from 'react-scroll';
import { FaArrowCircleDown } from "react-icons/fa";







const Header = () => {
  return (
    <div id='header-section' className='relative w-screen h-screen bg-black  overflow-x-hidden'>
      <div className='absolute inset-0 z-0'>
        <video
          className='w-full h-full object-cover '
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={sheep} type='video/mp4' />
        </video>
      </div>
      <div className='absolute inset-0 bg-[#1A1A1A] opacity-80'></div>
      <div className='absolute  w-screen h-screen  text-white flex flex-col justify-center items-center gap-[4rem]'>
                                
                                
         
                                
                                <div className='flex flex-col justify-center items-center gap-2'>
                                <h3 className='text-white text-center text-6xl font-medium   '>RASSIM HAYTHEM<br />SOUHALI</h3>
                                <h2 className='text-2xl text-[#CBCBCB]'>Front-End Web Developer</h2>
                                </div>
                                 
                
                 
                  <button className='bg-transparent outline outline-[#75D5EB] text-[#75D5EB] shadow-xl hover:bg-[#75D5EB] hover:text-white rounded-full  py-2 font-semibold text-xl'>
                  <Link 
      activeClass="active" 
      to="about-section" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >              <div className='flex justify-center items-center gap-4 px-20'>
                    About Me <FaArrowCircleDown />
                    </div>
          </Link>
                  </button>

<div className=' flex flex-row justify-center items-center w-screen gap-6 lg:hidden xs:visible '>
                  <button className='flex flex-col items-center gap-1 '><FaGithub size={35} />GitHub</button>
                  <button className='flex flex-col items-center gap-1'><FaLinkedin size={35} />Linkedin</button>
                  <button className='flex flex-col items-center gap-1'><MdEmail size={35} />Email</button>
                  <button className='flex flex-col items-center gap-1'><FaCloudDownloadAlt size={35} />CV</button>
                 </div> 
      
      </div>
               
    </div>
  );
};

export default Header;
