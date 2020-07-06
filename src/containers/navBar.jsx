<<<<<<< HEAD
import React from 'react';

const NavBar = () => {
    return (
        <div>
            <h1>NavBar</h1>
        </div>
    );
=======
import React, { Component } from 'react';
import {
    Menu,
    Input,
    Icon
} from 'semantic-ui-react'

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
            <Menu pointing>
                <Menu.Item>{this.props.name}</Menu.Item>
                <Menu.Item
                name='Home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='Communication'
                active={activeItem === 'communication'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='Login'
                active={activeItem === 'Login'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='About'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                <Menu.Item>
                    <Icon name='address card'/>
                </Menu.Item>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>);
    }
>>>>>>> origin/EdwinCalvillo
}
 
export default NavBar;
