import React, {useContext, useEffect} from 'react'
import {GolfContent, GolfContext} from "../../../../context/golfContext";

const DestinationMap: React.FC = () => {

    const {
        golf
    } = useContext(GolfContext) as GolfContent;

    useEffect(() => {
        // Check if window is defined to ensure we are on the client side
        if (typeof window !== 'undefined' && golf) {
            const L = require('leaflet');
            require('leaflet/dist/leaflet.css');

            // Create a Leaflet map
            const map = L.map('map').setView([golf.latitude, golf.longitude], 15);
            var century21icon = L.icon({
                iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
                shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
                iconSize: [20, 20]
            });
            // Add a tile layer (you may need to replace the URL with your own)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            // Add a marker
            L.marker([golf.latitude, golf.longitude], {icon: century21icon}).addTo(map).bindPopup(golf.name).openPopup();
        }
    }, [golf]);
    return (
        <div>
            <div id="map" style={{ height: '600px' }} />
        </div>
    );
};

export default DestinationMap