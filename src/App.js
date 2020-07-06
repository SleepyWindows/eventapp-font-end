import React from 'react';
import './App.css';
import Banner from './components/banner.jsx'
import NavBar from './containers/navBar.jsx'
import About from './containers/about.jsx'

function App() {
  return (
    <div className="App">
      <NavBar name='App Name' avi='{./public/logo512.png}'/>
      <Banner name='App Name'/>
      <About/>
    </div>
  );
}

export default App;
