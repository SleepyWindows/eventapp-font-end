import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Header, Button, Message, Grid, Segment } from 'semantic-ui-react';
import './auth.css'

class userStep extends Component {
    state = {  }
    render() { 
        const { username, password, password_confirmation } = this.props.values
        return (
            <Grid className="auth-main" style={{height: '100vh'}}>
             <div className="auth-content">
                <div className="auth-card">
                    <Segment stacked>
                     <h2>Logo</h2>
                     <Header as="h2" color="black">
                         Sign up to get started
                     </Header>
                     <Form onSubmit={this.props.nextStep} size="large" className="auth-form" autoComplete="off">
                        <label className="label-input" >Username</label>
                        <Form.Input
                         fluid
                         icon="user"
                         iconPosition="left"
                         name="username"
                         placeholder="jsmith12"
                         className="auth-input-field"
                         value={username}
                         onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
                        />

                        <label className="label-input" >Password</label>
                        <Form.Input
                         fluid
                         icon="lock"
                         iconPosition="left"
                         placeholder="Password"
                         type="password"
                         name="password"
                         className="auth-input-field"
                         value={password}
                         onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
                        />

                        <label className="label-input" >Confirm Password</label>
                        <Form.Input
                         fluid
                         icon="lock"
                         iconPosition="left"
                         placeholder="Confirm Password"
                         type="password"
                         className="auth-input-field"
                         name="password_confirmation"
                         value={password_confirmation}
                         onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
                        />

                        <Button style={{background: "#FE8E36"}} fluid size="huge">
                            Save and Continue
                        </Button>
        
                        <Message size="small">
                        <Link style={{color: '#FE8E36'}} to="/login">Already Registered?</Link>
                        </Message>

                     </Form>
                    </Segment>
                 </div>
                </div>  
            </Grid>
        );
    }
}
 
export default userStep;