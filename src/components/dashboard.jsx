import React, { Component } from 'react';
import { Card, Image, Button, Header, Icon, Dropdown } from 'semantic-ui-react'
import moment from 'moment'
import './auth/auth.css'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() { 
    const options = [
      { key: 'c', text: 'category', value: 'category'},
      { key: 'd', text: 'date', value: 'date'},
      { key: 'a', text: 'alphabetically', value: 'alphabetically'}
    ]
    return (
      localStorage.token ? 
      <div>
        <h1>Welcome to your dashboard</h1>
        <Header as="h4">
          <Icon name="filter"/>
          <Header.Content>
            Filter {' '}
          <Dropdown
            inline
            header="Filter events"
            options={options}
            value={this.props.sort}
            onChange={(e, data) => this.props.handleSort(data.value)}
          />
          </Header.Content>
        </Header>
        <div className="ui grid container" style={{paddingTop: "50px"}}>
        <div className="ui four wide column">
        {this.props.events.map(event => (
          <Card key={event.id}>
            <Image src={event.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{event.title}</Card.Header>
              <Card.Meta>
                <span className='category'>{event.category}</span>
              </Card.Meta>
              <Card.Description>
                {moment(event.date).format("dddd, MMMM D, YYYY" )}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button content="Follow Event" size="large" style={{background: "#FF6600"}}/>
            </Card.Content>
          </Card>
        ))}
        </div>
        </div>
      </div> 
       : <Redirect to='/login'/>
    );
  }
}
 
export default Dashboard;

