import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'

class simpleMap extends Component {
    state = {  }
    static defaultProps = {
        center: {
          lat: 29.75,
          lng: -95.36
        },
        zoom: 15};
    render() { 

        return ( <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAR9zq4qssQjYtkbdiv0FT-ntL3atjC03M' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div> );
    }
}
 
export default simpleMap;