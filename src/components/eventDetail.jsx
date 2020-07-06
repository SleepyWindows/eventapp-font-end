import React, { Component } from 'react';
import { Card, Image, Button, Header, Icon, Dropdown } from 'semantic-ui-react'
import moment from 'moment'


class EventDetail extends Component {
    state = { 
        event: this.props.event
    }


    render() { 
        const {title, image, category, stage, date, address, description, id} = this.props.event
        return(

            <Card key={id}>
                <Image src={image} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='category'>{category}</span>
                </Card.Meta>
                <Card.Description>
                    {moment(date).format("dddd, MMMM D, YYYY" )}
                </Card.Description>
                <Card.Description>
                    {description}
                </Card.Description>
                </Card.Content>
            </Card>    
            // <div>
            //     <img src={image} alt=''/>
            //     <h2>{title}</h2>
            //     <h4>{category}</h4>
            //     <h4>{stage}</h4>
            //     <h4>{date}</h4>
            //     <h4>{address}</h4>
            //     <p>{description}</p>
            // </div>
            )
    }
}
 
export default EventDetail;
