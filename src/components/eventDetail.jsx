import React, { Component } from 'react';
import { Card, Image, Icon} from 'semantic-ui-react'
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
            </Card>    
        )
    }
}
 
export default EventDetail;
