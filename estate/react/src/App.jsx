import React, {useEffect} from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get("http://localhost:8000/").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <h1 className="text-3xl font-bold underline">

  </h1>
  )
}

export default App
