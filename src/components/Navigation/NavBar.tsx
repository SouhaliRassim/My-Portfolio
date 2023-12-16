import { Link } from "react-router-dom"




const NavBar = () => {
  return (
    <div className='w-screen bg-[#171819] py-3 px-32 text-lg overflow-x-hidden outline  outline-[#00EED3]'>
      <div className='flex justify-between font-mono xs:max-md:flex-col xs:max-md:gap-3 xs:max-md:justify-center xs:max-md:items-center'>
        <h3 className='text-[#00EED3]'>&lt;<span className='text-[#FFFFFF] text-md'> Rassim Souhali </span>&#47;&gt;</h3>
            <div className='flex gap-6  xs:max-md:gap-2 text-[#FFFFFF] xs:max-md:text-sm xs:max-md:flex xs:max-md:justify-center xs:max-md:'>
            <Link to='/My-Portfolio/'><p className='hover: focus:text-[#00EED3]  active:text-[#A4F2AA] cursor-pointer'>Home</p></Link>
             <span className="text-[#00EED3]">I</span> <Link to='/My-Portfolio/about'><p className='hover:text-[#00EED3] cursor-pointer'>About</p></Link>
             <span className="text-[#00EED3]">I</span> <Link to='/My-Portfolio/Certs'><p className='hover:text-[#00EED3] cursor-pointer'>Certifications</p></Link>
             <span className="text-[#00EED3]">I</span> <Link to='/My-Portfolio/projects'><p className='hover:text-[#00EED3] cursor-pointer'>Projects</p></Link>
             <span className="text-[#00EED3]">I</span> <Link to='/My-Portfolio/skills'><p className='hover:text-[#00EED3] cursor-pointer'>Skills</p></Link>
             <span className="text-[#00EED3]">I</span> <Link to='/My-Portfolio/contact'><p className='hover:text-[#00EED3] cursor-pointer'>Contact</p></Link>
            </div>
      </div>
    </div>
  )
}

export default NavBar