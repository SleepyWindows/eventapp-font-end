import React, { Component } from 'react';
import {Image, Header, Table } from 'semantic-ui-react'
import moment from 'moment';
import ModalForm from './modalForm'
import { withRouter } from 'react-router-dom'

class Dashboard extends Component {
    state = {
        sort: '',
        userEvents: this.props.user.events,
        title: '',
        date: '',
        category: '',
        address: '',
        description: '',
        image: '',
        stage: '',
        public: null,
        organization_id: ''
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    eventList = () => {
        let sorted = [...this.state.userEvents]
        switch (this.state.sort) {
            case "Event":
              return sorted = sorted.sort((a, b) => a.title.localeCompare(b.title))
            case "Date":
              return sorted = sorted.sort((a, b) => {return a.date - b.date})
            case "Stage":
                return sorted = sorted.sort((a, b) => a.stage.localeCompare(b.stage))
            case "Category":
                return sorted = sorted.sort((a, b) => a.category.localeCompare(b.category))
            default: 
              return sorted
        }
    }

    handleSubmit = (event) => {
        this.props.createEvent(event)
        this.setState({
            sort: '',
            title: '',
            date: '',
            category: '',
            address: '',
            description: '',
            image: '',
            stage: '',
            public: null,
            organization_id: ''
        })
    }

    changeStateStuff = (event) => {
        // console.log("working")
        this.props.handleStateChange("eventDetail", event)
        {this.props.user.role === "Attendee" ? this.props.createRoom(event.id) : this.setState({chatRoom: {}})}
        this.props.history.push(`/event/${event.id}`)
    }
  render() { 
    const { role} = this.props.user
    let events = this.eventList()
    return (
    <div>
        <h1 style={{paddingTop: "15px"}}>Welcome to your dashboard</h1>

        <div style={{paddingTop: "50px", paddingLeft: "50px", paddingRight: "50px"}}>
        {role === "Organizer"          
        ? 
            <ModalForm condition={"Add"} orgs={this.props.orgs} handleChange={this.handleChange} title={this.state.title} organization_id={this.state.organization_id} date={this.state.date} category={this.state.category} address={this.state.address} description={this.state.description} image={this.state.image} stage={this.state.stage} public={this.state.public} handleSubmit={this.handleSubmit} />
        :
        null}
            <Table basic="very" structured sortable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell onClick={(e) => this.handleChange("sort", e.target.innerText)}>Event</Table.HeaderCell>
                        <Table.HeaderCell onClick={(e) => this.handleChange("sort", e.target.innerText)}>Date</Table.HeaderCell>
                        <Table.HeaderCell onClick={(e) => this.handleChange("sort", e.target.innerText)}>Stage</Table.HeaderCell>
                        <Table.HeaderCell onClick={(e) => this.handleChange("sort", e.target.innerText)}>Category</Table.HeaderCell>
                        {role === "Organizer"          
                        ?
                        <Table.HeaderCell onClick={(e) => this.handleChange("sort", e.target.innerText)}>Attending</Table.HeaderCell>
                        :
                        null}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {events.map(event => (
                    <Table.Row key={event.id} verticalAlign="top">
                    <a href="javascript:void(0)" onClick={() => this.changeStateStuff(event)}>
                        <Header style={{paddingTop: "10px"}} image>
                            <Image src={event.image}/>
                            <Header.Content>
                                {event.title}
                            <Header.Subheader>
                                {event.description}
                            </Header.Subheader>
                            </Header.Content>
                        </Header>
                    </a>
                        <Table.Cell>
                            {moment(event.date).format("dddd, MMMM D, YYYY")}
                        </Table.Cell>
                        <Table.Cell>
                            {event.stage}
                        </Table.Cell>
                        <Table.Cell>
                            {event.category}
                        </Table.Cell>
                        {role === "Organizer"          
                        ?
                        this.props.events.find(e => e.id === event.id) ? 
                           <Table.Cell>
                            {this.props.events.find(e => e.id === event.id).users.length}
                            </Table.Cell>
                            : null
                        
                        :
                        null}
                    </Table.Row>
                ))}
                </Table.Body>
            </Table>
        </div>
    </div>
    );
  }
}
 
export default withRouter(Dashboard);
