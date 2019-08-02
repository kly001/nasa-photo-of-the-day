import React, {useState, useEffect} from "react";
import "./App.css";

import NasaPhoto from "./components/NasaPhoto";
import NasaText from "./components/NasaText"
import NasaTitle from "./components/NasaTitle"
import axios from "axios";

function App() {
  
  const [nasaImage, setNasaImage] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=LdjmPChf5jQDCWyPTLDA9wjgtIWD24RUF1G7yvbA")
    .then(res => {
      console.log(res.data)
      setNasaImage(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[]);



  return (
    <div className="App">
      <h1>NASA Photo Of The Day</h1>
      <p>
        {/* {nasaImage} */}

        <NasaPhoto />
        <NasaText />
        <NasaTitle />
      </p>
    </div>
  );
}

export default App;
