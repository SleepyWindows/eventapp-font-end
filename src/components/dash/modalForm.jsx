import React, {Component} from 'react';
import {Button, Header, Form, Modal, Icon } from 'semantic-ui-react'

class ModalForm extends Component {
    state = {
        modalOpen: false
    }
    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })
  
    render() {
        const options = [
            {key: 'p', text: "cancel", value: 'cancel'},
            {key: 'p', text: "future", value: 'future'},
            {key: 'p', text: "past", value: 'past'},
            {key: 'p', text: "present", value: 'present'}
        ]
        return (
            <Modal
                trigger={<Button style={{background: "#86abba"}} size="small" onClick={this.handleOpen}>Add Event</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='small'
            >
                <Header icon='edit' content='Edit Event' />
                <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>Title</label>
                        <input value={this.props.title} name="title" onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Category</label>
                        <input value={this.props.category} name="category" onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Date</label>
                        <input name="date" value={this.props.date} type="date" onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Address</label>
                        <input name="address" value={this.props.address} onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input name="description" value={this.props.description} onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Image</label>
                        <input name="image" value={this.props.image} onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}/>
                    </Form.Field>
                    <Form.Select
                        label="Stage"
                        options={options}
                        value={this.props.stage}
                        name="stage"
                        onChange={(e, data) => this.props.handleChange(data.name, data.value)}
                    />
                    <Form.Checkbox
                        label="Public"
                        value={this.props.public}
                        name="public"
                        onChange={(e, data) => this.props.handleChange(data.name, data.checked)}
                    />
                </Form>
                </Modal.Content>
                <Modal.Actions>
                <Button color='green' onClick={this.handleClose} inverted>
                    <Icon name='checkmark' /> Submit
                </Button>
                </Modal.Actions>
            </Modal>
        );
    }
  }
 
export default ModalForm;

