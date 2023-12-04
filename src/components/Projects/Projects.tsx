



const Projects = () => {
  return (
    <div id="project-section" className='  w-screen h-screen  bg-black'>
      
      
      <div className='  w-screen h-screen  text-white flex flex-col justify-center items-center gap-6'>
            <h3 className='text-5xl font-semibold'>MY PROJECTS</h3> 
             <div className='flex justify-between bg-[#272727] w-[60rem] xs:max-md:flex-col-reverse xs:max-md:w-[20rem]  '>
                    <div className='flex flex-col gap-4 justify-center px-7 xs:max-md:py-4' >
                          <h3 className='text-3xl font-semibold text-[#75D5EB]'>Overdrive</h3>
                          <h3 className='text-xl font-medium'>Anime Library Platform</h3>
                          <p>Designed and developed a responsive Anime Library web application for users to explore and search for anime, offering detailed information on each series.
                          </p>
                           <button className='bg-[#75D5EB] text-black font-semibold px-6'>VIEW</button>
                    </div> 
              <img src="https://w.wallhaven.cc/full/85/wallhaven-858lz1.png" alt=""
              className='w-1/2 xs:max-md:w-[20rem]' />
             </div>


      </div>
               
    </div>
  )
}

export default Projects