import React from 'react';
import{ Header, Container } from 'semantic-ui-react'

const About = () => {
    return (
        <Container text>
            <br/><br/>
            <Header as='h1'>Event App</Header>
            <p>EventApp is focused on being a single source of information from large group events. This will allow organizers and those that they designate as ‘leads’ or helpers to better direct attendees with event based needs. Those needs may include direction to hydration stations, bathrooms, medical stations and other extraneous issues. The application will serve as a mode of communication between organizers and leads but also allow for mass communication regarding any changes or adjustments to events.</p>
        </Container>
    );
}
 
export default About;
