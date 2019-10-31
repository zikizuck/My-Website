import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Menu from "./Header/Menu/Menu";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="section">
          <p>My Website <br/> on React</p>

      </section>

      <Sidebar/>
      <Footer/>

    </div>
  );
}

export default App;
