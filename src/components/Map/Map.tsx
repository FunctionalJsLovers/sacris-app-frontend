'use client';
import styles from './styles.module.css';
import React, {useEffect} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const Map = () => {

    useEffect(() => {
        const mapCenter: L.LatLngExpression = [5.544726809922877, -73.3562254450495];
        const map = L.map('map').setView(mapCenter, 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        const customIcon = L.icon({
            iconUrl: '/images/logo2.png',
            iconSize: [30, 30],
        });

        L.marker(mapCenter, { icon: customIcon }).addTo(map);
    }, []);

    return (
        <div className={styles.mapContainer}>
            <div className={styles.mapBox}><center>
                <div className={styles.mapTitle}>
                    Visítanos
                </div>
                <div id="map" style={{ width: '400px', height: '400px' }}></div>
            </center>
            </div>
        </div>

    );
};

export default Map;
