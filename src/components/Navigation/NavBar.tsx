import msheep from '/assets/Images/Msheep.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-scroll';



const NavBar = () => {
  return (
    <div className='lg:w-screen lg:bg-[#1A1A1A] py-3 lg:block xs:hidden '>
      <div className='flex gap-4 justify-between items-center text-white px-8'>
                
                      <div className='flex gap-2'>
                        <img src={msheep} alt="" className='h-7' />
                        <h3 className='font-semibold text-[#75D5EB]'>R H S</h3>
                      </div> 
                <div className='flex gap-6'>
                <Link activeClass="active" to="about-section" spy={true} smooth={true} offset={50} duration={500} ><button>About</button></Link>
                <Link activeClass="active" to="project  -section" spy={true} smooth={true} offset={50} duration={500} ><button>Projects</button></Link>
                  <button>Contact</button> 
                </div>
                        <div className='flex gap-4'>
                         <button className='bg-[#D9D9D9] text-black px-2 rounded-xl text-sm font-semibold'>Download CV</button>
                          <button><FaGithub size={24}/></button>
                          <button><FaLinkedin size={24}/></button>
                          <button><MdEmail size={24}/></button>
                          
                        </div>
      </div>
    </div>
  )
}

export default NavBar