import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Login from './components/auth/login.js';
import Signup from './components/auth/signup';
import Dashboard from './components/dash/dashboard'
import NavBar from './containers/navBar';
import About from './containers/about'
import Banner from './components/banner.jsx'
import ContentContainer from './containers/contentContainer';
import EventContainer from './containers/eventContainer';
import UserProfile from './components/userprofile'



const EVENT_URL = 'http://localhost:3000/events'
const ORG_URL = 'http://localhost:3000/organizations'
const TICKET_URL = 'http://localhost:3000/tickets'
const USER_URL = 'http://localhost:3000/users'
const ANNOUNCEMENT_URL = 'http://localhost:3000/announcements'

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

  fetchUser = () => {
    fetch(USER_URL + `/${this.state.user.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    })
    .then(res => res.json())
    .then(userInfo => {
      localStorage.setItem("user", JSON.stringify({...userInfo, token: this.state.token}))
      this.setState({
        user: JSON.parse(localStorage.getItem("user"))
      })
    })
  }

  createEvent = (event) => {
    fetch(EVENT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        Authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify({
        event
      })
    })
      .then(res => res.json())
      .then(result => {
        this.addEventToUser(result.event.id, this.state.user.id)
        this.fetchEvents()
      })
  }

  editEvent = (event) => {
    // console.log(event)
    fetch(EVENT_URL + `/${event.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        Authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify({
        event
      })
    })
      .then(res => res.json())
      .then(result => {
        this.fetchEvents()
        this.fetchUser()
        this.setState({
          eventDetail: result
        })
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

  addEventToUser = (event_id, user_id) => {
    fetch(TICKET_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        Authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify({
        event_id,
        user_id
      })
    })
      .then(res => res.json())
      .then(result => {
        this.fetchUser()
      })
  }

  editUserInfo = (user, id) => {
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json",
            Authorization: `Bearer ${this.state.token}`
        },
        body: JSON.stringify({
          username: user.username,
          contact: user.contact,
          supporter: user.supporter,
          age: user.age,
          supporter: user.supporter
        })
    }
    fetch(`http://localhost:3000/users/${id}`, options)
        .then(res => res.json())
        .then(userInfo => {
            this.fetchUser()
        })
  }

  createAnnouncement = (announcement) => {
    fetch(ANNOUNCEMENT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        Authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify({
        announcement
      })
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        // this.fetchEvents()
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
            <Route exact path="/dashboard" component={() => 
              this.state.token ? 
              <Dashboard 
                handleStateChange={this.handleStateChanges} 
                events={this.state.events} 
                orgs={this.state.organizations} 
                user={this.state.user} 
                eventDetail={this.state.eventDetail} 
                createEvent={this.createEvent} 
              /> : <Redirect to='/login'/>} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/event/:id" component={() => 
            <EventContainer 
              events={this.state.events}  
              createAnnouncement={this.createAnnouncement} 
              editEvent={this.editEvent} 
              handleStateChange={this.handleStateChanges} 
              eventDetail={this.state.eventDetail} 
              user={this.state.user} 
              orgs={this.state.organizations} 
              deleteEvent={this.deleteEvent}
            />}/>
            <Route exact path="/profile" component={() => 
            this.state.token ? 
            <UserProfile 
              addEventToUser={this.addEventToUser} 
              editUserInfo={this.editUserInfo} 
              user={this.state.user} 
              orgs={this.state.organizations} 
            /> : <Redirect to='/login'/>}/>
          </Router>
        }
      </div>
     );
  }
}
 
export default App;
