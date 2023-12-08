import  { useState } from 'react';
import about from '/assets/Images/AboutBG.gif';
import { IoPersonSharp } from 'react-icons/io5';

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
           

            <h3 className='text-4xl font-thin xs:max-md:text-xl'>
              <span className='font-semibold'>Rassim Souhali</span> - Front End Developer
            </h3>
            <p className='text-lg px-[25rem] xs:max-md:px-5 text-center xs:max-md:text-md xs:max-md:font-thin'>
              My name is Rassim Souhali. I’m a frontend web developer, a business student & an engineering graduate. I'm passionate about technology and basically everything that makes the internet tick.
            </p>
            <a href="https://www.scribd.com/document/690808943/Rassim-CV"><button className='bg-transparent outline outline-[#75D5EB] text-[#75D5EB] shadow-xl hover:bg-[#75D5EB] hover:text-white rounded-full px-20 py-2'>Download CV</button></a>
          </div>
        );

      case 'whyYou':
        return (
          <div className='flex flex-col justify-center items-center gap-8 px-[15rem] xs:max-md:px-10 '>
            {/* Content for "Why Me?" section */}
            <h2>Why Me?</h2>
            <p>As a student actively pursuing a Master's in Business Management while holding a degree in aeronautical engineering, I am equipped with a diverse skill set and a keen ability to tackle challenges analytically. Alongside my academic journey, I am delving into web development, specifically focusing on frontend technologies as a new developer. My commitment to continuous learning extends to exploring Microsoft Azure as an additional area of expertise. I bring a fresh perspective, adaptability, and a strong foundation in problem-solving that make me a valuable asset to any team.</p>
          </div>
        );

      case 'skills':
        return (
          <div className='flex flex-col justify-center items-center gap-8 px-[15rem] xs:max-md:px-10 xs:max-md:text-center text-center '>
            {/* Content for "Skills" section */}
            <h2>Skills</h2>
            <p> JavaScript - TypeScript | React | Git | HTML | python | Firebase | tailwind Css | Css | Api | Figma | Frontend Development | Azure | Cloud Computing | Ui/Ux | Adobe Photoshop |Customer service | Communication | Leadership | Teamwork | Creativity | Time Management | Adaptability | Problem-solving | Work Ethic | Critical Thinking | Conflict Management  | Emotional Intelligence </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div id="about-section" className='flex relative w-screen h-screen bg-black  overflow-x-hidden xs:max-md:flex xs:max-md:justify-center xs:max-md:items-center '>
      <div className='absolute inset-0 z-0'>
        <img src={about} alt="" className='object-cover w-screen h-screen grayscale' />
      </div>
      <div className='absolute inset-0 bg-[#1A1A1A] opacity-95 '></div>
      <div className='absolute w-screen h-screen text-white '>
        <div className='flex flex-col justify-center items-center gap-10 w-screen mt-20'>
          <div className='flex flex-col justify-center items-center gap-3'>
            <IoPersonSharp size={40} />
            <div className='h-7 w-1 bg-[#75D5EB]'></div>
            <h3>About Me</h3>
          </div>

          <div className='flex bg-white text-zinc-700 text-lg font-semibold w-1/2 xs:max-md:w-[20rem] xs:max-md:p-2'>
            <button
              className={`w-1/3 hover:bg-[#308599] focus:bg-[#308599] hover:text-white focus:text-white ${activeTab === 'about' ? 'bg-[#308599] text-white' : ''}`}
              onClick={() => handleTabClick('about')}
            >
              About
            </button>
            <button
              className={`w-1/3 hover:bg-[#308599] focus:bg-[#308599] hover:text-white focus:text-white ${activeTab === 'whyYou' ? 'bg-[#308599] text-white' : ''}`}
              onClick={() => handleTabClick('whyYou')}
            >
              Why you?
            </button>
            <button
              className={`w-1/3 hover:bg-[#308599] focus:bg-[#308599] hover:text-white focus:text-white ${activeTab === 'skills' ? 'bg-[#308599] text-white' : ''}`}
              onClick={() => handleTabClick('skills')}
            >
              Skills
            </button>
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default About;
