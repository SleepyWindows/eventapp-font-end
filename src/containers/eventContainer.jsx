import React, { Component } from 'react';
import { Card, Image, Icon, Button, Comment, Header} from 'semantic-ui-react'
import moment from 'moment'
import Map from '../components/map';
import ModalForm from '../components/dash/modalForm';
import AnnounceFrom from '../components/announceForm'
import { Grid, Card, Image, Icon, Button, Modal, Header, Form, Container} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';



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
                <Button onClick={() => this.props.editEvent(id)} content="Delete Event" size="small" style={{background: "#86abba"}}/>
                <AnnounceFrom eventId={id} handleChange={this.handleChange} createAnnouncement={this.props.createAnnouncement} />           
                </Card.Content> : null }             
            </Card> 
            
            {/* <Map /> */}
            <Comment.Group>
                <Header icon="announcement" as='h3'>Announcements</Header>
                {console.log(announcements)}
                {announcements.map(announce => {
                    return <Comment>
                        <Comment.Avatar style={{marginLeft: "50px"}} src={<Icon name="user"/>}/>
                        <Comment.Content style={{marginRight: "400px"}}>
                           {announce.message}
                        </Comment.Content>
                    </Comment>
                })}
            </Comment.Group>
            <Container style={{paddingTop: "30px"}} textAlign='center'>
            <Grid>
            <Grid.Row>
                <Grid.Column width={7}>
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
                    {/* {this.props.user ? <Card.Content extra>
                    <Button onClick={() => this.props.addEventToUser(event.id, id)} content="Follow Event" size="large" style={{background: "#FF6600"}}/>
                    </Card.Content> : null
                    }  */}
                    {this.props.user.role === "Attendee" ? 
                    <Card.Content extra>
                    <Modal
                            trigger={<Button style={{background: "#86abba"}} size="small" onClick={this.handleOpen}>Edit</Button>}
                            open={this.state.modalOpen}
                            onClose={this.handleClose}
                            basic
                            size='small'
                        >
                        <Header icon='edit' content='Edit Event' />
                        <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Title</label>
                                <input value={title} name="title" onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Category</label>
                                <input value={category} name="category"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Date</label>
                                <input name="date" value={moment(date).format("MM/DD/YYYY")}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Address</label>
                                <input name="address" value={address}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Image</label>
                                <input name="image" value={image}/>
                            </Form.Field>
                            <Form.Select
                                label="Stage"
                                options={options}
                                value={stage}
                                name="stage"
                            />
                        </Form>
                        </Modal.Content>
                        <Modal.Actions>
                        <Button color='green' onClick={this.handleClose} inverted>
                            <Icon name='checkmark' /> Submit
                        </Button>
                        </Modal.Actions>
                    </Modal>
                        {/* <Button onClick={() => this.props.editEvent(id)} content="Edit Event" size="small" style={{background: "#86abba"}}/> */}
                        <Button onClick={() => this.props.deleteEvent(id, this.props.history)} content="Delete Event" size="small" style={{background: "#86abba"}}/>
                    </Card.Content> : null }             
                    </Card> 
                </Grid.Column>
                <Grid.Column width={9}>
                    <Map />
                </Grid.Column>
            </Grid.Row>
            </Grid>
            </Container>
            </div>
        )
    }
}
 
export default withRouter(EventContainer);