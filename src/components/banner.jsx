import React, { Component } from 'react';
import{
    Container,
    Image,
    Header
} from 'semantic-ui-react'

class Banner extends Component {
    state = {  }
    render() { 
        return ( 
        <Container className="banner" style={{ objectFit: 'cover',  width:'100vw'}}>
            <Image centered src={'./Websiteresources-02.png'} style={{position: 'absolute', height: '400px', zIndex:'2', left: '50%', height: '180px', width: '275px', transform: 'translate(-110px, 10px)'}}/>
            {/* <Header  className='banner-title' as='h1' style={{position: 'absolute', transform: 'translate(0, 50px)', color: 'white', content: 'center',  width: '100%', fontSize: '100px', zIndex: '2'}}>ConnectUs</Header>  */}
            <Image size='huge' src={'./UpATDawn.jpg'} style={{ objectFit: 'cover', height: '200px', width: '100vw' }}/>
        </Container> 
        )
    }
}
 
export default Banner;
