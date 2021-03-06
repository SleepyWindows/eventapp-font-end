import React, { Component } from 'react';
import { Item  } from 'semantic-ui-react';

class EventList extends Component {

  render() { 
    return (
  
      <div>
        {this.props.events.map(event => 
        <Item.Group postions='right'>
        <Item onClick={() => this.props.changeEventDetail(event)}>
          <Item.Image size='small' src={event.image} />
          <Item.Content>
            <Item.Header as='a'>{event.title}</Item.Header>
            <Item.Description>{event.description}</Item.Description>
          </Item.Content>
        </Item>
        </Item.Group>
        )}
      </div>
    );
  }
}
 
export default EventList;
