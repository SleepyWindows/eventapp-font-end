import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Login from './components/auth/login.js';
import Signup from './components/auth/signup';
import Dashboard from './components/dashboard'
import NavBar from './containers/navBar';
import About from './containers/about'
import ContentContainer from './containers/contentContainer';
const EVENT_URL = 'http://localhost:3000/events'
const ORG_URL = 'http://localhost:3000/organizations'

class App extends React.Component {
  state = { 
    events: [],
    searchTerm: '',
    eventDetail: null,
    isLoading: true,
    organizations: [],
    sort: "",
    token: localStorage.token,
    user: JSON.parse(localStorage.getItem("user"))
  }

  componentDidMount() {
    this.fetchEvents()
    this.fetchOrganization()
  }

  fetchEvents = () => {
    fetch(EVENT_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    })
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
    fetch(ORG_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    })
    .then(res => res.json())
    .then(orgs => {
      this.setState({
        organizations: orgs,
        isLoading: false
      })
    })
  }

  handleStateChanges = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  
  eventList = () => {
    // console.log(this.state.events.error == "Please Login")
    if (this.state.events.error === "Please Login") {
      return null
    } else {
      let sorted = [...this.state.events].filter(event => event.public === true)
      switch (this.state.sort) {
        case "alphabetically":
          return sorted = sorted.sort((a, b) => {if(a.title < b.title) {return -1} else if (a.title > b.title) {return 1} else {return 0}})
        case "date":
          return sorted = sorted.sort((a, b) => {return a.date - b.date})
        case "category":
          return sorted = sorted.sort((a, b) => {if(a.category < b.category) {return -1} else if (a.category > b.category) {return 1} else {return 0}})
        default: 
          return sorted
      }
    }
  }

  render() { 
    const events = this.eventList()
    return ( 
      <div className="App">
        {this.state.isLoading
        ? <h4> Loading... </h4>
        :
        <Router>
          <NavBar handleStateChange={this.handleStateChanges} />
          <Route exact path="/home" component={() => <ContentContainer event={this.state.event} events={this.state.events} organizations={this.state.organizations} fetchEvents={this.fetchEvents}/>} />
          <Route exact path="/login" component={() => <Login handleStateChange={this.handleStateChanges} />} />
          <Route exact path="/signup" component={() => <Signup orgs={this.state.organizations} />} />
          <Route exact path="/dashboard" component={() => this.state.token ? <Dashboard orgs={this.state.organizations} events={events} handleStateChange={this.handleStateChanges} sort={this.state.sort} user={this.state.user} /> : <Redirect to='/login'/>} />
          <Route exact path="/about" component={About}/>
        </Router>
        }
      </div>
     );
  }
}
 
export default App;
