
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import About from './Pages/About.tsx';
import Projects from './Pages/Projects.tsx';
import Layout from './components/Layout.tsx';
import Home from './components/Home.tsx';
import Skills from './Pages/Skills.tsx';

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path='/My-Portfolio/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/My-Portfolio/about' element={<About />} />
      <Route path='/My-Portfolio/projects' element={<Projects />} />
      <Route path='/My-Portfolio/skills' element={<Skills />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);