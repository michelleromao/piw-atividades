import React from "react";
import "./reset.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Publish from "./Components/Publish/Publish";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <div>
      <Header></Header>
      <Publish></Publish>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
