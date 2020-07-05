import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './containers/navBar';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Dashboard from './components/dashboard'
import EventList from './components/eventList';
import ContentContainer from './containers/contentContainer';

const EVENT_URL = () => {
  return 'http://localhost:3000/events'
}

const ORG_URL = () => {
  return 'http://localhost:3000/organizations'
}

class App extends React.Component {
  state = { 
    events: [],
    searchTerm: '',
    eventDetail: null,
    isLoading: true,
    organizations: []
  }

  componentDidMount() {
    this.fetchEvents()
    this.fetchOrganization()
  }

  fetchEvents = () => {
    fetch(EVENT_URL)
    .then(res => res.json())
    .then(events => {console.log("Fetch Evetns", events)
    })
  }

  fetchOrganization = () => {
    fetch(ORG_URL)
    .then(res => res.json())
    .then(orgs => {console.log("Fetch Organizations", orgs)
    })
  }


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
        <ContentContainer />
      </div>
     );
  }
}
 
export default App;
