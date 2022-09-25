
import './App2.css';
// import Drag from './components/D&D';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0c6c7d';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';

    }
  }

  return (
    <>

      <Router>
        <Navbar title="PROJECT" mode={mode}  toggleMode={toggleMode} />
        <div className="container">
      
          <Routes>
            {/* <Route exact path="/about" element={<Drag mode={mode}/>} /> */}
            <Route exact path="/" element={<TextForm heading="Enter The Text To Analyse" mode={mode} />} />
          </Routes>
        </div>
      </Router>
      {/* <About/> */}


    </>

  );

}
export default App;
