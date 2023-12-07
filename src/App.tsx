import About from "./components/About/About"
import Header from "./components/MainPage/Header"
import NavBar from "./components/Navigation/NavBar"
import Projects from "./components/Projects/Projects"
import Socials from "./components/Socials"




function App() {


  return (
    <div className=" overflow-x-hidden">
      <NavBar/>
      <Header/> 
      <About/>
      <Projects/>
      <Socials/>
      
    </div>
  )
}

export default App
