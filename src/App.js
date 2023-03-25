import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Contact from './component/Contact';
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  return (
    <div>
      {/* <h2 className="text-3xl font-bold underline">Welcome to React</h2> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
    </div>
  )
}

export default App