import React, { Component } from 'react';
import Banner from '../components/banner'
import EventDetail from '../components/eventDetail';
import EventTimeline from '../components/eventTimeline';
import ChatBot from '../components/chatBot'
import EventList from '../components/eventList'

class ContentContainer extends Component {
    // state = { 
    //     events: this.props.events
    //  }
    changeEventDetail = () => {
        console.log("Change Event Detail")
      }
    

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
