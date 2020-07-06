import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/auth/login.js';
import Signup from './components/auth/signup';
import Dashboard from './components/dashboard'
import NavBar from './containers/navBar';
import Content from './containers/contentContainer';
import EventList from './components/eventList';


class App extends React.Component {
  state = {
    orgs: [],
    events: [],
    sort: "",
    token: "",
    user: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/organizations', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(result => this.setState({orgs: result}))
    fetch('http://localhost:3000/events', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(result => this.setState({events: result}))
  }

  handleSort = (data) => {
    this.setState({
      sort: data
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
        <Router>
          <NavBar/>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={() => <Signup orgs={this.state.orgs} />} />
          <Route exact path="/dashboard" component={() => <Dashboard orgs={this.state.orgs} events={events} handleSort={this.handleSort} sort={this.state.sort} />} />
          <Route exact path="/eventlist" component={EventList}/>
        </Router>
      </div>
     );
  }
}
 
export default App;