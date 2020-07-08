import React, { Component } from 'react';
import { Grid, Card, Image, Icon, Button, Header, Container, Comment } from 'semantic-ui-react'
import moment from 'moment'
import Map from '../components/map';
import ModalForm from '../components/dash/modalForm';
import AnnounceFrom from '../components/announceForm'
import { withRouter } from 'react-router-dom';
import QRCode from '../components/qrCode'



class EventContainer extends Component {
    state = { 
        event: this.props.eventDetail,
        title: this.props.eventDetail.title, 
        image: this.props.eventDetail.image, 
        category: this.props.eventDetail.category, 
        stage: this.props.eventDetail.stage, 
        date: this.props.eventDetail.date, 
        address: this.props.eventDetail.address, 
        description: this.props.eventDetail.description, 
        id: this.props.eventDetail.id, 
        organization_id: this.props.eventDetail.organization_id,
        public: this.props.eventDetail.public
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    handleEdit = (event) => {
        this.props.editEvent(event)
    }

    render() { 
        const event = this.props.events.find(e => e.id === this.props.eventDetail.id)
        const {title, image, category, stage, date, address, description, id, announcements} = event
        return(
            <div style={{paddingTop: "35px"}}>
            <Container style={{paddingTop: "30px"}} textAlign='center'>
            <Grid>
            <Grid.Row>
                <Grid.Column width={5}>
                    <Card key={id}>
                        <Image src={image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{title}</Card.Header>
                            <Card.Meta>
                                <span className='category'>{category}</span>
                            </Card.Meta>
                            <Card.Description>
                                {stage}
                            </Card.Description>
                            <Card.Description>
                                {address}
                            </Card.Description>
                            <Card.Description>
                                {description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Icon name='calendar alternate outline' />
                            {moment(date).format("dddd, MMMM D, YYYY" )}
                        </Card.Content>
                        {this.props.user.role === "Organizer" ? 
                        <Card.Content extra>
                        <ModalForm condition={"Edit"} orgs={this.props.orgs} handleChange={this.handleChange} title={this.state.title} organization_id={this.state.organization_id} date={this.state.date} category={this.state.category} address={this.state.address} description={this.state.description} image={this.state.image} stage={this.state.stage} id={this.state.id} public={this.state.public} handleEdit={this.handleEdit} />
                        <Button onClick={() => this.props.deleteEvent(id, this.props.history)} content="Delete Event" size="small" style={{background: "#FE8E36"}}/>
                        <AnnounceFrom eventId={id} handleChange={this.handleChange} createAnnouncement={this.props.createAnnouncement} />           
                        </Card.Content> : null } 
                    </Card> 
                </Grid.Column>
                {this.props.user.role ==='Organizer'
                ? <Grid.Column width={4}>
                    <h3>Share this for a quick follow</h3>
                    <QRCode url={`localhost:3001/${this.state.id}`}/>
                </Grid.Column>
                : null}
                <Grid.Column width={7}>
                    <Map />
                </Grid.Column>
            </Grid.Row>
            <Comment.Group>
                <Header icon="announcement" as='h3'>Announcements</Header>
                {console.log(announcements)}
                {announcements.map(announce => {
                    return <Comment>
                        <Comment.Avatar src={<Icon name="user"/>}/>
                        <Comment.Content style={{marginRight: "400px"}}>
                           {announce.message}
                        </Comment.Content>
                    </Comment>
                })}
            </Comment.Group>
            </Grid>
            </Container>
            </div>
        )
    }
}
 
export default withRouter(EventContainer);