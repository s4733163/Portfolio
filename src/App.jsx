import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import 'bootstrap-icons/font/bootstrap-icons.css';




function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }, 
    {
      path:"/about",
      element: <About />
    }, 
    {
      path:"/project",
      element:<Projects/>
    },
    {
      path:"/contact",
      element:<Contacts/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
