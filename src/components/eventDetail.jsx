import React, { Component } from 'react';

class EventDetail extends Component {
    state = {  }
    render() { 
        console.log('Event Detail', this.props.event)
        return(
            <div>
                <h2>{this.props.event.title}</h2>
                <img src={this.props.event.image} />
                <h4>{this.props.event.category}</h4>
                <h4>{this.props.event.stage}</h4>
                <h4>{this.props.event.date}</h4>
                <h4>{this.props.event.address}</h4>
                <p>{this.props.event.description}</p>
            </div>)
    }
}
 
export default EventDetail;
