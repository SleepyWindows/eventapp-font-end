import React from 'react';
import{ Header, Container, Image, Reveal, Grid, Popup } from 'semantic-ui-react'

const About = () => {
    return (
        <Container text>
            <br/><br/>
            <Header as='h1'>ConnectUs</Header>
            <Header as='h3'>Our Mission</Header>
            <p style={{textAlign: 'justify'}}>EventApp is focused on being a single source of information from large group events. This will allow organizers and those that they designate as ‘leads’ or helpers to better direct attendees with event based needs. Those needs may include direction to hydration stations, bathrooms, medical stations and other extraneous issues. The application will serve as a mode of communication between organizers and leads but also allow for mass communication regarding any changes or adjustments to events.</p>
            <br></br>
            <br></br>
            <Grid columns={3}>
            <Grid.Row>
                <Grid.Column>
                
                <Reveal animated="small fade" style={{height: '200px', width: '200px'}}>
                        <Reveal.Content hidden >
                            <Image class='hidden content' circular src='../Esther.png'style={{height: '150px'}} />
                        </Reveal.Content>
                        <Reveal.Content visible >
                            <Popup content='Warm and kind hearted - Esther is always working to ensure she does the best she can at everything she is a part of. Find her at her desk because she is always doing her part! ' trigger={ 
                                <h3 style={{position: 'absolute', zIndex: '2', transform: 'translate(38px, 55px)', color: 'white', fontSize: '30px'}}>Esther</h3>} /> 
                            <Image class='visible content' src='../seyedeh-hamideh-kazemi-PFUqfNsorJM-unsplash.jpg' circular style={{width: '150px', height: '150px'}}/>
                        </Reveal.Content>
                </Reveal>
                </Grid.Column>
                <Grid.Column>
                    <Reveal animated="small fade" style={{height: '200px', width: '200px'}}>
                        <Reveal.Content hidden>
                            <Image class='hidden content' circular src='../Lauren.png'style={{height: '150px'}}/>
                        </Reveal.Content>
                        <Reveal.Content visible>
                        <Popup content='Where innovation and confidence meet - Lauren makes things happen in all the work she does. She works hard to make sure the team is always where it needs to be. Find her at the bottom of a bag of chips.' trigger={
                            <h3 style={{position: 'absolute', zIndex: '2', transform: 'translate(33px, 55px)', color: 'white', fontSize: '30px'}}>Lauren</h3>
                        } /> 
                            <Image class='visible content' src='../Sparkle.jpg' circular style={{width: '150px', height: '150px'}}/>
                        </Reveal.Content>
                    </Reveal>
                </Grid.Column>
                <Grid.Column>
                    <Reveal animated="small fade" style={{height: '200px', width: '200px'}}>
                        <Reveal.Content hidden>
                            <Image class='hidden content' circular src='../Edwin.png'style={{height: '150px'}}/>
                        </Reveal.Content>
                        <Reveal.Content visible>
                        <Popup content="Resident trash panda and sandwhich enthusiast - Edwin always tries to work hard but sometimes falls short. Never presses the stop button on an idea and is always down for more than he can chew. Find him stressing over a website's look and feel..." trigger={
                            <h3 style={{position: 'absolute', zIndex: '2', transform: 'translate(38px, 55px)', color: 'white', fontSize: '30px'}}>Edwin</h3>
                        }/>
                            <Image class='visible content' src='../Confetti.jpg' circular style={{width: '150px', height: '150px'}}/>
                        </Reveal.Content>
                    </Reveal>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </Container>
    );
}
 
export default About;
