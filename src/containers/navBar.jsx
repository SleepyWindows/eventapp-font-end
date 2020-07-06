import React, { Component } from 'react';
import {
    Menu,
    Input,
    Icon
} from 'semantic-ui-react'
import { Link } from "react-router-dom";

class NavBar extends Component {
    state = { 
        activeItem: 'home'
     }
    //  These menu options will need to point to methods in app.js to display the appropriate content.
    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    render() { 
        const { activeItem } = this.state
        return ( 
        <div>
            <Menu pointing style={{height: "55px"}}>
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
                
                {localStorage.token 
                ? <Link to=""><Menu.Item
                    name='Logout'
                    active={activeItem === 'Logout'}
                    onClick={this.handleItemClick}/></Link> 
                : <Link to=""><Menu.Item
                    name='Login'
                    active={activeItem === 'Login'}
                    onClick={this.handleItemClick}
                /></Link>}
                
                <Link to="/about">
                    <Menu.Item
                    name='About'
                    active={activeItem === 'about'}
                    onClick={this.handleItemClick}
                    />
                </Link>
                <Menu.Menu position='right' style={{paddingBottom: "10px" }}>
                <Menu.Item>
                    <Icon size="big" name='address card'/>
                </Menu.Item>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>);
    }
}
 
export default NavBar;
