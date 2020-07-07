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
        category: '',
        address: '',
        description: '',
        image: '',
        stage: '',
        public: null
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

    changeStateStuff = (event) => {
        // console.log("working")
        this.props.handleStateChange("eventDetail", event)
        this.props.history.push(`/event/${event.id}`)
    }
  render() { 
    const { role} = this.props.user
    let events = this.eventList()
    return (
    <div>
        <h1 style={{paddingTop: "15px"}}>Welcome to your dashboard</h1>

        {role === "Attendee"          
        ? <div style={{paddingTop: "50px", paddingLeft: "50px", paddingRight: "50px"}}>
            <ModalForm handleChange={this.handleChange} title={this.state.title} category={this.state.category} address={this.state.address} description={this.state.description} image={this.state.image} stage={this.state.stage} public={this.state.public} />
            <Table basic="very" structured sortable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell onClick={(e) => this.handleChange("sort", e.target.value)}>Event</Table.HeaderCell>
                        <Table.HeaderCell onClick={(e) => this.handleChange("sort", e.target.value)}>Date</Table.HeaderCell>
                        <Table.HeaderCell onClick={(e) => this.handleChange("sort", e.target.value)}>Stage</Table.HeaderCell>
                        <Table.HeaderCell onClick={(e) => this.handleChange("sort", e.target.value)}>Category</Table.HeaderCell>
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
                    </Table.Row>
                ))}
                </Table.Body>
            </Table>
        </div>
        : events.map(event => (
            <div style={{paddingTop: "50px", paddingLeft: "50px", paddingRight: "50px"}}>
                <Table basic="very" structured sortable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell onClick={this.handleChange}>Event</Table.HeaderCell>
                            <Table.HeaderCell onClick={this.handleChange}>Date</Table.HeaderCell>
                            <Table.HeaderCell onClick={this.handleChange}>Stage</Table.HeaderCell>
                            <Table.HeaderCell onClick={this.handleChange}>Category</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {events.map(event => (
                        <Table.Row onClick={(e) => console.log(e)} key={event.id} verticalAlign="top">
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
                        </Table.Row>
                    ))}
                    </Table.Body>
                </Table>
            </div>
            ))
        }
    </div>
    );
  }
}
 
export default withRouter(Dashboard);
