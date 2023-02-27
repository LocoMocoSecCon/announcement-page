import React from 'react';

// import assets
import logo from "./loco-moco-horizontal.png";
import Home from "./pages/Home/Home";
import './App.css';


function App() {
  return (
    <>
      <div className='app'>
        <div className='gradient-overlay'></div>
        <div className='content'>
          <div className='container'>
            <Home />
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
