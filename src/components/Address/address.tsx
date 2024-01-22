'use client';
import React from 'react';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import styles from './styles.module.css';
const Address: React.FC = () => {
    const mapStyles = {
        width: '100%',
        height: '400px',
    };

    const defaultCenter = { lat: 5.54473748855918, lng: -73.35635419118616};
    const siteName = 'SacrisInk';

    return (
        <div className={styles.addressSection}>
            <h2 className={styles.sectionTitle}>Encuéntranos</h2>
            <div className={styles.addressContent}>
                <div className={styles.mapContainer}>
                    <LoadScript googleMapsApiKey="AIzaSyARSQJX-2INcLDyJ62AURJwRUTSizD4T1c">
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={18}
                            center={defaultCenter}
                        >
                            <Marker
                                position={defaultCenter}
                                label = {{
                                    text: siteName,
                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                    color: 'black'
                                }}
                            >
                            </Marker>
                        </GoogleMap>
                    </LoadScript>
                </div>
                <div className={styles.addressInfo}>
                    <div className={styles.address}>
                        <h3>Dirección</h3>
                        <p>Cra 5b #32-05<br/>
                            Segundo piso<br/>
                            Tunja, Boyacá<br/>
                        </p>
                    </div>
                    <div className={styles.hours}>
                        <h3>Horarios</h3>
                        <p>Lunes a Sábado<br/>
                            10:00am - 7:00pm </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;
