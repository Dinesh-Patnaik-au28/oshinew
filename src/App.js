import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Contact from './component/Contact';
import Events from "./component/Event-Pages/Events";
import Blogs from "./component/Blogs/Blogs";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </div>
  )
}
export default App;

