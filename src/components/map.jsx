import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import keys from '../keys'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${keys.API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 40.693249, lng: -74.057278 }}>
    <Marker position={{ lat: 40.693249, lng: -74.057278 }} />
  </GoogleMap>
));

const enhance = _.identity;

const ReactGoogleMaps = () => [
  <MyMapComponent key="map" />
];

export default enhance(ReactGoogleMaps);

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react'
// import keys from '../keys'
// import{Image} from 'semantic-ui-react'

// class simpleMap extends Component {

//   static defaultProps = {
//     center: {
//       lat: 29.75,
//       lng: -95.36
//     },
//     zoom: 15};

//     render() { 

//         return ( <div style={{ height: '440px', width: '100%' }}>
//         <Image src='../Websiteresources-01.png' style={{height: '30px', position: 'absolute', zIndex: '2', transform: 'translate(220px, 200px' }}/>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: keys.API_KEY }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//         </GoogleMapReact>
//       </div> );
//     }
// }
 
// export default simpleMap;

