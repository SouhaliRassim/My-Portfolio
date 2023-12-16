
import { Link } from "react-router-dom";
import me from '/assets/Images/Me.png';


const About = () => {


  
    
          
          
        


  return (
    <div className="w-screen h-screen bg-[#121212] font-mono flex justify-center items-center   ">

      <img src={me} alt="" className="w-[30rem] xs:max-md:hidden" />
  <div className='flex flex-col  gap-20'>
                          
                         <div className='text-lg px-[rem] text-[#FFFFFF]  xs:max-md:px-5 text-left xs:max-md:text-md xs:max-md:font-thin flex flex-col gap-6'>
                          <h3 className="text-[#00EED3] text-2xl">&lt;<span className='text-[#FFFFFF] text-4xl'> About Me </span>&#47;&gt;</h3>
                          <p className="pr-16 xs:max-md:pr-2">As a student actively pursuing a Master's in Business Management while holding a degree in aeronautical engineering, I am equipped with a diverse skill set and a keen ability to tackle challenges analytically. Alongside my academic journey, I am delving into web development, specifically focusing on frontend technologies as a new developer. My commitment to continuous learning extends to exploring Microsoft Azure as an additional area of expertise. I bring a fresh perspective, adaptability, and a strong foundation in problem-solving that make me a valuable asset to any team.</p> 
                        </div>
                        
           <div className="flex flex-col gap-4 xs:max-md:pl-6">
           <Link to='/My-Portfolio/projects'><h3 className="text-xl text-[#00EED3]  hover:text-white">My Projects -→</h3></Link>
           <Link to='/My-Portfolio/Certs'><h3 className="text-xl text-[#00EED3]  hover:text-white">Certifications -→</h3></Link>
           </div>
         </div>
   </div>
  );
};

export default About