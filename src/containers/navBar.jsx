import React, { Component } from 'react';
import {
    Menu,
    Input,
    Icon
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
            <Link to="/home">
                <Menu.Item>{this.props.name}</Menu.Item>
                <Menu.Item
                name='Home'
                active={activeItem === 'home'}
                />
            </Link>
                <Menu.Item
                name='Dashboard'
                active={activeItem === 'dashboard'}
                onClick={this.handleItemClick}
                />
                {localStorage.token 
                ? <Menu.Item
                    name='Logout'
                    active={activeItem === 'Logout'}
                    onClick={this.handleItemClick}/> 
                : <Menu.Item
                    name='Login'
                    active={activeItem === 'Login'}
                    onClick={this.handleItemClick}
                />}
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
}
 
export default NavBar;
