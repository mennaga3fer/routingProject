import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Layout from './components/layout/Layout'
import NotFound from './components/notfound/NotFound'
import Framework from './components/framework/Framework';

function App() {

let routes = createBrowserRouter([
{path:'',element:<Layout/>, children:[
{index: true,element:<About/>},
{path:'framework',element:<Framework/>},
{path:'portfolio',element:<Portfolio/>},
{path:'contact',element:<Contact/>},
{path:'*',element:<NotFound/>}
]}


])



  return (
    <>
<div>
<RouterProvider router={routes} />

</div>
  
    </>
  )
}

export default App
