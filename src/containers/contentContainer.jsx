import React, { Component } from 'react';
import Banner from '../components/banner'
import EventDetail from '../components/eventDetail';
import EventTimeline from '../components/eventTimeline';
import ChatBot from '../components/chatBot'
import EventDetail from '../components/eventList'

class ContentContainer extends Component {
    state = {  }
    render() { 
        console.log("ContentContainer", this.props)
        return (
            <div>
                <Banner />
                <EventDetail />
                <EventTimeline />
                <ChatBot />
                <EventList />
            </div>
        );
    }
}
 
export default ContentContainer;
