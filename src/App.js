import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Menu from "./Header/Menu/Menu";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import UserMenu from "./Header/UserMenu/UserMenu";
import Counter from "./Counter";
import Copier from "./Copier";
import Expand from "./Expand";
import Toggle from "./Toggle";
import HomePage from "./HomePage/HomePage";
import Posts from "./Posts/Posts";

function App() {
  return (
    <div className="App">
      <Header/>

      <section className="section">
          <Posts/>

      </section>

      <Sidebar/>
      <Footer/>

    </div>
  );
}

export default App;
