
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react";
import guy from './anime5.json';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Home = () => {
  return (
    <div className='w-screen h-screen bg-[#121212] flex overflow-hidden '>
      <div className='h-screen flex justify-center items-center lg:px-36 xs:max-md:flex-col   '> 
        <div className='text-[#FFFFFF] font-mono flex flex-col gap-2 justify-start items-start px-16'>
              <h3 className='text-5xl font-medium xs:max-md:text-4xl'>Hi, I'm Souhali Rassim</h3>
                <TypeAnimation className='text-2xl  text-[#00EED3]'
      sequence={[
        'Web Developer',
        1000, 
        'IT Support',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
              <p className='text-lg font-light mt-5 mb-5'>My name is Rassim Souhali. I’m a frontend web developer, a business student & an engineering graduate. I'm passionate about technology and basically everything that makes the internet tick.</p>
                    <div className='flex flex-col gap-7 justify-center'>
                    
                    <div className="flex justify- items-center gap-5 xs:max-md:text-sm"> 
                    <Link to='/My-Portfolio/about'><button className='outline hover:outline-[#00EED3] text-white hover:text-[#00EED3] px-10  py-2'>About Me</button></Link>
                    <Link to='https://www.scribd.com/document/690808943/Rassim-CV'><button className='outline hover:outline-[#00EED3] text-white hover:text-[#00EED3] px-10 py-2'>Download CV</button></Link>
                    
                       
                    </div>
                            <div className="flex gap-6 xs:max-md:flex xs:max-md:justify-center">
                            <a href="https://github.com/SouhaliRassim"><p className="flex justify-center items-center gap-2 outline  hover:text-[#00EED3] rounded-full"><FaGithub size={31} /></p></a>
                    <a href="https://www.linkedin.com/in/rassim-souhali-635558227/"><p className="flex justify-center items-center gap-2 outline rounded-full hover:text-[#00EED3]"><FaLinkedin size={31} /></p></a>
                    <a href="https://github.com/SouhaliRassim"><p className="flex justify-center items-center gap-2 outline  hover:text-[#00EED3] rounded-full"><MdOutlineMailOutline size={31} /></p></a> 
                            </div>
                  </div>
        </div>
        <Lottie animationData={guy} loop={true} />
      </div>
    </div> 
  )
}

export default Home