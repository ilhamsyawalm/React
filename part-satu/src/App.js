import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/mybutton.css";
import "./components/navbar.css";
import Button from "./components/myButton";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  const nama = "Ilham Syawal M";

  const klik = () => {
    return alert(`Tombol di teken oleh ${nama}`);
  };

  const [awal, akhir] = useState("");

  const rubahNav = () => {
    akhir("Zhephyr");
  };

  const paragraf = () => {
    return (
      <div>
        <h3>Mantap gan</h3>
        <i>Anjas kelas</i>
        <marquee>Dibuat oleh {nama}</marquee>
      </div>
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <Navbar navValue={awal}></Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          coba <code>src/App.js</code> lagi dan lagi.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button tes={klik}></Button>
        <Footer isi={paragraf}></Footer>
        <button onClick={() => rubahNav()}>Coba klik</button>
      </header>
    </div>
  );
};

export default App;
