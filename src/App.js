import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './containers/navBar';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Dashboard from './components/dashboard'
import EventList from './components/eventList';

class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <Router>
          <NavBar/>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/eventlist" component={EventList}/>
        </Router>
      </div>
     );
  }
}
 
export default App;
