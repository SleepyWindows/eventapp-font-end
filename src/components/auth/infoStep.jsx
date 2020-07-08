import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Header, Form, Button, Message } from 'semantic-ui-react';

export default class infoStep extends Component {
    render() { 
        const options = [
            { key: 'a', text: 'Attendee', value: 'Attendee'},
            { key: 'o', text: 'Organizer', value: 'Organizer'}
        ]
        const { contact, age, supporter, role } = this.props.values
        return (
            <Grid className="auth-main" style={{height: '100vh'}}>
             <div className="auth-content">
                <div className="auth-card">
                    <Segment stacked>
                     <h2>Logo</h2>
                     <Header as="h2" color="black">
                         Personal Details
                     </Header>
                     <Form size="large" className="auth-form" autoComplete="off">
                        <label className="label-input" >Contact</label>
                        <Form.Input
                         fluid
                         icon="address book"
                         iconPosition="left"
                         name="contact"
                         placeholder="555-555-5555 or testing@test.com"
                         className="auth-input-field"
                         value={contact}
                         onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
                        />

                        <label className="label-input" >Age</label>
                        <Form.Input
                         fluid
                         icon="birthday cake"
                         iconPosition="left"
                         placeholder="Age"
                         type="number"
                         name="age"
                         value={age}
                         className="auth-input-field"
                         onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
                        />

                        <label className="label-input" >Supporter</label>
                        {this.props.orgs.map(org => (
                            <Form.Checkbox
                            key={org.id}
                            label={org.name}
                            className="auth-input-field"
                            name="supporter"
                            checked={supporter.includes(org.name)}
                            onChange={(event, data) => {this.props.handleChange(data.name, data.label)}}
                            />
                        ))}

                        <label className="label-input" >Role</label>
                        <Form.Select
                         fluid
                         options={options}
                         placeholder="Role"
                         name="role"
                         className="auth-input-field"
                         value={role}
                         onChange={(e, data) => this.props.handleChange(data.name, data.value)}
                        />
                        <Button onClick={this.props.prevStep} style={{background: "#FF6600", "marginTop": "20px"}} size="huge">
                            Previous
                        </Button>
                        <Button onClick={this.props.nextStep} style={{background: "#FF6600", "marginTop": "20px"}} size="huge">
                            Save and Continue
                        </Button>
        
                        <Message size="small">
                        <Link style={{color: '#FF6600'}} to="/login">Already Registered?</Link>
                        </Message>
                     </Form>
                    </Segment>
                 </div>
                 
                </div>  
            </Grid>
        );
    }
}