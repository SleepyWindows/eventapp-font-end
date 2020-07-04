import React from 'react';
import './App.css';
import NavBar from './containers/navBar';
import Content from './containers/contentContainer'

class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <NavBar/>
        <Content/>
      </div>
     );
  }
}
 
export default App;