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
        return (
            <div>
                <Banner />
                <EventDetail event={this.state.eventDetail} key={this.state.eventDetail.id}/>
                <EventTimeline />
                <ChatBot />
                <EventList events={this.props.events} changeEventDetail={this.changeEventDetail}/>
            </div>
        );
    }
}
 
export default ContentContainer;
