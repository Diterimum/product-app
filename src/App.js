import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Features/>
      <Contact/>
    </div>
  );
}

export default App;
