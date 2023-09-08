import React from 'react';
import styles from './styles.module.css'; // Importa el archivo de estilos modular

const Address: React.FC = () => {
    return (
        <div className={styles.addressSection}>
            <h2 className={styles.sectionTitle}>Encuéntranos</h2>
            <div className={styles.addressContent}>
                <div className={styles.mapImage}>
                    <img src="/images/Map.png" alt="Mapa" />
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
