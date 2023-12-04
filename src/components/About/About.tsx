
import about from '/assets/Images/AboutBG.gif';



const About = () => {
  return (
    <div id="about-section" className='relative w-screen h-screen bg-black'>
    <div className='absolute inset-0 z-0'>
      <img src={about} alt="" 
      className='object-cover w-screen h-screen grayscale'/>
    </div>
    <div className='absolute inset-0 bg-[#1A1A1A] opacity-90 '></div>
    <div className='absolute  w-screen h-screen  text-white flex xs:max-md:flex-col justify-center items-center lg:gap-32 xs:max-md:px-7 xs:max-md:gap-6'>
                          <div className='flex flex-col gap-2 '>
                          <h3 className='text-white  text-4xl font-bold xs:max-md:text-xl'>ABOUT</h3>
                          <h3 className='text-[#75D5EB] text-3xl font-semibold xs:max-md:text-xl'>RASSIM HAYTHEM SOUHALI</h3> 
                          <h2 className='text-[#EAE7E7] text-2xl'>Front-End Web Developer</h2>
                          <h2 className='text-[#D3CFCF] text-xl'>I build exceptional and accessible digital experiences for the web.</h2>
                          </div>
                                     
                          <div className='lg:w-1/3 flex flex-col gap-5'>
                          <h3 className='text-[#1488A3] text-xl font-medium  '>Who are you ?</h3>
                          <h3 className='text-white   '>My name is Rassim Souhali. I’m a frontend web developer, a buissninss student & an engineering graduate. I'm passionate about art, technology and basically everything that makes the internet tick.</h3>
                          
                          <h3 className='text-[#1488A3] text-xl font-medium  '>Why you ?</h3>
                          <h3 className='text-white   '>As a student actively pursuing a Master's in Business Management while holding a degree in aeronautical engineering, I am equipped with a diverse skill set and a keen ability to tackle challenges analytically. Alongside my academic journey, I am delving into web development, specifically focusing on frontend technologies as a new developer. My commitment to continuous learning extends to exploring Microsoft Azure as an additional area of expertise. I bring a fresh perspective, adaptability, and a strong foundation in problem-solving that make me a valuable asset to any team. </h3>
                          </div>
                                  
    </div>
  </div>
  )
}

export default About