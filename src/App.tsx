import React from 'react';
import Navbar from './Navbar'; // Ensure Navbar.js is correctly imported

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-gray-800">Hello World</p>
      </header>
    </div>
  );
}

export default App;
