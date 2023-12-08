import msheep from '/assets/Images/Msheep.png';
import { Link } from 'react-scroll';



const NavBar = () => {
  return (
    <div className='lg:w-screen lg:bg-[#1A1A1A] py-3 lg:block xs:hidden   overflow-x-hidden'>
      <div className='flex gap-4 justify-between items-center text-white px-20'>
                
                      <div className='flex gap-2'>
                        <img src={msheep} alt="" className='h-7' />
                        <h3 className='font-semibold text-[#75D5EB] text-lg'>RASSIM</h3>
                      </div> 
                <div className='flex gap-6'>
                <Link activeClass="active" to="header-section" spy={true} smooth={true} offset={50} duration={500} ><button>Home</button></Link>
                <Link activeClass="active" to="about-section" spy={true} smooth={true} offset={50} duration={500} ><button>About</button></Link>
                <Link activeClass="active" to="project-section" spy={true} smooth={true} offset={50} duration={500} ><button>Projects</button></Link>
                <Link activeClass="active" to="socials-section" spy={true} smooth={true} offset={50} duration={500} ><button>Contact</button></Link>
                </div>
                       
      </div>
    </div>
  )
}

export default NavBar