import React from "react";
import "./App.css";
import NasaPhoto from "./components/NasaPhoto";
import NasaText from "./components/NasaText"
import NasaTitle from "./components/NasaTitle"

function App() {
  return (
    <div className="App">
      <p>
        NASA Photo Of The Day
        <NasaPhoto />
        <NasaText />
        <NasaTitle />
      </p>
    </div>
  );
}

export default App;
