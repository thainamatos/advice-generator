import "./App.css";
import React, {useState, useEffect} from "react";
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import pauseMobile from "./images/pattern-divider-mobile.svg";
import icon from "./images/icon-dice.svg";
import { useState } from "react/cjs/react.production.min";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState('');

  const getAdvice = async() =>{
    const response = await axios.get("https://api.adviceslip.com/advice");
    console.log(response);
  }

  return (
    <div>
      <main className="container">
        <h1 className="title">Advice #</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem.
        </p>
        <picture>
          <source media="(min-width: 768px)" srcSet={pauseDesktop} />
          <img src={pauseMobile} alt="" />
        </picture>
        <button>
          <img src={icon} alt="" />
        </button>
      </main>
    </div>
  );
}

export default App;
