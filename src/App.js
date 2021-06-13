import "./styles.css";
import React from "react";
import SearchEngine from "./SearchEngine";
import ChangeCity from "./ChangeCity";

export default function App() {
  return (
    <div className="App">
      <h1>WEATHER APP</h1>
      <SearchEngine />
      <br />
      <ChangeCity />
    <p>Coded by Hayleigh <br /><a href="https://github.com/hgielyah94/WeatherAppREACT-basic">View on GitHub</a></p>
    </div>
  );
}
