import React, { Component } from 'react';
// import EventDetail from './eventDetail';

class EventList extends Component {
  // state = {  }

  render() { 
    console.log('Event List', this.props.events)
    return (
      // <div>
      //   {this.props.Events.map(event => {
      //     <div>
      //       <EventDetail event={event} key={event.id}/>
      //       <div onClick={() => this.props.changeEventDetail(this.props.event)}>
      //         <h3>{this.props.event.title}</h3>
      //         <img src={this.props.event.image} />
      //         <p>{this.props.event.description}</p>
      //       </div>
      //     </div>
      //   })}
      // </div>
      <h1>EventList</h1>
    );
  }
}
 
export default EventList;
