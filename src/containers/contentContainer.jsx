import React, { Component } from 'react';
import EventDetail from '../components/eventDetail';
import EventTimeline from '../components/eventTimeline';
import EventList from '../components/eventList'
import { Grid, Container, Icon, Dropdown } from 'semantic-ui-react'


class ContentContainer extends Component {
    state = { 
        eventDetail: this.props.event,
        searchTerm: ''
    }

    changeEventDetail = (newEvent) => {
        this.setState({
            eventDetail: newEvent
        })
    }

    searchEvents = () => {
        let e = [...this.props.filterEvents]
        if (this.state.searchTerm !== '') {
          e = e.filter(event => event.title.includes(this.state.searchTerm))
        }
        return e
      }
    
    render() { 
        const events = this.searchEvents()
        let options = []
        this.props.events.map(event => {
            let e = {key: event.id, text: event.category, value: event.category}
            options.push(e)
        })

        const distinctOptions = [{key: "Home", text: "Home", value: "Home"}];
        const map = new Map();
        for (const item of options) {
            if(!map.has(item.text)){
                map.set(item.text, true);    // set any value to Map
                distinctOptions.push({
                    key: item.id,
                    text: item.text,
                    value: item.value
                });
            }
        }

        return (
            <div>
                <Container style={{paddingTop: "30px"}} textAlign='center'>
                <strong>Sort by: </strong> 
                <label>
                <input type="radio" value="Alphabetically" checked={this.props.sort === "Alphabetically"} onChange={(e) => this.props.handleStateChange("sort", e.target.value)}/>
                Alphabetically
                </label>
                <label>
                <input type="radio" value="Date" checked={this.props.sort === "Date"} onChange={(e) => this.props.handleStateChange("sort", e.target.value)}/>
                Date
                </label>
                <br/>
                    <Icon name="filter"/>
                    Filter {' '}
                    <Dropdown
                    inline
                    header="Filter events"
                    options={distinctOptions}
                    value={this.props.filter}
                    style={{paddingTop: '5px', paddingBottom: '5px'}}
                    onChange={(e, data) => this.props.handleStateChange("filter", data.value)}
                    />
                <div style={{paddingBottom: "20px"}} className="ui search">
                    <div className="ui icon input">
                    <input className="prompt" value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})} />
                    <i className="search icon" />
                    </div>
                </div>
<<<<<<< Updated upstream
=======
                {this.props.user && this.props.user.role === "Attendee" ? <p onClick={(e) => console.log(e.target)}>Event not listed?</p> : null} 
>>>>>>> Stashed changes
                    <Grid>
                        <Grid.Column width={5}>
                        {this.state.eventDetail ? <EventDetail user={this.props.user} event={this.state.eventDetail} key={this.state.eventDetail.id} addEventToUser={this.props.addEventToUser} /> : null}
                        </Grid.Column>
                        <Grid.Column width={7}>
                        <EventList events={events} changeEventDetail={this.changeEventDetail}/>
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <EventTimeline />
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}
 
export default ContentContainer;
