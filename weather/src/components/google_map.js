import React, { Component } from 'react';

export default class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }
  render() {
    // 'ref' makes a reference to a DOM element renders to the page
    // in this case, with class 'map'
    return <div ref="map" />;
  }
}
