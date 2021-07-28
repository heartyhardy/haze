import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MusicListItem from "./components/music/music_list_item/MusicListItem";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="temp"><p>{!data ? "Loading..." : data}</p></div>
      <MusicListItem playing={false} song={"TSFH - Love and Loss"}/>
      <MusicListItem playing={true} song={"TSFH  -  Victory"}/>
      <MusicListItem playing={false} song={"TSFH - Atlantis"}/>
      <MusicListItem playing={false} song={"TSFH - Impossible"}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
