import React, {Component} from 'react';
import {Button, Header, Form, Modal, Icon } from 'semantic-ui-react';
import moment from 'moment'

class ModalForm extends Component {
    state = {
        modalOpen: false
    }
    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    handleClick = () => {
        let event = {title: this.props.title, category: this.props.category, address: this.props.address, date: this.props.date, description: this.props.description, image: this.props.image, stage: this.props.stage, public: this.props.public, organization_id: this.props.organization_id}
        this.props.condition === "Add" ? this.props.handleSubmit(event) : this.props.handleEdit({...event, id: this.props.id})
        this.handleClose()
    }
  
    render() {
        const options = [
            {key: 'c', text: "cancel", value: 'cancel'},
            {key: 'f', text: "future", value: 'future'},
            {key: 'pa', text: "past", value: 'past'},
            {key: 'pr', text: "present", value: 'present'}
        ]
        let options2 = []
        this.props.orgs.map(org => {
            let o = {key: org.id, text: org.name, value: org.id}
            options2.push(o)
        })
        return (
            <Modal
                trigger={<Button style={{background: "#86abba"}} size="small" onClick={this.handleOpen}>{this.props.condition === "Add" ? "Add" : "Edit"} Event</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='small'
            >
                <Header icon='edit' content={this.props.condition === "Add" ? "Add Event" : "Edit Event"} />
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
                        <input name="date" value={moment(this.props.date).format('YYYY-MM-DD')} type="date" onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}/>
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
                        checked={this.props.public}
                        name="public"
                        onChange={(e, data) => this.props.handleChange(data.name, data.checked)}
                    />
                     <Form.Select
                         label="Organization"
                         options={options2}
                         name="organization_id"
                         value={this.props.organization_id}
                         onChange={(e, data) => this.props.handleChange(data.name, data.value)}
                    />
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
 
export default ModalForm;

