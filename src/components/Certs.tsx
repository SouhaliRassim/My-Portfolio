import google from '/assets/Images/GoogleCert.jpg';
import mic from '/assets/Images/Microsoft.png';
import cis from '/assets/Images/Cisco.jpg';





const Certs = () => {
  return (
    <div className='flex gap-10 xs:max-md:gap-6  xs:max-md:flex-col'>
    <div className='flex flex-col justify-center items-center gap-2 cursor-pointer'>
      <a href="https://coursera.org/share/84a0740ada3a6fe6b7b31e4b77714c51"><img src={google} alt=""
      className='w-[28rem] xs:max-md:w-[13rem] xs:max-md:h-[8rem] h-[20rem] outline-[#00EED3] outline'
      /></a>
      <h3 className='text-white text-xl'>Google IT support certificate</h3>
      <p className='text-white '>(Completed)</p>
      
    </div>

    <div className='flex flex-col justify-center items-center gap-2 cursor-pointer'>
      <a href=""><img src={mic} alt=""
      className='w-[28rem] h-[20rem] xs:max-md:w-[13rem] xs:max-md:h-[8rem] outline-[#00EED3] outline '
      /></a>
      <h3 className='text-white text-xl'>Microsoft Azure: From Zero to Hero</h3>
      <p className='text-white '>(In Progress)</p>
      
    </div>

    <div className='flex flex-col justify-center items-center gap-2 cursor-pointer'>
      <a href="https://coursera.org/share/84a0740ada3a6fe6b7b31e4b77714c51"><img src={cis} alt=""
      className='w-[28rem] h-[20rem] xs:max-md:w-[13rem] xs:max-md:h-[8rem] outline-[#00EED3] outline object-cover'
      /></a>
      <h3 className='text-white text-xl'>Network Technician certificate (CISCO)</h3>
      <p className='text-white '>(In Progress)</p>
      
    </div>
    </div>
  )
}

export default Certs