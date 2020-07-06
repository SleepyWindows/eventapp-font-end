import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Message, Header, Segment, Grid } from "semantic-ui-react";
import './auth.css';

export default class Login extends Component {

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    logIn = (e) => {
        e.preventDefault()
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }
        fetch('http://localhost:3000/login', options)
            .then(res => res.json())
            .then(userInfo => {
                localStorage.token = userInfo.token
            })
    }
    
    render() { 
        return (
            <Grid className="auth-main" style={{height: '100vh'}}>
             <div className="auth-content">
                <div className="auth-card">
                    <Segment stacked>
                     <h2>Logo</h2>
                     <Header as="h2" color="black">
                         Log-in to your account
                     </Header>
                     <Form onSubmit={this.logIn} size="large" className="auth-form" autoComplete="off">
                        <label className="label-input" >Username</label>
                        <Form.Input
                         fluid
                         icon="user"
                         iconPosition="left"
                         name="username"
                         placeholder="jsmith12"
                         className="auth-input-field"
                         onChange={this.handleChange}
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
                         onChange={this.handleChange}
                        />

                        <Button style={{background: "#FF6600"}} fluid size="huge">
                            Login
                        </Button>
        
                        <Message size="small">
                            <Link style={{color: '#FF6600'}} to="/signup">Not Registered?</Link>
                        </Message>

                     </Form>
                    </Segment>
                </div>
             </div>  
            </Grid>
        );
    };
};