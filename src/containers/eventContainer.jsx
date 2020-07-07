import React, { Component } from 'react';
import { Grid, Card, Image, Icon, Button, Modal, Header, Form, Container} from 'semantic-ui-react'
import moment from 'moment'
import Map from '../components/map';
import { withRouter } from 'react-router-dom';



class EventContainer extends Component {
    state = { 
        event: this.props.eventDetail,
        modalOpen: false
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value})

    render() { 
        const {title, image, category, stage, date, address, description, id} = this.state.event
        const options = [
                {key: 'p', text: "cancel", value: 'cancel'},
                {key: 'p', text: "future", value: 'future'},
                {key: 'p', text: "past", value: 'past'},
                {key: 'p', text: "present", value: 'present'}
        ]
        return(
            <div style={{paddingTop: "35px"}}>
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