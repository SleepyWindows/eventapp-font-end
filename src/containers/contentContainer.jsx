import React, { Component } from 'react';
import Banner from '../components/banner'
import EventDetail from '../components/eventDetail';
import EventTimeline from '../components/eventTimeline';
import ChatBot from '../components/chatBot'
import EventList from '../components/eventList'
import { Grid, Image } from 'semantic-ui-react'


class ContentContainer extends Component {
    state = { 
        eventDetail: this.props.event
    }

    changeEventDetail = (newEvent) => {
        this.setState({
            eventDetail: newEvent
        })
    }
    
    render() { 

        return (
            <div>
                <Banner />
                <Grid>
                    <Grid.Column width={5}>
                    <EventDetail event={this.state.eventDetail} key={this.state.eventDetail.id} />
                    </Grid.Column>
                    <Grid.Column width={7}>
                    <EventList events={this.props.events} changeEventDetail={this.changeEventDetail}/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                    <EventTimeline />
                    <ChatBot />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
 
export default ContentContainer;
