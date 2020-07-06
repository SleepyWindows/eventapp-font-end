import React, { Component } from 'react';
import {
    Menu,
    Input
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
                <Menu.Item position='right'><img src={this.props.avi} width='100px' height='30px' alt=''/></Menu.Item>
                <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>);
    }
}
 
export default NavBar;