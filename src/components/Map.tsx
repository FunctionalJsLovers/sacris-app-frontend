'use client';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import React, { useMemo } from 'react';
import '../styles/stylesMain/mapcss.css'

const Map: React.FC = () => {
    const libraries = useMemo(() => ['places'], []);
    const mapCenter = useMemo(() => ({ lat: 5.544726809922877, lng: -73.3562254450495 }), []);
    const markerPosition = useMemo(() => ({ lat: 5.544726809922877, lng: -73.3562254450495 }), []);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCf2RCwd-MwIPsQ9uamw6kNTT8fxl65VmA',
        libraries: libraries as any,
    });

    return (
        <div className="map-container">
            <div className="mapBox"><center>
                <div className="mapTitle">
                    Visítanos
                </div>
                <GoogleMap
                    zoom={15}
                    center={mapCenter}
                    mapContainerStyle={{ width: '400px', height: '400px' }}
                >
                    <Marker position={markerPosition} />
                </GoogleMap>
            </center></div>
        </div>
    );
};

export default Map;