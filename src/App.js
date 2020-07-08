import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';
import Login from './components/auth/login.js';
import Signup from './components/auth/signup';
import Dashboard from './components/dash/dashboard'
import NavBar from './containers/navBar';
import About from './containers/about'
import Banner from './components/banner.jsx'
import ContentContainer from './containers/contentContainer';
import EventContainer from './containers/eventContainer'



const EVENT_URL = 'http://localhost:3000/events'
const ORG_URL = 'http://localhost:3000/organizations'
const TICKET_URL = 'http://localhost:3000/tickets'
const USER_URL = 'http://localhost:3000/users'

class App extends React.Component {
  state = { 
    events: [],
    eventDetail: null,
    eventName: 'ConnectUs',
    isLoading: true,
    organizations: [],
    sort: "",
    filter: "Home",
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

  fetchUser = () => {
    fetch(USER_URL + `/${this.state.user.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    })
    .then(res => res.json())
    .then(userInfo => {
      localStorage.setItem("user", JSON.stringify({username: userInfo.username, role: userInfo.role, events: userInfo.events, token: this.state.token, id: userInfo.id}))
      this.setState({
        user: JSON.parse(localStorage.getItem("user"))
      })
    })
  }

  addEventToUser = (eventId, userId) => {
    fetch(TICKET_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        Authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify({
        event_id: eventId,
        user_id: userId
      })
    })
      .then(res => res.json())
      .then(result => {
        this.fetchUser()
      })
  }

  deleteEvent = (eventId, history) => {
    // debugger
    fetch(EVENT_URL + `/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.state.token}`
      }
    })
    .then(() => {
      this.fetchEvents()
      this.fetchUser()
      history.push('/dashboard');
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
      if (this.state.filter !== "Home") {
        sorted = sorted.filter(event => event.category === this.state.filter)
      }
      switch (this.state.sort) {
        case "Alphabetically":
          return sorted = sorted.sort((a, b) => a.title.localeCompare(b.title))
        case "Date":
          return sorted = sorted.sort((a, b) => {return a.date - b.date})
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
        : <Router>
            <NavBar handleStateChange={this.handleStateChanges} />
            <Banner eventName={this.state.eventName}/>
            <Route exact path="/" component={() =>
              <ContentContainer 
                event={this.state.event} 
                events={this.state.events}
                filterEvents={events}  
                organizations={this.state.organizations} 
                addEventToUser={this.addEventToUser}
                handleSearch={this.handleSearch}
                sort={this.state.sort}
                filter={this.state.filter}
                user={this.state.user}
                handleStateChange={this.handleStateChanges}
                />} />
            <Route exact path="/home" component={() =>
              <ContentContainer 
                event={this.state.event} 
                events={this.state.events}
                filterEvents={events}  
                organizations={this.state.organizations} 
                addEventToUser={this.addEventToUser}
                handleSearch={this.handleSearch}
                sort={this.state.sort}
                filter={this.state.filter}
                user={this.state.user}
                handleStateChange={this.handleStateChanges}
                />} />
            <Route exact path="/login" component={() => 
              <Login 
                handleStateChange={this.handleStateChanges} />} />
            <Route exact path="/signup" component={() => 
              <Signup 
                orgs={this.state.organizations} />} />
            <Route exact path="/dashboard" component={() => this.state.token ? <Dashboard handleStateChange={this.handleStateChanges} orgs={this.state.organizations} user={this.state.user} eventDetail={this.state.eventDetail} /> : <Redirect to='/login'/>} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/event/:id" component={() => 
              <EventContainer 
                handleStateChange={this.handleStateChanges} 
                eventDetail={this.state.eventDetail} 
                user={this.state.user} 
                deleteEvent={this.deleteEvent}/>}/>
          </Router>
        }
      </div>
     );
  }
}
 
export default withRouter(App);
