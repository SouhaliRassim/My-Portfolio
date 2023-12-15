import { Link } from "react-router-dom"




const NavBar = () => {
  return (
    <div className='w-screen bg-[#007B6A] py-3 px-32 text-lg overflow-x-hidden'>
      <div className='flex justify-between font-mono'>
        <h3 className='text-[#00EED3]'>&lt;<span className='text-[#FFFFFF] text-md'> Rassim Souhali </span>&#47;&gt;</h3>
            <div className='flex gap-6 text-[#FFFFFF]'>
            <Link to='/My-Portfolio/'><p className='hover:text-[#00EED3] focus:text-[#00EED3]  active:text-[#A4F2AA] cursor-pointer'>Home</p></Link>
             I <Link to='/My-Portfolio/about'><p className='hover:text-[#00EED3] cursor-pointer'>About</p></Link>
             I <Link to='/My-Portfolio/about'><p className='hover:text-[#00EED3] cursor-pointer'>Certifications</p></Link>
             I <Link to='/My-Portfolio/projects'><p className='hover:text-[#00EED3] cursor-pointer'>Projects</p></Link>
             I <Link to='/My-Portfolio/skills'><p className='hover:text-[#00EED3] cursor-pointer'>Skills</p></Link>
             I <Link to='/My-Portfolio/contact'><p className='hover:text-[#00EED3] cursor-pointer'>Contact</p></Link>
            </div>
      </div>
    </div>
  )
}

export default NavBar