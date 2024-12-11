import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './Component/Nav';
import { Home } from './ScreenComponent/Home';
import { About } from './ScreenComponent/About';
import { Contacts } from './ScreenComponent/Contacts'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App
