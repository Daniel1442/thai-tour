import React, {useEffect} from 'react';

const LeafletMap: React.FC = () => {
    useEffect(() => {
        // Check if window is defined to ensure we are on the client side
        if (typeof window !== 'undefined') {
            const L = require('leaflet');
            require('leaflet/dist/leaflet.css');

            // Create a Leaflet map
            const map = L.map('map').setView([13.75398, 100.50144], 6);

            // Add a tile layer (you may need to replace the URL with your own)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            // Add a marker
            L.marker([13.75398, 100.50144]).addTo(map).bindPopup('Bangkok').openPopup();
        }
    }, []);

    return <div id="map" style={{ height: '600px' }} />;
};

export default LeafletMap;
