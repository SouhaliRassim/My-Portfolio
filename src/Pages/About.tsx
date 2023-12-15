import { useState } from "react";
import Certs from "../components/Certs";
import { Link } from "react-router-dom";



const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          
          <div className='flex flex-col justify-center items-center gap-8'>
           

            
            <p className='text-lg px-[15rem] text-[#FFFFFF]  xs:max-md:px-5 text-left xs:max-md:text-md xs:max-md:font-thin flex flex-col gap-3'>
              <h3 className="text-[#00EED3] text-2xl">&lt;<span className='text-[#FFFFFF] text-md'> Tell Me About you? </span>&#47;&gt;</h3>
            As a student actively pursuing a Master's in Business Management while holding a degree in aeronautical engineering, I am equipped with a diverse skill set and a keen ability to tackle challenges analytically. Alongside my academic journey, I am delving into web development, specifically focusing on frontend technologies as a new developer. My commitment to continuous learning extends to exploring Microsoft Azure as an additional area of expertise. I bring a fresh perspective, adaptability, and a strong foundation in problem-solving that make me a valuable asset to any team.
            </p>
            <Link to='/My-Portfolio/projects'><h3 className="text-xl text-[#00EED3] outline py-2 px-7 hover:text-white">My Projects →</h3></Link>
          </div>
        );

      case 'whyYou':
        return (
          <div className='flex flex-col justify-center items-center mt-[-4rem]'>
            {/* Content for "Why Me?" section */}
            
            <Certs/>
          </div>
        );

      
      default:
        return null;
    }
  };

  return (
    <div className="w-screen h-screen bg-[#0D0D0D] font-mono ">
  
          <div className='flex flex-col  justify-center items-center text-black gap-28 '>
            <div className="flex  gap-20 mt-[5rem] text-5xl">
            <button
              className={` hover:text-[#00EED3] focus:text-[#00EED3 text-[#FFFFFF] outline px-4 py-2 ${activeTab === 'about' ? 'text-[#00EED3]' : ''}`}
              onClick={() => handleTabClick('about')}
            >
              About
            </button>
            <button
              className={` hover:text-[#00EED3] focus:text-[#00EED3]  text-[#FFFFFF] outline px-4 py-2 ${activeTab === 'whyYou' ? 'text-[#00EED3]' : ''}`}
              onClick={() => handleTabClick('whyYou')}
            >
              Certifications
            </button>
            </div>
          
           <div className="">
          {renderContent()}
          </div>
          
        </div>
   </div>
  );
};

export default About