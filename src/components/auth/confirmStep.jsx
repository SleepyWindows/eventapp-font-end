import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Header, Button, Message } from 'semantic-ui-react';

export default class infoStep extends Component {
    state = {  }
    render() { 
        const {username, contact, age, supporter, role } = this.props.values
        return (
            <Grid className="auth-main" style={{height: '100vh'}}>
             <div className="auth-content">
                <div className="auth-card">
                    <Segment stacked>
                     <h2>Logo</h2>
                     <Header as="h2" color="black">
                         Confirm Information
                     </Header>
                     <h4>Username: {username}</h4>
                     <h4>Contact: {contact}</h4>
                     <h4>Age: {age}</h4>
                     <h4>Supporter: {supporter.join(' , ')}</h4>
                     <h4>Role: {role}</h4>
                        
                     <Button onClick={this.props.prevStep} style={{background: "#FF6600", "marginTop": "20px"}} size="huge">
                        Previous
                     </Button>
                     <Button onClick={this.props.submit} style={{background: "#FF6600", "marginTop": "20px"}} size="huge">
                        Submit
                     </Button>
        
                     <Message size="small">
                        <Link style={{color: '#FF6600'}} to="/login">Already Registered?</Link>
                     </Message>
                    </Segment>
                 </div>
                </div>  
            </Grid>
        );
    }
}