import React, { Component } from 'react';
import { Card, Image, Icon, Button} from 'semantic-ui-react'
import moment from 'moment'


class EventDetail extends Component {
    state = { 
        event: this.props.event
    }

    render() { 
        const {title, image, category, date, id} = this.props.event
        return(
            
            <Card key={id}>
                <Image src={image} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='category'>{category}</span>
                </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='calendar alternate outline' />
                    {moment(date).format("dddd, MMMM D, YYYY" )}
                </Card.Content>
                {this.props.user ? <Card.Content extra>
                  <Button onClick={() => this.props.addEventToUser(id, this.props.user.id)} content="Follow Event" size="large" style={{background: "#FF6600"}}/>
                </Card.Content> : null
                } 
            </Card>    
        )
    }
}
 
export default EventDetail;
