import React, { Component } from 'react';
import {
    Menu,
    Icon
} from 'semantic-ui-react'
import { withRouter, Link } from "react-router-dom";

class NavBar extends Component {
    state = { 
        activeItem: 'home'
     }

    handleLogout = () => {
        localStorage.clear()
        this.props.handleStateChange("token", null)
    }
    //  These menu options will need to point to methods in app.js to display the appropriate content.
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() { 
        const { activeItem } = this.state
        return ( 
        <div>
            <Menu pointing style={{height: "40px" }}>
                <Link to="/home">
                    <Menu.Item
                    name='Home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    />
                </Link>
                <Link to="/dashboard">
                    <Menu.Item
                    name='Dashboard'
                    active={activeItem === 'dashboard'}
                    onClick={this.handleItemClick}
                    />
                </Link>
                <Link to="/about">
                    <Menu.Item
                    name='About'
                    active={activeItem === 'about'}
                    onClick={this.handleItemClick}
                    />
                </Link>
                <Menu.Menu position='right'>
                <Menu.Item>
                    <Link style={{color: "#373737"}} to="/profile">
                    <Icon size="big" name='address card'/>
                    </Link>
                </Menu.Item>
                {localStorage.token 
                ? <Link to=""><Menu.Item
                    name='Logout'
                    active={activeItem === 'Logout'}
                    onClick={this.handleLogout}/></Link> 
                : <Link to="/login"><Menu.Item
                    name='Login'
                    active={activeItem === 'Login'}
                    onClick={this.handleItemClick}
                /></Link>}
                </Menu.Menu>
            </Menu>
        </div>);
    }
}
 
export default withRouter(NavBar);
