import React, { Component } from 'react';
import Banner from '../components/banner'
import EventDetail from '../components/eventDetail';
import EventTimeline from '../components/eventTimeline';
import ChatBot from '../components/chatBot'
import EventList from '../components/eventList'

class ContentContainer extends Component {
    state = { 
        eventDetail: this.props.event
    }

    changeEventDetail = (newEvent) => {
        // this.setState({
        //     eventDetail: newEvent
        // }, () => this.props.fetchEvents())
        console.log("NewEvent Detail")
    }
    


    render() { 
        console.log("ContentContainer Event", this.props.events)
        console.log("ContentContainer Orgs", this.props.organizations)
        return (
            <div>
                <Banner />
                <EventDetail event={this.props.events[0]} key={this.props.events[0].id}/>
                <EventTimeline />
                <ChatBot />
                <EventList events={this.props.events} changeEventDetail={this.changeEventDetail}/>
            </div>
        );
    }
}
 
export default ContentContainer;
