import React, {Component} from 'react';
import {Button, Header, Form, Modal, Icon } from 'semantic-ui-react';

class AnnounceForm extends Component {
    state = {
        modalOpen: false,
        message: ''
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    handleClick = () => {
        let announcement = {event_id: this.props.eventId, message: this.state.message}
        this.props.createAnnouncement(announcement)
        this.handleClose()
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }
  
    render() {
        return (
            <Modal
                trigger={<Button style={{background: "#86abba", marginTop: "5px"}} size="small" onClick={this.handleOpen}>Add Announcement</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='small'
            >
            <Header icon='announcement' content='Add Announcement' />
            <Modal.Content>
            <Form>
                <Form.Field>
                    <label>Message</label>
                    <input value={this.props.message} name="message" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                </Form.Field>
            </Form>
            </Modal.Content>
            <Modal.Actions>
            <Button color='green' onClick={this.handleClick} inverted>
                <Icon name='checkmark' /> Submit
            </Button>
            </Modal.Actions>
        </Modal>
        );
    }
  }
 
export default AnnounceForm;

