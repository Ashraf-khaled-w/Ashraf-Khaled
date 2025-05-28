import React from 'react'
import Home from './pages/Home/Home.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './components/ui/Layout/Layout.jsx'





function App() {
let router = createBrowserRouter(
  [
    {path:'' , element:<Layout/> , children:[
      {index:true , element:<Home/>},
      
    ]},
  ],
  
);


  return <>
  <RouterProvider router={router} />
  </>
    
  
}

export default App