import React, { Component } from 'react';
import UserStep from './userStep';
import InfoStep from './infoStep';
import ConfirmStep from './confirmStep';

class Signup extends Component {

  state = {
    step: 1,
    username: '',
    password: '',
    password_confirmation: '',
    contact: '',
    age: "",
    supporter: [],
    role: '',
    secret_code: ''
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = (key, value) => {
    if (key === "supporter") {
      if (this.state.supporter.includes(value)) {
        this.setState({
          [key]: this.state.supporter.filter(org => org !== value)
        })
      } else {
        this.setState({
          [key]: [...this.state.supporter, value]
        })
      }
    } else {
      this.setState({
        [key]: value
    })
    }
  }

  submit = (e) => {
    e.preventDefault()
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            contact: this.state.contact,
            age: this.state.age,
            supporter: this.state.supporter.join(' , '),
            role: this.state.role,
            secret_code: this.state.secret_code ? this.state.secret_code : "null"
        })
    }
    fetch('http://localhost:3000/signup', options)
        .then(res => res.json())
        .then(userInfo => {
            console.log(userInfo)
            // localStorage.token = userInfo.token
        })
  }

  render() { 
    const { username, password, password_confirmation, contact, age, supporter, role, secret_code} = this.state;
    const values = { username, password, password_confirmation, contact, age, supporter, role, secret_code}
    switch(this.state.step) {
      case 1:
        return <UserStep
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
      case 2:
        return <InfoStep
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                orgs={this.props.orgs}
                values={values}
                />
      case 3:
        return <ConfirmStep
                submit={this.submit}
                prevStep={this.prevStep}
                values={values}
                />
      default:
        return <UserStep
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
    }
  }
}
 
export default Signup;