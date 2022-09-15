import React,{useState} from 'react';
import NavBar from './components/NavBar.js';
import './App.css';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import AboutUs from './components/AboutUs.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Features from './components/Features.js';
const App = () => {

  const [mode, setMode] = useState('light');
  const toogleMode=()=>{
      if(mode==='light'){
      
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        document.body.style.color='white';
        showAlert('Darkmode enabled successfully','success');
      }else{
        setMode('light');
        document.body.style.backgroundColor='white';
        document.body.style.color='#042743';
      showAlert('Darkmode turned off','danger');

      }
  }

  const handleOnChange = (event)=>{
    setalert(event.target.value)
}

  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      Type:type,
    })
    setTimeout(()=>{
      setalert(null);
    },2500)

  }
  return (
   
    <>
    <BrowserRouter>
<NavBar title="Smayog Subedi" mode={mode} toogleMode={toogleMode}/>
<Alert alert={alert} />

<Routes >
<Route path='/' element={<TextForm mode={mode} onchange={handleOnChange}/>}/>
<Route path='/about' element={<AboutUs />}/>
<Route path='/features' element={<Features />}/>


</Routes>
</BrowserRouter>





    </>
   
  )
}

export default App;











