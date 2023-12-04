
import sheep from '/assets/Videos/sheep.mp4';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import msheep from '/assets/Images/Msheep.png';
import { Link } from 'react-scroll';







const Header = () => {
  return (
    <div className='relative w-screen h-screen bg-black'>
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
      <div className='absolute inset-0 bg-[#1A1A1A] opacity-70'></div>
      <div className='absolute  w-screen h-screen  text-white flex flex-col justify-center items-center gap-[2rem]'>
                                
                                
         
                                
                                <div className='flex flex-col justify-center items-center gap-2'>
                                <h3 className='text-white text-center text-6xl font-medium   '>RASSIM HAYTHEM<br />SOUHALI</h3>
                                <h2 className='text-2xl'>Front-End Web Developer</h2>
                                </div>
                                 
                
                 
                  <button className='bg-[#1A1A1A] outline shadow-xl hover:shadow-blue-400 rounded-full p-4'>
                  <Link 
      activeClass="active" 
      to="about-section" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
                    <img src={msheep} alt=""
                  className='h-16  '/>
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
