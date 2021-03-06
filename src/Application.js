import React from 'react';
import mapboxgl from 'mapbox-gl';
import data from './data/data';
import './Application.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;


class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        lng: 	-3.703790,
        lat: 40.416775,
        zoom: 5.2
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    // add markers to map
    data.places.forEach(function(marker) {

      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25, className: "mapboxgl-popup--brown" }) // add popups
          .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
        .addTo(map);
    });

  }



  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    )
  }
}

export default Application;
