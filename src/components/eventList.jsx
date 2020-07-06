import React, { Component } from 'react';
// import EventDetail from './eventDetail';

class EventList extends Component {
  // state = {  }

  render() { 
    console.log('Event List', this.props.events)
    return (
      <div>
        {this.props.events.map(event => 
          <div onClick={() => this.props.changeEventDetail(event)}>
            <h3>{event.title}</h3>
            <img src={event.image} alt='' height='100px' width='100px'/>
            <p>{event.description}</p>
          </div>
        )}
      </div>
    );
  }
}
 
export default EventList;
