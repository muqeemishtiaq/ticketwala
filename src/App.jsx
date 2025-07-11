import React from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Home from './pages/Home';
import Artist from './screens/Artist';
import "./App.css";
import Event from './screens/Event';
import EventDetail from './pages/EventDetail';
const App = () => {
  return (
    <div className='min-h-screen bg-black'>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
      <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/screens/artist" element={<Artist />} />
        <Route path="/screens/event" element={<Event />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
