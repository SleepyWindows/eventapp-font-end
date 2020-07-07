import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'
import keys from '../keys'

class simpleMap extends Component {
    state = {  }
    static defaultProps = {
        center: {
          lat: 29.75,
          lng: -95.36
        },
        zoom: 15};
    render() { 

        return ( <div style={{ height: '440px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div> );
    }
}
 
export default simpleMap;