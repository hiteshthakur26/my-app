// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
//   // Link
// } from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
            setAlert(null)
        },1500)
  }

  const toggleMode = ()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#252526';
    document.body.style.color = 'white';
    showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");

    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" about="About TextUtils" mode="{darkMode}"></Navbar>  */}
      {/* <Router> */}
        <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
          {/* <div className="container my-3">
            <Routes>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/">
                <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}></TextForm>
              </Route>
                {/* <About /> */}
            {/* </Routes> */}
          {/* </div> */}
          <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route> */}
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
          {/* </Routes> */}
        </div>
          {/* </Router> */}
    </>
  );
}

export default App;

