import React, {useContext, useEffect} from 'react'
import {PlaceContent, PlaceContext} from "../../../context/placeContext";

const DestinationMap: React.FC = () => {

    const {
        place,
        fetchPlace
    } = useContext(PlaceContext) as PlaceContent;

    useEffect(() => {
        // Check if window is defined to ensure we are on the client side
        if (typeof window !== 'undefined' && place) {
            const L = require('leaflet');
            require('leaflet/dist/leaflet.css');

            // Create a Leaflet map
            const map = L.map('map').setView([place.latitude, place.longitude], 15);
            var century21icon = L.icon({
                iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
                shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
                iconSize: [20, 20]
            });
            // Add a tile layer (you may need to replace the URL with your own)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            // Add a marker
            L.marker([place.latitude, place.longitude], {icon: century21icon}).addTo(map).bindPopup(place.name).openPopup();
        }
    }, [place]);
    return (
        <div>
            <div id="map" style={{ height: '600px' }} />
        </div>
    );
};

export default DestinationMap