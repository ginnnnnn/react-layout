import React, { Component } from 'react';
import './App.css';
import File2 from './img/files_2.png';
import Storage2 from './img/data_storage_2_2.png';
import Analytics2 from './img/desktop_analytics_2.png';
import Coding2 from './img/monitor_coding_2.png';
import Setting2 from './img/monitor_settings_2.png';
import Server2 from './img/server_2_2.png';
import Server3 from './img/server_3.png';
import SafeFile from './img/server_safe_2.png';
import Undraw from './img/undraw.png';


class App extends Component {
  render() {
    return (
        <div>
        <nav className="zone blue sticky">
        <ul className="main-nav">
          <li>  <a href="**">About</a></li>
          <li><a href="**">Product</a></li>
          <li><a href="**">Our Team</a></li>
          <li className="push"><a href="**">Contacts</a></li>
        </ul>
        </nav>

        <div className="zone container">
        <img className="cover" src={Undraw} alt=""/>
        </div>

        <div className="zone blue grid-wrapper">
        <div className="box zone">
        <img src={File2} alt="" />
        </div>
        <div className="box zone">
        <img src={Storage2} alt="" />
        </div>
        <div className="box zone">
        <img src={Analytics2} alt="" />
        </div>
        <div className="box zone">
        <img src={Coding2} alt="" />
        </div>
        <div className="box zone">
        <img src={Setting2} alt="" />
        </div>
        <div className="box zone">
        <img src={Server2} alt="" />
        </div>
        <div className="box zone">
        <img src={Server3} alt="" />
        </div>
        <div className="box zone">
        <img src={SafeFile} alt="" />
        </div>
        </div>

        <footer className="zone yellow">Footer</footer>
      </div>
    );
  }
}

export default App;
