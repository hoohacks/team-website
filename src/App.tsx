import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-gray-800">Hello World</p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
