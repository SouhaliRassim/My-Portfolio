import { Outlet } from 'react-router-dom';
import NavBar from './Navigation/NavBar'



const Layout = () => {
  return (
    <div className=" overflow-x-hidden">
      <NavBar/>
      <Outlet/>
      
      
      
    </div>
  )
}

export default Layout