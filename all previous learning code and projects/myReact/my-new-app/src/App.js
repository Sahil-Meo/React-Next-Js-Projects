import React, { useState } from 'react';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {

  const [btnText, setbtnText] = useState('Enable Dark Mode');
  const [gbtnText, setgbtnText] = useState('Enable Green Mode');
  const [mode, setmode] = useState('white');
  const [alert, setalert] = useState(null)

  const showAlert = (message,type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const togglemode = () => {
    if (mode === 'white' || mode === 'success') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      setbtnText('Enable Light Mode')
      showAlert("Dark Mode is Enabled!", "success")
    }
    else {
      setmode('white')
      document.body.style.backgroundColor = 'white'
      setbtnText('Enable Green Mode')
      showAlert("Light Mode is Enabled!", "success")

    }
  }
  const grntogglemode = () => {
    if (mode === 'white' || mode === 'dark') {
      setmode('success');
      document.body.style.backgroundColor = '#88e788'
      document.body.style.color = 'white'
      setgbtnText('Enable Light Mode')

    }
    else {
      setmode('white')
      document.body.style.backgroundColor = 'white'
      setgbtnText('Enable Light Mode')
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Textutils" btnText={btnText} gbtnText={gbtnText} mode={mode} togglemode={togglemode} grntogglemode={grntogglemode} />
        <Alert alert={alert} />
        <div className="container-fluid my-5 bg-Secondary">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/TextForm" element={<TextForm mode={mode}  showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
