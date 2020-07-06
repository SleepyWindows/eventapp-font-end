import React, { Component } from 'react';
import { Card, Image, Icon} from 'semantic-ui-react'
import moment from 'moment'


class EventDetail extends Component {
    state = { 
        event: this.props.event
    }


    render() { 
        const {title, image, category, stage, date, address, description, id} = this.props.event
        return(
            
            // ?

            <Card key={id}>
                <Image src={image} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='category'>{category}</span>
                </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='calendar alternate outline' />
                    {moment(date).format("dddd, MMMM D, YYYY" )}
                </Card.Content>
            </Card>    
            // :
            // <Card key={id}>
            //     <Image src={image} wrapped ui={false} />
            //     <Card.Content>
            //     <Card.Header>{title}</Card.Header>
            //     <Card.Meta>
            //         <span className='category'>{category}</span>
            //     </Card.Meta>
            //     <Card.Description>
            //         {stage}
            //     </Card.Description>
            //     <Card.Description>
            //         {address}
            //     </Card.Description>
            //     <Card.Description>
            //         {description}
            //     </Card.Description>
            //     </Card.Content>
            //     <Card.Content extra>
            //         <Icon name='calendar alternate outline' />
            //         {moment(date).format("dddd, MMMM D, YYYY" )}
            //     </Card.Content>
            // </Card>    
            )
    }
}
 
export default EventDetail;
