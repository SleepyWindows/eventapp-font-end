import React, { Component } from 'react';
import{
    Container,
    Image,
    Header
} from 'semantic-ui-react'
// this will be seen from both sides as an organizer and an attendee. Issue with getting the text to position in true center of image as well as having the image use 100vw without going beyond expect height.
class Banner extends Component {
    state = {  }
    render() { 
        return ( 
        <Container fluid size='tiny'>
            {/* image may need to be passed as a prop to allow conditional rendering. If no photo is chosen then default photo will be used instead with event name listed at image center. */}
            <Image centered size='huge' src={'./seyedeh-hamideh-kazemi-PFUqfNsorJM-unsplash.jpg'}/>
            <Header  as='h1'>{this.props.name}</Header>
        </Container> 
        )
    }
}
 
export default Banner;