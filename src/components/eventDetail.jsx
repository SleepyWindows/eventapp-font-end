import React, { Component } from 'react';
import { Card, Image, Icon, Button} from 'semantic-ui-react'
import moment from 'moment'


class EventDetail extends Component {
    state = { 
        event: this.props.event
    }

    render() { 
        const {title, image, category, stage, date, address, description, id} = this.props.event
        return(
            // <div>
            
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
            // {/* <Card key={id}>
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
            //     <Card.Content extra>
            //         <Button content="Edit Event" size="small" style={{background: "#86abba"}}/>
            //         <Button content="Delete Event" size="small" style={{background: "#86abba"}}/>
            //     </Card.Content>                
            // </Card>     */}
            // </div>

            )
    }
}
 
export default EventDetail;
