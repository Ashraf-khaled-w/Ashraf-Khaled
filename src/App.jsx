import React from 'react'
import Home from './pages/Home/Home.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './components/ui/Layout/Layout.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contact from './pages/Contact/Contact.jsx'
import About from './pages/About/About.jsx'




function App() {
let router = createBrowserRouter(
  [
    {path:'' , element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path:'projects' , element:<Projects/>},
      {path:'contact' , element:<Contact/>},
      {path:'about' , element:<About/>},
    ]},
  ],
  
);


  return <>
  <RouterProvider router={router} />
  </>
    
  
}

export default App