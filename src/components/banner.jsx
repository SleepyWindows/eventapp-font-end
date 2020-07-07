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
        <Container className="banner" style={{ objectFit: 'cover',  width:'100vw'}}>
            <Header  className='banner-title' as='h1' style={{position: 'absolute', transform: 'translate(0, 50px)', color: 'white', content: 'center',  width: '100%', fontSize: '100px'}}>{this.props.eventName}</Header> 
            <Image centered size='huge' src={'./seyedeh-hamideh-kazemi-PFUqfNsorJM-unsplash.jpg'} style={{ objectFit: 'cover', height: '200px', width: '100vw', transformOrigin: 'center' }}/>
        </Container> 
        )
    }
}
 
export default Banner;
