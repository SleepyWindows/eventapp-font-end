import React, { Component } from 'react';
import { Grid, Segment, Button, Form } from 'semantic-ui-react'
import EventDetail from './eventDetail'


class UserProfile extends Component {
    state = {
        edit: false,
        username: this.props.user.username,
        contact: this.props.user.contact,
        supporter: this.props.user.supporter,
        age: this.props.user.age,
        supportedOrgs: this.props.user.supporter.split(" / "),
        id: this.props.user.id
    }

    handleSubmit = () => {
        let user = {username: this.state.username, contact: this.state.contact, supporter: this.state.supportedOrgs.join(" / "), age: this.state.age}
        this.props.editUserInfo(user, this.state.id)
        this.handleChange("edit", !this.state.edit)
    }

    handleChange = (key, value) => {
        if (key === "supportedOrgs") {
            if (this.state.supportedOrgs.includes(value)) {
              this.setState({
                [key]: this.state.supportedOrgs.filter(org => org !== value)
              })
            } else {
              this.setState({
                [key]: [...this.state.supportedOrgs, value]
              })
            }
          } else {
            this.setState({
              [key]: value
          })
        }
    }
    
    render() { 
        const { username, contact, role, supporter, age} = this.props.user
        let supportedOrgs = []
        {supporter.split(" / ").map(sup => (
            supportedOrgs = [...supportedOrgs, this.props.orgs.find(org => org.name === sup)]
        ))}
        return(
            <Grid doubling style={{paddingTop: "20px", paddingLeft: "80px"}}>
                <Grid.Column width="4">
                  <Segment>
                      <h4>Username: </h4><p>{username}</p>
                      <h4>Contact: </h4><p>{contact}</p>
                      <h4>Role: </h4><p>{role}</p>
                      <h4>Supporter: </h4><p>{supporter}</p>
                      <h4>Age: </h4><p>{age}</p>
                      <Button content="Edit User" style={{background: "#FE8E36"}} onClick={() => this.handleChange("edit", !this.state.edit)}/>
                  </Segment>
                </Grid.Column>
                <Grid.Column width="10">
                    <Segment>
                    {this.state.edit 
                    ?
                    <div>
                    <Form>
                    <Form.Field>
                        <label>Name</label>
                        <input value={this.state.username} name="username" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Contact</label>
                        <input value={this.state.contact} name="contact" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                    </Form.Field>
                    {/* <Form.Checkbox
                        label="Public"
                        checked={this.props.public}
                        name="public"
                        onChange={(e, data) => this.props.handleChange(data.name, data.checked)}
                    /> */}
                    {this.props.orgs.map(org => (
                            <Form.Checkbox
                            key={org.id}
                            label={org.name}
                            name="supportedOrgs"
                            checked={this.state.supportedOrgs.includes(org.name)}
                            onChange={(event, data) => {this.handleChange(data.name, data.label)}}
                            />
                    ))}
                    <Form.Field>
                        <label>Age</label>
                        <input name="age" value={this.state.age} type="number" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                    </Form.Field>
                    </Form>
                    <Button content="Cancel" style={{background: "#FE8E36"}} onClick={() => this.handleChange("edit", !this.state.edit)}/>
                    <Button content="Submit" color="green" onClick={this.handleSubmit}/>
                    </div>
                    :
                    <div>
                    <h3>Suggested Events</h3>
                    {supportedOrgs.map(org => (
                        org.events.map(event => (
                            <EventDetail user={this.props.user} event={event} key={event.id} addEventToUser={this.props.addEventToUser} />
                        ))
                    ))}
                    </div>
                    }
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}
 
export default UserProfile;