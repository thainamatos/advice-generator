import "./App.css";
import React, { useState, useEffect } from "react";
import dividerDesktop from './images/pattern-divider-desktop.svg'
import dividerMobile from './images/pattern-divider-mobile.svg'
import dice from './images/icon-dice.svg'
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data.slip;
    setAdvice(advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className='card'>
        <h1>ADVICE #{advice.id}</h1>
        <p className="fade">“{advice.advice}”</p>
        <img src={dividerDesktop} className="divider-desktop" alt="divider"  />
        <img src={dividerMobile} className="divider-mobile" alt="divider" />
        <div className="dice" onClick={getAdvice}>
        <img src={dice} alt="dice"   />
        </div>
    </div>
  );
}

export default App;
