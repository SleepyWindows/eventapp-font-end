import React, { Component } from 'react';

class EventDetail extends Component {
    state = { 
        event: this.props.event
     }
    render() { 
        const {title, image, category, stage, date, address, description} = this.props.event
        return(
            <div>
                <h2>{title}</h2>
                <img src={image} alt=''/>
                <h4>{category}</h4>
                <h4>{stage}</h4>
                <h4>{date}</h4>
                <h4>{address}</h4>
                <p>{description}</p>
            </div>)
    }
}
 
export default EventDetail;
