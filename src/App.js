import React from "react";
import "./App.css";
import NasaCard from "./components/NasaCard"
import NasaPhoto from "./components/NasaPhoto";
import NasaText from "./components/NasaText"
import NasaTitle from "./components/NasaTitle"

function App() {
  return (
    <div className="App">
      <h1>NASA Photo Of The Day</h1>
      <p>
        <NasaCard />
        <NasaPhoto />
        <NasaText />
        <NasaTitle />
      </p>
    </div>
  );
}

export default App;
