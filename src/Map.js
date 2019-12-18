import React from "react";
import mapboxgl from "mapbox-gl";

class Map extends React.Component {

    componentDidMount() {
        mapboxgl.accessToken = 'your access token';
        this.map = new mapboxgl.Map({
            logoPosition: 'bottom-right',
            container: this.mapContainer,
            style: 'your style url', // use a resource intensive style url
            center: [-74.5, 40],
            zoom: 9,
            maxTileCacheSize: 0
        });
    }

    componentWillUnmount() {
        if (this.map) {
            this.map.remove();
        }
    }

    render() {
        return <div style={{position: 'absolute', width: '100%', height:'100%'}}
                    id={'container'}
                    ref={el => this.mapContainer = el} />
    }
}


export default Map;