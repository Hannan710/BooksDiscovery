import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/landing'
import Home from './pages/home'
import Novel from './pages/novel'
import About from './pages/about';
import FictionBooks from './pages/fiction';
import Guide from './pages/guide';
import Contact from './pages/contact';
// import Register from './pages/register';
import './App.css'



export default function App() {
  return (
    <>
     <BrowserRouter>
    
     
     <Routes>
    <Route index element = {<Landing />} />
    <Route path="/home" element = {<Home />} />
    <Route path="/about" element = {<About />} />
    <Route path="/novels" element = {<Novel />} />
    <Route path="/child" element = {<FictionBooks />} />
    <Route path="/guide" element = {<Guide />} />
    <Route path="/contact" element = {<Contact />} />
    {/* <Route path="/register" element={<Register />} /> */}
     </Routes>
     </BrowserRouter>


     </>
   
  )
}


