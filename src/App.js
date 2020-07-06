import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import NavBar from './containers/navBar';
// import Login from './components/auth/login';
// import Signup from './components/auth/signup';
// import Dashboard from './components/dashboard'
// import EventList from './components/eventList';
import ContentContainer from './containers/contentContainer';

const EVENT_URL = 'http://localhost:3000/events'
const ORG_URL = 'http://localhost:3000/organizations'

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
    .then(events => {
      this.setState({
        events: events,
        event: events[0],
        isLoading: false
      })
    })
  }

  fetchOrganization = () => {
    fetch(ORG_URL)
    .then(res => res.json())
    .then(orgs => {
      this.setState({
        organizations: orgs,
        isLoading: false
      })
    })
  }


  render() { 
    return ( 
      <div className="App">
        {/* <Router>
          <NavBar/>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/eventlist" component={EventList}/>
          <Route exact path="/about" component={About}/>
        </Router> */}
        {this.state.isLoading
        ? <h4> Loading... </h4>
        :
        <div>
          <ContentContainer 
            event={this.state.event} 
            events={this.state.events} 
            organizations={this.state.organizations}
            fetchEvents={this.fetchEvents}/>
        </div>
        }
      </div>
     );
  }
}
 
export default App;
