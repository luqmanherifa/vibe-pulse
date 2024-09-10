import "./App.css";
import Mood from "./components/Mood";
import React, { useState, useEffect } from "react";
import Splash from "./components/Splash";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <div className="bg-gray-50">{isLoading ? <Splash /> : <Mood />}</div>;
};

export default App;
