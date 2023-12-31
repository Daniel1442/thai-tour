import React, {useEffect} from 'react';
import {useRouter} from "next/router";

const LeafletMap: React.FC = () => {

    const router = useRouter();
    let long = router.query.long
    let lat = router.query.lat
    let name = router.query.name



    useEffect(() => {
        // Check if window is defined to ensure we are on the client side
        if (typeof window !== 'undefined' && long && lat) {
            const L = require('leaflet');
            require('leaflet/dist/leaflet.css');

            // Create a Leaflet map
            const map = L.map('map').setView([lat, long], 15);
            var century21icon = L.icon({
                iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
                shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
                iconSize: [20, 20]
            });
            // Add a tile layer (you may need to replace the URL with your own)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            // Add a marker
            L.marker([lat, long], {icon: century21icon}).addTo(map).bindPopup(name).openPopup();
        }
    }, [router]);

    return <div id="map" style={{ height: '600px' }} />;
};

export default LeafletMap;
